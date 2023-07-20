import { CrawlProvider } from '../../constants';
import { IDataCrawlerServiceDto } from './crawl-service-dto.interface';
import { EplCrawlerService } from './epl.service';
import { VBACrawlerService } from './vba.service';
export declare class CrawlServiceFactory {
    private eplCrawlerService;
    private vbaCrawlerService;
    constructor(eplCrawlerService: EplCrawlerService, vbaCrawlerService: VBACrawlerService);
    getCrawlServiceDto(crawlProvider: CrawlProvider): IDataCrawlerServiceDto | null;
}
