import { BindingKey } from '@loopback/core';
import { DataCrawlerService } from './services';
import { VBACrawlerService } from './services/crawl-services';
export declare const DATA_CRAWLER_SERVICE: BindingKey<DataCrawlerService>;
export declare const VBA_CRAWLER_SERVICE: BindingKey<VBACrawlerService>;
