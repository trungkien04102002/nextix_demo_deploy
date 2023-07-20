import axios from 'axios'
// import * as fs from 'fs'
import { /* inject, */ BindingScope, injectable } from '@loopback/core'
import { repository } from '@loopback/repository'
import { formatDateEPL, generateSlug } from '../../common/helpers'
import { parseUrlEplCrawler } from '../../common/helpers/handle-paging-url'
import { getLogger } from '../../common/helpers/logger-config'
import { ConvertedData } from '../../constants/converted-data.type'
import { eplOrigin } from '../../constants/provider-constant'
import { RawData } from '../../constants/raw-data'
import { EPLMatch, EPLStanding } from '../../constants/raw-data/epl-raw-data.type'
import {
  CrawlConfiguration,
  LeagueStanding,
  LeagueStandingConverted,
  Match,
  MatchConverted,
  Stadium,
  Team,
} from '../../models'
import {
  CrawlConfigurationRepository,
  LeagueSeasonRepository,
  LeagueStandingRepository,
  MatchRepository,
  StadiumRepository,
  TeamRepository,
} from '../../repositories'
import { IDataCrawlerServiceDto } from './crawl-service-dto.interface'

const logger = getLogger('data-crawler-service')

@injectable({ scope: BindingScope.TRANSIENT })
export class EplCrawlerService implements IDataCrawlerServiceDto {
  public timeStamp: number
  constructor(
    @repository(CrawlConfigurationRepository) private crawlConfigurationRepository: CrawlConfigurationRepository,
    @repository(TeamRepository) public teamRepository: TeamRepository,
    @repository(StadiumRepository) public stadiumRepository: StadiumRepository,
    @repository(MatchRepository) public matchRepository: MatchRepository,
    @repository(LeagueStandingRepository) public leagueStandingRepository: LeagueStandingRepository,
    @repository(LeagueSeasonRepository) public leagueSeasonRepository: LeagueSeasonRepository
  ) {
    this.timeStamp = Date.now()
  }

  public async crawlMatches(crawlConfiguration: CrawlConfiguration): Promise<RawData> {
    const allFixturesData: EPLMatch[] = []
    const parsedUrl = parseUrlEplCrawler(crawlConfiguration.url)
    const baseUrl = parsedUrl.baseUrl
    const queryParams = parsedUrl.queryParams
    for (let page = 0; page < Number(queryParams.pageSize); page++) {
      const urlSearchParams = new URLSearchParams({ ...queryParams, page: page.toString() })
      const url = `${baseUrl}?${urlSearchParams}`
      try {
        const response = await axios.get(url, { headers: { Origin: eplOrigin } })
        const data = response.data
        for (const content of data.content) {
          allFixturesData.push(content)
        }
      } catch (err) {
        throw new Error('Fail to fetch Matches of Football')
      }
    }
    return { matches: allFixturesData }
  }

  public async crawlStandings(crawlConfiguration: CrawlConfiguration): Promise<RawData> {
    try {
      const response = await axios.get(crawlConfiguration.url, {
        headers: {
          Origin: eplOrigin,
        },
      })
      const result: EPLStanding[] = []
      for (const row of response.data.tables[0].entries) {
        result.push(row)
      }

      return { standings: result }
    } catch (error) {
      throw new Error('Fail to fetch Standing of Football')
    }
  }

  public convertMatchesData(crawlData: RawData): ConvertedData {
    console.log('Visit save Convert Matches Data')
    // const dataResponse = await this.crawlMatches(crawlConfiguration)
    const result: MatchConverted[] = []
    const responeMatchData: EPLMatch[] = crawlData.matches as EPLMatch[]
    for (const match of responeMatchData) {
      // console.log('Match raw:',match)
      const datetime = formatDateEPL(match?.provisionalKickoff?.label )||formatDateEPL(match?.kickoff?.label ?? '')
      // console.log('break')
      const homeFullName = match?.teams[0]?.team?.club?.name
      const awayFullName = match?.teams[1]?.team?.club?.name
      const stadiumName = match?.ground?.name
      const homeShortName = match?.teams[0]?.team?.club?.shortName
      const awayShortName = match?.teams[1]?.team?.club?.shortName
      const homeAbbr = match?.teams[0]?.team?.club?.abbr
      const awayAbbr = match?.teams[1]?.team?.club?.abbr
      const homeSlug = generateSlug(match?.teams[0]?.team?.club?.name)
      const awaySlug = generateSlug(match?.teams[1]?.team?.club?.name)
      const stadiumSlug = generateSlug(match?.ground?.name)
      const homeTeamGoals = Number(match?.teams[0]?.score ?? 0)
      const awayTeamGoals = Number(match?.teams[1]?.score ?? 0)
      const refId = match.id.toString()
      const matchEntry = new MatchConverted({
        datetime,
        stadiumName,
        homeShortName,
        awayShortName,
        homeAbbr,
        awayAbbr,
        homeFullName,
        awayFullName,
        stadiumSlug,
        homeSlug,
        awaySlug,
        refId,
        awayTeamGoals,
        homeTeamGoals,
      })
      result.push(matchEntry)
    }
    // const timeStampISO = new Date(this.timeStamp).toISOString()
    // const folderName = `epl-dto-${timeStampISO}`
    // const folderPath = `storage/${folderName}`

    // if (!fs.existsSync(folderPath)) {
    //   fs.mkdirSync(folderPath, { recursive: true })
    // }
    // const fileName = 'matches'
    // const dataFile = result.map((res) => JSON.stringify(res))
    // fs.writeFileSync(`${folderPath}/${fileName}.json`, dataFile.join('\n'), 'utf8')
    return {
      matches: result,
    }
  }

