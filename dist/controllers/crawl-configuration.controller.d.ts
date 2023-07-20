import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { CrawlConfiguration } from '../models';
import { CrawlConfigurationRepository } from '../repositories';
export declare class CrawlConfigurationController {
    crawlConfigurationRepository: CrawlConfigurationRepository;
    constructor(crawlConfigurationRepository: CrawlConfigurationRepository);
    create(crawlConfiguration: Omit<CrawlConfiguration, 'id'>): Promise<CrawlConfiguration>;
    count(where?: Where<CrawlConfiguration>): Promise<Count>;
    find(filter?: Filter<CrawlConfiguration>): Promise<CrawlConfiguration[]>;
    updateAll(crawlConfiguration: CrawlConfiguration, where?: Where<CrawlConfiguration>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<CrawlConfiguration>): Promise<CrawlConfiguration>;
    updateById(id: number, crawlConfiguration: CrawlConfiguration): Promise<void>;
    replaceById(id: number, crawlConfiguration: CrawlConfiguration): Promise<void>;
    deleteById(id: number): Promise<void>;
}
