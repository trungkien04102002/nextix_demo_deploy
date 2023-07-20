"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_1 = require("./../repositories");
const csv_1 = require("../common/helpers/csv");
async function default_1(app) {
    const crawlConfigurationRepository = await app.getRepository(repositories_1.CrawlConfigurationRepository);
    await (0, csv_1.insertCsvToModel)('crawl-configuration.csv', async (row) => {
        // console.log('Co vo day',row)
        const config = await crawlConfigurationRepository.findOne({
            where: { id: Number(row.id) }
        });
        if (!config) {
            await crawlConfigurationRepository.create(row);
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=40.insert.crawl-config.js.map