  public convertStandingsData(crawlData: RawData): ConvertedData {
    console.log('Visit save Convert Standing Data')
    const dataResponse: EPLStanding[] = crawlData.standings as EPLStanding[]
    const result: LeagueStandingConverted[] = []
    for (const row of dataResponse) {
      const position = row?.position
      const teamName = row?.team?.club?.name
      const teamSlug = generateSlug(row?.team?.club?.name)
      //  const stadium = row?.ground?.name;
      //  const stadiumSlug = generateSlug(row?.ground?.name);
      //  const capacity = row?.ground?.capacity;
      //  const address = row?.ground?.city;
      const playedGames = row?.overall?.played
      const won = row?.overall?.won ?? null
      const draw = row?.overall?.drawn
      const lost = row?.overall?.drawn
      const goalsDifference = row?.overall?.goalsDifference
      const goalsFor = row?.overall?.goalsFor
      const goalsAgainst = row?.overall?.goalsAgainst
      const points = row?.overall?.points
      const rowEntry = new LeagueStandingConverted({
        position,
        teamName,
        teamSlug,
        // stadiumSlug,
        // stadium,
        // capacity,
        // address,
        playedGames,
        won,
        draw,
        lost,
        goalsDifference,
        goalsFor,
        goalsAgainst,
        points,
      })
      result.push(rowEntry)
    }
    // const timeStampISO = new Date(this.timeStamp).toISOString()
    // const folderName = `epl-dto-${timeStampISO}`
    // const folderPath = `storage/${folderName}`

    // if (!fs.existsSync(folderPath)) {
    //   fs.mkdirSync(folderPath, { recursive: true })
    // }
    // const fileName = 'standing'
    // const dataFile = result.map((res) => JSON.stringify(res))
    // fs.writeFileSync(`${folderPath}/${fileName}.json`, dataFile.join('\n'), 'utf8')
    return {
      standings: result,
    }
  }

