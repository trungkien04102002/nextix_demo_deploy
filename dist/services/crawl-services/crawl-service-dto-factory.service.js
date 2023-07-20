"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrawlServiceFactory = void 0;
const tslib_1 = require("tslib");
const context_1 = require("@loopback/context");
const core_1 = require("@loopback/core");
const constants_1 = require("../../constants");
const epl_service_1 = require("./epl.service");
const vba_service_1 = require("./vba.service");
let CrawlServiceFactory = class CrawlServiceFactory {
    constructor(eplCrawlerService, vbaCrawlerService) {
        this.eplCrawlerService = eplCrawlerService;
        this.vbaCrawlerService = vbaCrawlerService;
    }
    getCrawlServiceDto(crawlProvider) {
        switch (crawlProvider) {
            case constants_1.CrawlProvider.PremierLeague:
                return this.eplCrawlerService;
            case constants_1.CrawlProvider.VBA:
                return this.vbaCrawlerService;
            default:
                return null;
        }
    }
};
CrawlServiceFactory = tslib_1.__decorate([
    (0, context_1.injectable)({ scope: context_1.BindingScope.SINGLETON }),
    tslib_1.__param(0, (0, core_1.service)(epl_service_1.EplCrawlerService)),
    tslib_1.__param(1, (0, core_1.service)(vba_service_1.VBACrawlerService)),
    tslib_1.__metadata("design:paramtypes", [epl_service_1.EplCrawlerService,
        vba_service_1.VBACrawlerService])
], CrawlServiceFactory);
exports.CrawlServiceFactory = CrawlServiceFactory;
//# sourceMappingURL=crawl-service-dto-factory.service.js.map