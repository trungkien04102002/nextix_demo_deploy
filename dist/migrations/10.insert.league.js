"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_1 = require("../repositories");
const csv_1 = require("../common/helpers/csv");
async function default_1(app) {
    const leagueRepository = await app.getRepository(repositories_1.LeagueRepository);
    await (0, csv_1.insertCsvToModel)('league.csv', async (row) => {
        // console.log('Co vo day',row)
        const league = await leagueRepository.findOne({
            where: { id: Number(row.id) }
        });
        if (!league) {
            await leagueRepository.create(row);
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=10.insert.league.js.map