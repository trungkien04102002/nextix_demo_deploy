"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseUrlEplCrawler = void 0;
function parseUrlEplCrawler(url) {
    var _a, _b, _c, _d, _e, _f, _g;
    const urlObj = new URL(url);
    const baseUrl = urlObj.origin + urlObj.pathname;
    const queryParams = urlObj.searchParams;
    const comps = (_a = queryParams.get('comps')) !== null && _a !== void 0 ? _a : '';
    const compSeasons = (_b = queryParams.get('compSeasons')) !== null && _b !== void 0 ? _b : '';
    const teams = (_c = queryParams.get('teams')) !== null && _c !== void 0 ? _c : '';
    const pageSize = (_d = queryParams.get('pageSize')) !== null && _d !== void 0 ? _d : '';
    const sort = (_e = queryParams.get('sort')) !== null && _e !== void 0 ? _e : '';
    const statuses = (_f = queryParams.get('statuses')) !== null && _f !== void 0 ? _f : '';
    const altIds = (_g = queryParams.get('altIds')) !== null && _g !== void 0 ? _g : '';
    return { baseUrl, queryParams: { comps, compSeasons, teams, pageSize, sort, statuses, altIds } };
}
exports.parseUrlEplCrawler = parseUrlEplCrawler;
//# sourceMappingURL=handle-paging-url.js.map