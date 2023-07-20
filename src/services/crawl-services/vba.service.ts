import { repository } from '@loopback/repository'
import axios from 'axios'
import cheerio from 'cheerio'
import slugify from 'slugify'
import { CrawlProvider } from '../../constants'
import { ConvertedData } from '../../constants/converted-data.type'
import { RawData } from '../../constants/raw-data'
import { VBAMatch, VBAStanding } from '../../constants/raw-data/vba-raw-data.type'
import { SportTypeEnum } from '../../constants/sport-type.enum'
import {
  CrawlConfiguration,
  LeagueStanding,
  LeagueStandingConverted,
  Match,
  MatchConverted,
  SportType,
  Stadium,
  Team,
} from '../../models'
import {
  LeagueSeasonRepository,
  LeagueStandingRepository,
  MatchRepository,
  SportTypeRepository,
  StadiumRepository,
  TeamRepository,
} from '../../repositories'
import { IDataCrawlerServiceDto } from './crawl-service-dto.interface'

export class VBACrawlerService implements IDataCrawlerServiceDto {
  constructor(
    @repository(SportTypeRepository) private sportTypeRepository: SportTypeRepository,
    @repository(LeagueSeasonRepository) private leagueSeasonRepository: LeagueSeasonRepository,
    @repository(TeamRepository) private teamRepository: TeamRepository,
    @repository(StadiumRepository) private stadiumRepository: StadiumRepository,
    @repository(MatchRepository) private matchRepository: MatchRepository,
    @repository(LeagueStandingRepository) private leagueStandingRepository: LeagueStandingRepository
  ) {}

  async crawlMatches(crawlConfiguration: CrawlConfiguration): Promise<RawData> {
    try {
      const matches: VBAMatch[] = []

      const response = await axios.get(crawlConfiguration.url)

      const html = response.data
      const $ = cheerio.load(html.html)

      const refLeagueSeasonId = $('input[type="hidden"][id="competitionId"]').val()?.toString() ?? null

      $('.match-wrap').each((index, element) => {
        const matchId = $(element)?.attr('id')
        const VBAId = matchId ? parseInt(matchId?.replace('extfix_', '')) : -1
        const refId = VBAId?.toString()

        const status = $(element)?.hasClass('STATUS_COMPLETE') ? 'COMPLETE' : 'SCHEDULED'

        const homeName = $(element)?.find('.home-team .team-name-full')?.text()
        const homeSlug = slugify(homeName, { lower: true })
        const homeLogo = $(element)?.find('.home-team .team-logo img')?.attr('src') ?? null
        const homeTeamGoals = status === 'COMPLETE' ? parseInt($(element)?.find('.homescore .fake-cell')?.text()) : null

        const awayName = $(element)?.find('.away-team .team-name-full')?.text()
        const awaySlug = slugify(awayName, { lower: true })
        const awayLogo = $(element)?.find('.away-team .team-logo img')?.attr('src') ?? null
        const awayTeamGoals = status === 'COMPLETE' ? parseInt($(element)?.find('.awayscore .fake-cell')?.text()) : null

        const dateString = $(element)?.find('.match-time span')?.text()
        const datetime = new Date(dateString)?.toISOString()

        const stadiumName = $(element)?.find('.match-venue .venuename')?.text()
        const stadiumSlug = slugify(stadiumName, { lower: true })

        if (VBAId !== -1) {
          const match: VBAMatch = {
            refId,
            refLeagueSeasonId,
            homeSlug,
            awaySlug,
            homeName,
            awayName,
            homeLogo,
            awayLogo,
            homeTeamGoals,
            awayTeamGoals,
            stadiumName,
            stadiumSlug,
            datetime,
            status,
          }
          matches.push(match)
        }
      })

      return {
        matches,
      }
    } catch (error) {
      console.log(error)
      return {}
    }
  }

  async crawlStandings(crawlConfiguration: CrawlConfiguration): Promise<RawData> {
    try {
      const standings: VBAStanding[] = []

      const response = await axios.get(crawlConfiguration.url)

      const html = response.data
      const $ = cheerio.load(html)

      // Get refLeagueSeasonId by url
      // `https://hosted.dcd.shared.geniussports.com/VBA/en/competition/${refLeagueSeasonId}/standings`
      const parts = crawlConfiguration.url.split('/')
      const refLeagueSeasonId = parts[6]

      $('tbody tr').each((index, element) => {
        const teamName = $(element)?.find('.team-name .team-name-full')?.text()?.trim()
        const teamSlug = slugify(teamName, { lower: true })
        const teamLogo = $(element)?.find('.team-logo img')?.attr('src') ?? null

        const position = parseInt($(element)?.find('td:nth-child(1)')?.text()?.trim())
        const playedGames = parseInt($(element)?.find('.STANDINGS_played')?.text()?.trim())
        const won = parseInt($(element)?.find('.STANDINGS_won')?.text()?.trim())
        const lost = parseInt($(element)?.find('.STANDINGS_lost')?.text()?.trim())
        const wonPercentage = parseInt($(element)?.find('.STANDINGS_percentageWon')?.text()?.trim())
        const goalsFor = parseInt($(element)?.find('.STANDINGS_scoredFor')?.text()?.trim())
        const goalsAgainst = parseInt($(element)?.find('.STANDINGS_scoredAgainst')?.text()?.trim())
        const goalsDifference = parseInt($(element)?.find('.STANDINGS_pointsDiff')?.text()?.trim())
        const streak = parseInt($(element)?.find('.STANDINGS_streak')?.text()?.trim())

        const refId = `${crawlConfiguration.principleId}-${slugify(teamName, { lower: true })}`

        standings.push({
          refId,
          refLeagueSeasonId,
          teamName,
          teamSlug,
          teamLogo,
          position,
          playedGames,
          won,
          lost,
          wonPercentage,
          goalsFor,
          goalsAgainst,
          goalsDifference,
          streak,
        })
      })

      return {
        standings,
      }
    } catch (error) {
      console.log(error)
      return {}
    }
  }

