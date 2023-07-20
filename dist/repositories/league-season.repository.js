"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueSeasonRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let LeagueSeasonRepository = class LeagueSeasonRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, leagueRepositoryGetter, seasonRepositoryGetter) {
        super(models_1.LeagueSeason, dataSource);
        this.leagueRepositoryGetter = leagueRepositoryGetter;
        this.seasonRepositoryGetter = seasonRepositoryGetter;
        this.season = this.createBelongsToAccessorFor('season', seasonRepositoryGetter);
        this.registerInclusionResolver('season', this.season.inclusionResolver);
        this.league = this.createBelongsToAccessorFor('league', leagueRepositoryGetter);
        this.registerInclusionResolver('league', this.league.inclusionResolver);
    }
};
LeagueSeasonRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.db')),
    tslib_1.__param(1, repository_1.repository.getter('LeagueRepository')),
    tslib_1.__param(2, repository_1.repository.getter('SeasonRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function, Function])
], LeagueSeasonRepository);
exports.LeagueSeasonRepository = LeagueSeasonRepository;
//# sourceMappingURL=league-season.repository.js.map