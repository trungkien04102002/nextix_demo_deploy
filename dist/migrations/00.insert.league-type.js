"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sport_type_repository_1 = require("./../repositories/sport-type.repository");
const csv_1 = require("../common/helpers/csv");
async function default_1(app) {
    const sportTypeRepository = await app.getRepository(sport_type_repository_1.SportTypeRepository);
    await (0, csv_1.insertCsvToModel)('league-type.csv', async (row) => {
        // console.log('Co vo day',row)
        const currency = await sportTypeRepository.findOne({
            where: { id: Number(row.id) }
        });
        if (!currency) {
            await sportTypeRepository.create(row);
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=00.insert.league-type.js.map