"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueStandingConverted = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let LeagueStandingConverted = class LeagueStandingConverted extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], LeagueStandingConverted.prototype, "teamName", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], LeagueStandingConverted.prototype, "teamSlug", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", Object)
], LeagueStandingConverted.prototype, "teamLogo", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], LeagueStandingConverted.prototype, "position", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], LeagueStandingConverted.prototype, "playedGames", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], LeagueStandingConverted.prototype, "won", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], LeagueStandingConverted.prototype, "draw", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], LeagueStandingConverted.prototype, "lost", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], LeagueStandingConverted.prototype, "wonPercentage", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], LeagueStandingConverted.prototype, "points", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], LeagueStandingConverted.prototype, "goalsFor", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], LeagueStandingConverted.prototype, "goalsAgainst", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], LeagueStandingConverted.prototype, "goalsDifference", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], LeagueStandingConverted.prototype, "streak", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], LeagueStandingConverted.prototype, "refLeagueSeasonId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], LeagueStandingConverted.prototype, "refId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], LeagueStandingConverted.prototype, "slug", void 0);
LeagueStandingConverted = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], LeagueStandingConverted);
exports.LeagueStandingConverted = LeagueStandingConverted;
//# sourceMappingURL=league-standing-converted.model.js.map