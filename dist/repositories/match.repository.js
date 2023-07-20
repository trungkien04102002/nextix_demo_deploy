"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let MatchRepository = class MatchRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, leagueSeasonRepositoryGetter, teamRepositoryGetter, stadiumRepositoryGetter) {
        super(models_1.Match, dataSource);
        this.leagueSeasonRepositoryGetter = leagueSeasonRepositoryGetter;
        this.teamRepositoryGetter = teamRepositoryGetter;
        this.stadiumRepositoryGetter = stadiumRepositoryGetter;
        this.stadium = this.createBelongsToAccessorFor('stadium', stadiumRepositoryGetter);
        this.registerInclusionResolver('stadium', this.stadium.inclusionResolver);
        this.awayTeam = this.createBelongsToAccessorFor('awayTeam', teamRepositoryGetter);
        this.registerInclusionResolver('awayTeam', this.awayTeam.inclusionResolver);
        this.homeTeam = this.createBelongsToAccessorFor('homeTeam', teamRepositoryGetter);
        this.registerInclusionResolver('homeTeam', this.homeTeam.inclusionResolver);
        this.leagueSeason = this.createBelongsToAccessorFor('leagueSeason', leagueSeasonRepositoryGetter);
        this.registerInclusionResolver('leagueSeason', this.leagueSeason.inclusionResolver);
    }
};
MatchRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.db')),
    tslib_1.__param(1, repository_1.repository.getter('LeagueSeasonRepository')),
    tslib_1.__param(2, repository_1.repository.getter('TeamRepository')),
    tslib_1.__param(3, repository_1.repository.getter('StadiumRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function, Function, Function])
], MatchRepository);
exports.MatchRepository = MatchRepository;
//# sourceMappingURL=match.repository.js.map