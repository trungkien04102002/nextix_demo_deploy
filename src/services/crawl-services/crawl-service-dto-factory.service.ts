import { BindingScope, injectable } from '@loopback/context'
import { service } from '@loopback/core'
import { CrawlProvider } from '../../constants'
import { IDataCrawlerServiceDto } from './crawl-service-dto.interface'
import { EplCrawlerService } from './epl.service'
import { VBACrawlerService } from './vba.service'

@injectable({ scope: BindingScope.SINGLETON })
export class CrawlServiceFactory {
  constructor(
    @service(EplCrawlerService) private eplCrawlerService: EplCrawlerService,
    @service(VBACrawlerService) private vbaCrawlerService: VBACrawlerService
  ) {}

  getCrawlServiceDto(crawlProvider: CrawlProvider): IDataCrawlerServiceDto | null {
    switch (crawlProvider) {
      case CrawlProvider.PremierLeague:
        return this.eplCrawlerService
      case CrawlProvider.VBA:
        return this.vbaCrawlerService
      default:
        return null
    }
  }
}
