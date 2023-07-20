"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueStanding = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const league_season_model_1 = require("./league-season.model");
const team_model_1 = require("./team.model");
let LeagueStanding = class LeagueStanding extends repository_1.Entity {
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
], LeagueStanding.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], LeagueStanding.prototype, "sportTypeId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], LeagueStanding.prototype, "provider", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], LeagueStanding.prototype, "position", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], LeagueStanding.prototype, "playedGames", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], LeagueStanding.prototype, "form", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], LeagueStanding.prototype, "won", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], LeagueStanding.prototype, "draw", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], LeagueStanding.prototype, "lost", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], LeagueStanding.prototype, "wonPercentage", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], LeagueStanding.prototype, "points", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], LeagueStanding.prototype, "goalsFor", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], LeagueStanding.prototype, "goalsAgainst", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], LeagueStanding.prototype, "goalsDifference", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], LeagueStanding.prototype, "streak", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], LeagueStanding.prototype, "refId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], LeagueStanding.prototype, "slug", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => team_model_1.Team),
    tslib_1.__metadata("design:type", Number)
], LeagueStanding.prototype, "teamId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => league_season_model_1.LeagueSeason),
    tslib_1.__metadata("design:type", Number)
], LeagueStanding.prototype, "leagueSeasonId", void 0);
LeagueStanding = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: {
            indexes: {
                compositeTeamLeagueSeasonProviderKey: {
                    keys: {
                        leagueSeasonId: 1,
                        teamId: 1,
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
], LeagueStanding);
exports.LeagueStanding = LeagueStanding;
//# sourceMappingURL=league-standing.model.js.map