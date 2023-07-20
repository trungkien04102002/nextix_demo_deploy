interface SpecificQueryParams {
    comps: string;
    compSeasons: string;
    teams: string;
    pageSize: string;
    sort: string;
    statuses: string;
    altIds: string;
}
interface ParsedUrlEplResponse {
    baseUrl: string;
    queryParams: SpecificQueryParams;
}
export declare function parseUrlEplCrawler(url: string): ParsedUrlEplResponse;
export {};
