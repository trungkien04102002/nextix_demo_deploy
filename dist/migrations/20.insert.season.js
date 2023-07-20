"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const season_repository_1 = require("./../repositories/season.repository");
const csv_1 = require("../common/helpers/csv");
async function default_1(app) {
    const seasonRepository = await app.getRepository(season_repository_1.SeasonRepository);
    await (0, csv_1.insertCsvToModel)('season.csv', async (row) => {
        // console.log('Co vo day',row)
        const season = await seasonRepository.findOne({
            where: { id: Number(row.id) }
        });
        if (!season) {
            await seasonRepository.create(row);
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=20.insert.season.js.map