  async saveMatchesToDatabase(convertedData: ConvertedData, crawlConfiguration: CrawlConfiguration): Promise<Match[]> {
    console.log('Visit save Matches to DB')
    const matchesEntity: Match[] = []
    const leagueSeason = await this.leagueSeasonRepository.findOne({
      where: { id: Number(crawlConfiguration.principleId) },
      include: ['league', 'season'],
    })
    if (!leagueSeason) {
      throw new Error('Not found league season')
    }

    const matchData: MatchConverted[] = convertedData.matches as MatchConverted[]
    for (const match of matchData) {
      // Check homeTeam if exist and create
      let homeTeam = await this.teamRepository.findOne({
        where: { slug: match.homeSlug },
      })
      if (!homeTeam) {
        //console.log(match)
        logger.info(`Not found team ${match.homeSlug} - Create new...`)
        homeTeam = await this.teamRepository.create(
          new Team({
            slug: match.homeSlug,
            name: match.homeFullName,
            shortName: match.homeShortName,
            abbr: match.homeAbbr,
            provider: crawlConfiguration.crawlProvider,
          })
        )
      }
      // Check awayTeam if exist and create
      let awayTeam = await this.teamRepository.findOne({
        where: { slug: match.awaySlug },
      })
      if (!awayTeam) {
        logger.info(`Not found team ${match.awaySlug} - Create new...`)
        awayTeam = await this.teamRepository.create(
          new Team({
            slug: match.awaySlug,
            name: match.awayFullName,
            shortName: match.awayShortName,
            abbr: match.awayAbbr,
            provider: crawlConfiguration.crawlProvider
          })
        )
      }

      // Check awayTeam if exist and create
      let stadium = await this.stadiumRepository.findOne({
        where: { slug: match.stadiumSlug },
      })
      if (!stadium) {
        logger.info(`Not found stadium ${match.stadiumSlug} - Create new...`)
        stadium = await this.stadiumRepository.create(
          new Stadium({
            slug: match.stadiumSlug,
            name: match.stadiumName,
          })
        )
      }
      // Check match if exist and create
      let matchRow = await this.matchRepository.findOne({
        where: { refId: match.refId, leagueSeasonId: leagueSeason.id, provider: crawlConfiguration.crawlProvider },
      })
      if (matchRow) {
        // continue
        const updatedMatch: Match = matchRow
        updatedMatch.refId = match.refId
        updatedMatch.datetime = match.datetime
        updatedMatch.leagueSeasonId = leagueSeason.id
        updatedMatch.homeTeamId = homeTeam.id
        updatedMatch.awayTeamId = awayTeam.id
        updatedMatch.awayTeamGoals = Number(match.awayTeamGoals)
        updatedMatch.homeTeamGoals = Number(match.homeTeamGoals)
        updatedMatch.provider = crawlConfiguration.crawlProvider
        await this.matchRepository.updateById(matchRow.id, {
          refId: match.refId,
          datetime: match.datetime,
          leagueSeasonId: leagueSeason.id,
          homeTeamId: homeTeam.id,
          awayTeamId: awayTeam.id,
          awayTeamGoals: Number(match.awayTeamGoals),
          homeTeamGoals: Number(match.homeTeamGoals),
          provider: crawlConfiguration.crawlProvider,
        })
        matchesEntity.push(updatedMatch)
      } else {
        const matchName = `${match.homeFullName} ${match.awayFullName} ${leagueSeason.id?.toString()}`
        matchRow = new Match({
          refId: match.refId,
          datetime: match.datetime,
          slug: generateSlug(matchName),
          leagueSeasonId: leagueSeason.id,
          homeTeamId: homeTeam.id,
          awayTeamId: awayTeam.id,
          awayTeamGoals: Number(match.awayTeamGoals),
          homeTeamGoals: Number(match.homeTeamGoals),
          provider: crawlConfiguration.crawlProvider,
        })
        matchesEntity.push(matchRow)
        // Save the match
        await this.matchRepository.save(matchRow)
        // throw new Error('Not found match')
        logger.info(`Not found match ${match.refId} - Create new...`)
      }
    }
    return matchesEntity
  }
  async saveStandingsToDatabase(
    convertedData: ConvertedData,
    crawlConfiguration: CrawlConfiguration
  ): Promise<LeagueStanding[]> {
    console.log('Visit save Standings to DB')
    const leagueStandingEntities: LeagueStanding[] = []
    const leagueSeason = await this.leagueSeasonRepository.findOne({
      where: { id: Number(crawlConfiguration.principleId) },
      include: ['league', 'season'],
    })
    if (!leagueSeason) {
      throw new Error('Not found league season')
    }
    const standingData: LeagueStandingConverted[] = convertedData.standings as LeagueStandingConverted[]
    for (const row of standingData) {
      const team = await this.teamRepository.findOne({ where: { slug: row.teamSlug } })
      if (!team) {
        continue
      }
      let standing = await this.leagueStandingRepository.findOne({
        where: { leagueSeasonId: leagueSeason.id, teamId: team.id, provider: crawlConfiguration.crawlProvider },
      })
      if (standing) {
        // continue
        const updatedStanding: LeagueStanding = standing
        updatedStanding.leagueSeasonId = leagueSeason.id
        updatedStanding.teamId = team.id
        updatedStanding.provider = crawlConfiguration.crawlProvider
        updatedStanding.won = row.won
        updatedStanding.draw = row.draw
        updatedStanding.lost = row.lost
        updatedStanding.playedGames = row.playedGames
        updatedStanding.points = row.points
        updatedStanding.goalsAgainst = row.goalsAgainst
        updatedStanding.goalsDifference = row.goalsDifference
        updatedStanding.goalsFor = row.goalsFor
        updatedStanding.position = Number(row.position)
        await this.leagueStandingRepository.updateById(standing.id, {
          leagueSeasonId: leagueSeason.id,
          teamId: team.id,
          provider: crawlConfiguration.crawlProvider,
          won: row.won,
          draw: row.draw,
          lost: row.lost,
          playedGames: row.playedGames,
          points: row.points,
          goalsAgainst: row.goalsAgainst,
          goalsDifference: row.goalsDifference,
          goalsFor: row.goalsFor,
          position: Number(row.position),
        })
        leagueStandingEntities.push(updatedStanding)
      } else {
        standing = new LeagueStanding({
          leagueSeasonId: leagueSeason.id,
          teamId: team.id,
        })
        standing.provider = crawlConfiguration.crawlProvider
        standing.won = row.won
        standing.draw = row.draw
        standing.lost = row.lost
        standing.playedGames = row.playedGames
        standing.points = row.points
        standing.goalsAgainst = row.goalsAgainst
        standing.goalsDifference = row.goalsDifference
        standing.goalsFor = row.goalsFor
        standing.position = Number(row.position)
        leagueStandingEntities.push(standing)
        await this.leagueStandingRepository.save(standing)
      }
    }
    return leagueStandingEntities
  }
}
