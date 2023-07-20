import { /* inject, */ BindingScope, injectable, service } from '@loopback/core'
import { repository } from '@loopback/repository'
import { getLogger } from '../common/helpers/logger-config'
import { CrawlType } from '../constants'
import { ConvertedData } from '../constants/converted-data.type'
import { RawData } from '../constants/raw-data'
import { CrawlConfiguration } from '../models'
import { CrawlConfigurationRepository } from '../repositories'
import { CrawlServiceFactory } from './crawl-services'
const logger = getLogger('data-crawler-service')

@injectable({ scope: BindingScope.SINGLETON })
export class DataCrawlerService {
  INTERVAL_MINUTES: number
  constructor(
    @service(CrawlServiceFactory) private crawlServiceFactory: CrawlServiceFactory,
    @repository(CrawlConfigurationRepository) private crawlConfigurationRepository: CrawlConfigurationRepository
  ) {}

  async startCrawl() {
    const crawlConfigurations = await this.crawlConfigurationRepository.find()

    for (const crawlConfiguration of crawlConfigurations) {
      try {
        await this.runCrawlConfiguration(crawlConfiguration)
      } catch (error) {
        logger.error(`Add crawl source error ${crawlConfiguration}`, error)
      }
    }
    console.log('Crawl data successfully')
  }

  async runCrawlConfiguration(crawlConfiguration: CrawlConfiguration) {
    switch (crawlConfiguration.crawlType) {
      case CrawlType.Matches:
        await this.crawlMatches(crawlConfiguration)
        break
      case CrawlType.Standings:
        await this.crawlStandings(crawlConfiguration)
        break
      default:
        break
    }

    return crawlConfiguration
  }

  async crawlMatches(crawlConfiguration: CrawlConfiguration) {
    const dto = this.crawlServiceFactory.getCrawlServiceDto(crawlConfiguration.crawlProvider)
    if (dto) {
      const crawlData: RawData = await dto.crawlMatches(crawlConfiguration)
      const convertedData: ConvertedData = dto.convertMatchesData(crawlData)
      // Save converted to file
      await dto.saveMatchesToDatabase(convertedData, crawlConfiguration)
    }
    logger.info('Saved Matches', crawlConfiguration.crawlProvider)
  }

  async crawlStandings(crawlConfiguration: CrawlConfiguration) {
    const dto = this.crawlServiceFactory.getCrawlServiceDto(crawlConfiguration.crawlProvider)
    if (dto) {
      const crawlData: RawData = await dto.crawlStandings(crawlConfiguration)
      const convertedData: ConvertedData = dto.convertStandingsData(crawlData)
      // Save converted to file
      await dto.saveStandingsToDatabase(convertedData, crawlConfiguration)
    }
    logger.info('Saved Standings', crawlConfiguration.crawlProvider)
  }

  async addCrawlConfiguration(crawlConfiguration: CrawlConfiguration) {
    await this.crawlConfigurationRepository.save(crawlConfiguration)
    return crawlConfiguration
  }
}