  convertMatchesData(crawlData: RawData): ConvertedData {
    const rawMatches: VBAMatch[] = crawlData?.matches as VBAMatch[]

    const teams: Team[] = []
    const stadiums: Stadium[] = []
    const matches: MatchConverted[] = []

    if (rawMatches && rawMatches.length > 0) {
      for (const match of rawMatches) {
        const refId = match?.refId
        const refLeagueSeasonId = match?.refLeagueSeasonId
        const homeSlug = match?.homeSlug
        const awaySlug = match?.awaySlug
        const homeFullName = match?.homeName
        const awayFullName = match?.awayName
        const homeLogo = match?.homeLogo
        const awayLogo = match?.awayLogo
        const homeTeamGoals = match?.homeTeamGoals
        const awayTeamGoals = match?.awayTeamGoals
        const stadiumName = match?.stadiumName
        const stadiumSlug = match?.stadiumSlug
        const datetime = match?.datetime
        const status = match?.status

        matches.push(
          new MatchConverted({
            refId,
            refLeagueSeasonId,
            homeSlug,
            awaySlug,
            homeFullName,
            awayFullName,
            homeLogo,
            awayLogo,
            homeTeamGoals,
            awayTeamGoals,
            stadiumName,
            stadiumSlug,
            datetime,
            status,
          })
        )

        if (!teams.find((team) => team.slug === homeSlug)) {
          teams.push(
            new Team({
              name: homeFullName,
              slug: homeSlug,
              logo: homeLogo,
            })
          )
        }

        if (!teams.find((team) => team.slug === awaySlug)) {
          teams.push(
            new Team({
              name: awayFullName,
              slug: awaySlug,
              logo: awayLogo,
            })
          )
        }

        if (!stadiums.find((stadium) => stadium.slug === stadiumSlug)) {
          stadiums.push(
            new Stadium({
              name: stadiumName,
              slug: stadiumSlug,
            })
          )
        }
      }
    }

    return {
      matches,
      teams,
      stadiums,
    }
  }

  convertStandingsData(crawlData: RawData): ConvertedData {
    const rawStandings: VBAStanding[] = crawlData.standings as VBAStanding[]
    const teams: Team[] = []
    const standings: LeagueStandingConverted[] = []

    if (rawStandings && rawStandings.length > 0) {
      for (const standing of rawStandings) {
        const refId = standing?.refId
        const refLeagueSeasonId = standing?.refLeagueSeasonId
        const teamName = standing?.teamName
        const teamSlug = standing?.teamSlug
        const teamLogo = standing?.teamLogo
        const position = standing?.position
        const playedGames = standing?.playedGames
        const won = standing?.won
        const lost = standing?.lost
        const wonPercentage = standing?.wonPercentage
        const goalsFor = standing?.goalsFor
        const goalsAgainst = standing?.goalsAgainst
        const goalsDifference = standing?.goalsDifference
        const streak = standing?.streak

        standings.push(
          new LeagueStandingConverted({
            refId,
            refLeagueSeasonId,
            teamName,
            teamSlug,
            teamLogo,
            position,
            playedGames,
            won,
            lost,
            wonPercentage,
            goalsFor,
            goalsAgainst,
            goalsDifference,
            streak,
          })
        )

        if (!teams.find((team) => team.slug === teamSlug)) {
          teams.push(
            new Team({
              name: teamName,
              slug: teamSlug,
              logo: teamLogo,
            })
          )
        }
      }
    }

    return {
      standings,
      teams,
    }
  }

