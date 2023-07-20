"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_1 = require("../repositories");
const csv_1 = require("../common/helpers/csv");
async function default_1(app) {
    const leagueSeasonRepository = await app.getRepository(repositories_1.LeagueSeasonRepository);
    await (0, csv_1.insertCsvToModel)('league-season.csv', async (row) => {
        // console.log('Co vo day',row)
        const leagueSeason = await leagueSeasonRepository.findOne({
            where: { id: Number(row.id) }
        });
        if (!leagueSeason) {
            await leagueSeasonRepository.create(row);
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=30.insert.league-season.js.map