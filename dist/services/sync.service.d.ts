import { CrawlConfiguration } from '../models';
import { CrawlConfigurationRepository } from '../repositories';
import { CrawlServiceFactory } from './crawl-services';
export declare class DataCrawlerService {
    private crawlServiceFactory;
    private crawlConfigurationRepository;
    INTERVAL_MINUTES: number;
    constructor(crawlServiceFactory: CrawlServiceFactory, crawlConfigurationRepository: CrawlConfigurationRepository);
    startCrawl(): Promise<void>;
    runCrawlConfiguration(crawlConfiguration: CrawlConfiguration): Promise<CrawlConfiguration>;
    crawlMatches(crawlConfiguration: CrawlConfiguration): Promise<void>;
    crawlStandings(crawlConfiguration: CrawlConfiguration): Promise<void>;
    addCrawlConfiguration(crawlConfiguration: CrawlConfiguration): Promise<CrawlConfiguration>;
}
