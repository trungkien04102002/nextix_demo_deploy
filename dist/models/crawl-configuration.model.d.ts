import { Entity } from '@loopback/repository';
import { CrawlProvider, CrawlType, PrincipleName, Status } from '../constants';
export declare class CrawlConfiguration extends Entity {
    id?: number;
    principleName: PrincipleName;
    principleId: string;
    url: string;
    crawlType: CrawlType;
    crawlProvider: CrawlProvider;
    status: Status;
    constructor(data?: Partial<CrawlConfiguration>);
}
export interface CrawlConfigurationRelations {
}
export declare type CrawlConfigurationWithRelations = CrawlConfiguration & CrawlConfigurationRelations;
