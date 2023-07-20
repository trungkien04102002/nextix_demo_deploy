import { ConvertedData } from '../../constants/converted-data.type';
import { RawData } from '../../constants/raw-data';
import { CrawlConfiguration, LeagueStanding, Match } from '../../models';
import { LeagueSeasonRepository, LeagueStandingRepository, MatchRepository, SportTypeRepository, StadiumRepository, TeamRepository } from '../../repositories';
import { IDataCrawlerServiceDto } from './crawl-service-dto.interface';
export declare class VBACrawlerService implements IDataCrawlerServiceDto {
    private sportTypeRepository;
    private leagueSeasonRepository;
    private teamRepository;
    private stadiumRepository;
    private matchRepository;
    private leagueStandingRepository;
    constructor(sportTypeRepository: SportTypeRepository, leagueSeasonRepository: LeagueSeasonRepository, teamRepository: TeamRepository, stadiumRepository: StadiumRepository, matchRepository: MatchRepository, leagueStandingRepository: LeagueStandingRepository);
    crawlMatches(crawlConfiguration: CrawlConfiguration): Promise<RawData>;
    crawlStandings(crawlConfiguration: CrawlConfiguration): Promise<RawData>;
    convertMatchesData(crawlData: RawData): ConvertedData;
    convertStandingsData(crawlData: RawData): ConvertedData;
    saveMatchesToDatabase(convertedData: ConvertedData, crawlConfiguration: CrawlConfiguration): Promise<Match[]>;
    saveStandingsToDatabase(convertedData: ConvertedData, crawlConfiguration: CrawlConfiguration): Promise<LeagueStanding[]>;
}
