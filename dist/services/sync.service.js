"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataCrawlerService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const logger_config_1 = require("../common/helpers/logger-config");
const constants_1 = require("../constants");
const repositories_1 = require("../repositories");
const crawl_services_1 = require("./crawl-services");
const logger = (0, logger_config_1.getLogger)('data-crawler-service');
let DataCrawlerService = class DataCrawlerService {
    constructor(crawlServiceFactory, crawlConfigurationRepository) {
        this.crawlServiceFactory = crawlServiceFactory;
        this.crawlConfigurationRepository = crawlConfigurationRepository;
    }
    async startCrawl() {
        const crawlConfigurations = await this.crawlConfigurationRepository.find();
        for (const crawlConfiguration of crawlConfigurations) {
            try {
                await this.runCrawlConfiguration(crawlConfiguration);
            }
            catch (error) {
                logger.error(`Add crawl source error ${crawlConfiguration}`, error);
            }
        }
        console.log('Crawl data successfully');
    }
    async runCrawlConfiguration(crawlConfiguration) {
        switch (crawlConfiguration.crawlType) {
            case constants_1.CrawlType.Matches:
                await this.crawlMatches(crawlConfiguration);
                break;
            case constants_1.CrawlType.Standings:
                await this.crawlStandings(crawlConfiguration);
                break;
            default:
                break;
        }
        return crawlConfiguration;
    }
    async crawlMatches(crawlConfiguration) {
        const dto = this.crawlServiceFactory.getCrawlServiceDto(crawlConfiguration.crawlProvider);
        if (dto) {
            const crawlData = await dto.crawlMatches(crawlConfiguration);
            const convertedData = dto.convertMatchesData(crawlData);
            // Save converted to file
            await dto.saveMatchesToDatabase(convertedData, crawlConfiguration);
        }
        logger.info('Saved Matches', crawlConfiguration.crawlProvider);
    }
    async crawlStandings(crawlConfiguration) {
        const dto = this.crawlServiceFactory.getCrawlServiceDto(crawlConfiguration.crawlProvider);
        if (dto) {
            const crawlData = await dto.crawlStandings(crawlConfiguration);
            const convertedData = dto.convertStandingsData(crawlData);
            // Save converted to file
            await dto.saveStandingsToDatabase(convertedData, crawlConfiguration);
        }
        logger.info('Saved Standings', crawlConfiguration.crawlProvider);
    }
    async addCrawlConfiguration(crawlConfiguration) {
        await this.crawlConfigurationRepository.save(crawlConfiguration);
        return crawlConfiguration;
    }
};
DataCrawlerService = tslib_1.__decorate([
    (0, core_1.injectable)({ scope: core_1.BindingScope.SINGLETON }),
    tslib_1.__param(0, (0, core_1.service)(crawl_services_1.CrawlServiceFactory)),
    tslib_1.__param(1, (0, repository_1.repository)(repositories_1.CrawlConfigurationRepository)),
    tslib_1.__metadata("design:paramtypes", [crawl_services_1.CrawlServiceFactory,
        repositories_1.CrawlConfigurationRepository])
], DataCrawlerService);
exports.DataCrawlerService = DataCrawlerService;
//# sourceMappingURL=sync.service.js.map