import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { CrawlConfiguration, CrawlConfigurationRelations } from '../models';
export declare class CrawlConfigurationRepository extends DefaultCrudRepository<CrawlConfiguration, typeof CrawlConfiguration.prototype.id, CrawlConfigurationRelations> {
    constructor(dataSource: DbDataSource);
}
