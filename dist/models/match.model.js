"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const league_season_model_1 = require("./league-season.model");
const stadium_model_1 = require("./stadium.model");
const team_model_1 = require("./team.model");
let Match = class Match extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Match.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Match.prototype, "sportTypeId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Match.prototype, "provider", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Object)
], Match.prototype, "awayTeamGoals", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Object)
], Match.prototype, "homeTeamGoals", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Match.prototype, "datetime", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Match.prototype, "status", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Match.prototype, "refId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Match.prototype, "slug", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => league_season_model_1.LeagueSeason),
    tslib_1.__metadata("design:type", Number)
], Match.prototype, "leagueSeasonId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => team_model_1.Team, { name: 'homeTeam' }),
    tslib_1.__metadata("design:type", Number)
], Match.prototype, "homeTeamId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => team_model_1.Team, { name: 'awayTeam' }),
    tslib_1.__metadata("design:type", Number)
], Match.prototype, "awayTeamId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => stadium_model_1.Stadium),
    tslib_1.__metadata("design:type", Number)
], Match.prototype, "stadiumId", void 0);
Match = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: {
            indexes: {
                leagueSeasonRefIdProviderIdx: {
                    keys: {
                        refId: 1,
                        provider: 1,
                    },
                    options: {
                        unique: true,
                    },
                },
            },
        },
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Match);
exports.Match = Match;
//# sourceMappingURL=match.model.js.map