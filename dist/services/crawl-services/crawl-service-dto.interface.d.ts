import { ConvertedData } from '../../constants/converted-data.type';
import { RawData } from '../../constants/raw-data';
import { CrawlConfiguration, LeagueStanding, Match } from '../../models';
export interface IDataCrawlerServiceDto {
    crawlMatches(crawlConfiguration: CrawlConfiguration): Promise<RawData>;
    crawlStandings(crawlConfiguration: CrawlConfiguration): Promise<RawData>;
    convertMatchesData(crawlData: RawData): ConvertedData;
    convertStandingsData(crawlData: RawData): ConvertedData;
    saveMatchesToDatabase(convertedData: ConvertedData, crawlConfiguration: CrawlConfiguration): Promise<Match[]>;
    saveStandingsToDatabase(convertedData: ConvertedData, crawlConfiguration: CrawlConfiguration): Promise<LeagueStanding[]>;
}
