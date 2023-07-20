interface SpecificQueryParams {
    comps: string;
    compSeasons: string;
    teams: string;
    pageSize: string;
    sort: string;
    statuses: string;
    altIds: string;
}
  
interface ParsedUrlEplResponse  {
    baseUrl: string;
    queryParams: SpecificQueryParams;
}
  
export function parseUrlEplCrawler(url: string): ParsedUrlEplResponse  {
    const urlObj = new URL(url);
    const baseUrl = urlObj.origin + urlObj.pathname;
    const queryParams = urlObj.searchParams;
    const comps = queryParams.get('comps') ?? '';
    const compSeasons = queryParams.get('compSeasons') ?? '';
    const teams = queryParams.get('teams') ?? '';
    const pageSize = queryParams.get('pageSize') ?? '';
    const sort = queryParams.get('sort') ?? '';
    const statuses = queryParams.get('statuses') ?? '';
    const altIds = queryParams.get('altIds') ?? '';
    return { baseUrl, queryParams: { comps, compSeasons, teams, pageSize, sort, statuses, altIds } };
}