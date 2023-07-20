import { inject } from '@loopback/core'
import { DefaultCrudRepository } from '@loopback/repository'
import { DbDataSource } from '../datasources'
import { CrawlConfiguration, CrawlConfigurationRelations } from '../models'

export class CrawlConfigurationRepository extends DefaultCrudRepository<
  CrawlConfiguration,
  typeof CrawlConfiguration.prototype.id,
  CrawlConfigurationRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(CrawlConfiguration, dataSource)
  }
}
