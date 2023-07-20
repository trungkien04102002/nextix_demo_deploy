import { BindingKey } from '@loopback/core'
import { DataCrawlerService } from './services'
import { VBACrawlerService } from './services/crawl-services'

export const DATA_CRAWLER_SERVICE = BindingKey.create<DataCrawlerService>('services.DataCrawlerService')

export const VBA_CRAWLER_SERVICE = BindingKey.create<VBACrawlerService>('services.VBACrawlerService')
