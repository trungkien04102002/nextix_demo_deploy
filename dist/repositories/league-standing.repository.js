"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueStandingRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let LeagueStandingRepository = class LeagueStandingRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, teamRepositoryGetter, leagueSeasonRepositoryGetter) {
        super(models_1.LeagueStanding, dataSource);
        this.teamRepositoryGetter = teamRepositoryGetter;
        this.leagueSeasonRepositoryGetter = leagueSeasonRepositoryGetter;
        this.leagueSeason = this.createBelongsToAccessorFor('leagueSeason', leagueSeasonRepositoryGetter);
        this.registerInclusionResolver('leagueSeason', this.leagueSeason.inclusionResolver);
        this.team = this.createBelongsToAccessorFor('team', teamRepositoryGetter);
        this.registerInclusionResolver('team', this.team.inclusionResolver);
    }
};
LeagueStandingRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.db')),
    tslib_1.__param(1, repository_1.repository.getter('TeamRepository')),
    tslib_1.__param(2, repository_1.repository.getter('LeagueSeasonRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function, Function])
], LeagueStandingRepository);
exports.LeagueStandingRepository = LeagueStandingRepository;
//# sourceMappingURL=league-standing.repository.js.map