"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrations = void 0;
const tslib_1 = require("tslib");
/* eslint-disable linebreak-style */
const repositories_1 = require("../repositories");
const _00_insert_league_type_1 = tslib_1.__importDefault(require("./00.insert.league-type"));
const _10_insert_league_1 = tslib_1.__importDefault(require("./10.insert.league"));
const _20_insert_season_1 = tslib_1.__importDefault(require("./20.insert.season"));
const _30_insert_league_season_1 = tslib_1.__importDefault(require("./30.insert.league-season"));
const _40_insert_crawl_config_1 = tslib_1.__importDefault(require("./40.insert.crawl-config"));
async function migrations(app) {
    const repos = await app.getRepository(repositories_1.MigrationRepository);
    const list = [
        { name: '00.insert.league-type', migration: _00_insert_league_type_1.default },
        { name: '10.insert.league', migration: _10_insert_league_1.default },
        { name: '20.insert.season', migration: _20_insert_season_1.default },
        { name: '30.insert.league-season', migration: _30_insert_league_season_1.default },
        { name: '40.insert.crawl-config', migration: _40_insert_crawl_config_1.default },
        /* more migrations */
    ];
    for (const migration of list) {
        const findMigration = await repos.findOne({
            where: { name: migration.name },
        });
        if (!findMigration) {
            console.log(`start migration ${migration.name}`);
            await migration.migration(app);
            await repos.create({ name: migration.name });
            console.log(`done migration ${migration.name}`);
        }
    }
    console.log('inserting');
}
exports.migrations = migrations;
//# sourceMappingURL=index.js.map