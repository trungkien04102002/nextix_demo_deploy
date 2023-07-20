import { ConvertedData } from '../../constants/converted-data.type';
import { RawData } from '../../constants/raw-data';
import { CrawlConfiguration, LeagueStanding, Match } from '../../models';
import { CrawlConfigurationRepository, LeagueSeasonRepository, LeagueStandingRepository, MatchRepository, StadiumRepository, TeamRepository } from '../../repositories';
import { IDataCrawlerServiceDto } from './crawl-service-dto.interface';
export declare class EplCrawlerService implements IDataCrawlerServiceDto {
    private crawlConfigurationRepository;
    teamRepository: TeamRepository;
    stadiumRepository: StadiumRepository;
    matchRepository: MatchRepository;
    leagueStandingRepository: LeagueStandingRepository;
    leagueSeasonRepository: LeagueSeasonRepository;
    timeStamp: number;
    constructor(crawlConfigurationRepository: CrawlConfigurationRepository, teamRepository: TeamRepository, stadiumRepository: StadiumRepository, matchRepository: MatchRepository, leagueStandingRepository: LeagueStandingRepository, leagueSeasonRepository: LeagueSeasonRepository);
    crawlMatches(crawlConfiguration: CrawlConfiguration): Promise<RawData>;
    crawlStandings(crawlConfiguration: CrawlConfiguration): Promise<RawData>;
    convertMatchesData(crawlData: RawData): ConvertedData;
    convertStandingsData(crawlData: RawData): ConvertedData;
    saveMatchesToDatabase(convertedData: ConvertedData, crawlConfiguration: CrawlConfiguration): Promise<Match[]>;
    saveStandingsToDatabase(convertedData: ConvertedData, crawlConfiguration: CrawlConfiguration): Promise<LeagueStanding[]>;
}