  async saveMatchesToDatabase(convertedData: ConvertedData, crawlConfiguration: CrawlConfiguration): Promise<Match[]> {
    const sportType: SportType | null = await this.sportTypeRepository.findOne({
      where: { name: SportTypeEnum.Basketball },
    })
    const leagueSeasonId = parseInt(crawlConfiguration.principleId)
    const provider = CrawlProvider.VBA

    const matchEntities: Match[] = []

    if (sportType) {
      // Save Teams
      if (convertedData.teams) {
        for (const team of convertedData.teams) {
          const teamInDatabase = await this.teamRepository.findOne({
            where: { slug: team.slug, sportTypeId: sportType.id, provider },
          })

          const teamEntity = {
            name: team?.name,
            slug: team?.slug,
            logo: team?.logo,
            sportTypeId: sportType?.id,
            provider,
          }

          if (teamInDatabase) {
            await this.teamRepository.updateById(teamInDatabase.id, teamEntity)
          } else {
            await this.teamRepository.create(teamEntity)
          }
        }
      }

      // Save Stadiums
      if (convertedData.stadiums) {
        for (const stadium of convertedData.stadiums) {
          const stadiumInDatabase = await this.stadiumRepository.findOne({
            where: { slug: stadium.slug },
          })

          const stadiumEntity = {
            name: stadium?.name,
            slug: stadium?.slug,
          }

          if (stadiumInDatabase) {
            await this.stadiumRepository.updateById(stadiumInDatabase.id, stadiumEntity)
          } else {
            await this.stadiumRepository.create(stadiumEntity)
          }
        }
      }

      // Save Matches
      if (convertedData.matches) {
        for (const match of convertedData.matches) {
          const matchInDatabase = await this.matchRepository.findOne({
            where: { refId: match.refId, sportTypeId: sportType.id, provider },
          })

          const homeTeam = await this.teamRepository.findOne({
            where: { slug: match.homeSlug, sportTypeId: sportType.id, provider },
          })

          const awayTeam = await this.teamRepository.findOne({
            where: { slug: match.awaySlug, sportTypeId: sportType.id, provider },
          })

          const stadium = await this.stadiumRepository.findOne({
            where: { slug: match.stadiumSlug },
          })

          if (homeTeam && awayTeam && stadium) {
            const matchEntity = {
              sportTypeId: sportType?.id,
              provider,
              homeTeamGoals: match?.homeTeamGoals,
              awayTeamGoals: match?.awayTeamGoals,
              datetime: match?.datetime,
              status: match?.status,
              refId: match?.refId,
              leagueSeasonId,
              homeTeamId: homeTeam?.id,
              awayTeamId: awayTeam?.id,
              stadiumId: stadium?.id,
            }

            if (matchInDatabase) {
              await this.matchRepository.updateById(matchInDatabase.id, matchEntity)
            } else {
              await this.matchRepository.create(matchEntity)
            }

            matchEntities.push(new Match(matchEntity))
          }
        }
      }
    }

    return matchEntities
  }

  async saveStandingsToDatabase(
    convertedData: ConvertedData,
    crawlConfiguration: CrawlConfiguration
  ): Promise<LeagueStanding[]> {
    const sportType: SportType | null = await this.sportTypeRepository.findOne({
      where: { name: SportTypeEnum.Basketball },
    })
    const leagueSeasonId = parseInt(crawlConfiguration.principleId)
    const provider = CrawlProvider.VBA

    const standingEntities: LeagueStanding[] = []

    if (sportType) {
      // Save Teams
      if (convertedData.teams) {
        for (const team of convertedData.teams) {
          const teamInDatabase = await this.teamRepository.findOne({
            where: { slug: team.slug, sportTypeId: sportType.id, provider },
          })

          const teamEntity = {
            name: team?.name,
            slug: team?.slug,
            logo: team?.logo,
            sportTypeId: sportType?.id,
            provider,
          }

          if (teamInDatabase) {
            await this.teamRepository.updateById(teamInDatabase.id, teamEntity)
          } else {
            await this.teamRepository.create(teamEntity)
          }
        }
      }

      // Save Standings
      if (convertedData.standings) {
        for (const standing of convertedData.standings) {
          const standingInDatabase = await this.leagueStandingRepository.findOne({
            where: {
              refId: standing.refId,
              sportTypeId: sportType.id,
              provider,
            },
          })

          const team = await this.teamRepository.findOne({
            where: { slug: standing.teamSlug, sportTypeId: sportType.id, provider },
          })

          if (team) {
            const standingEntity = {
              sportTypeId: sportType?.id,
              provider,
              position: standing?.position,
              playedGames: standing?.playedGames,
              won: standing?.won,
              lost: standing?.lost,
              wonPercentage: standing?.wonPercentage,
              goalsFor: standing?.goalsFor,
              goalsAgainst: standing?.goalsAgainst,
              goalsDifference: standing?.goalsDifference,
              streak: standing?.streak,
              refId: standing?.refId,
              teamId: team?.id,
              leagueSeasonId,
            }

            if (standingInDatabase) {
              await this.leagueStandingRepository.updateById(standingInDatabase.id, standingEntity)
            } else {
              await this.leagueStandingRepository.create(standingEntity)
            }

            standingEntities.push(new LeagueStanding(standingEntity))
          }
        }
      }
    }

    return standingEntities
  }
}
