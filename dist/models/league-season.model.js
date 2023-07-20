"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueSeason = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const league_model_1 = require("./league.model");
const season_model_1 = require("./season.model");
let LeagueSeason = class LeagueSeason extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        // generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], LeagueSeason.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], LeagueSeason.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], LeagueSeason.prototype, "logo", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], LeagueSeason.prototype, "refId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], LeagueSeason.prototype, "slug", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => league_model_1.League),
    tslib_1.__metadata("design:type", Number)
], LeagueSeason.prototype, "leagueId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => season_model_1.Season),
    tslib_1.__metadata("design:type", Number)
], LeagueSeason.prototype, "seasonId", void 0);
LeagueSeason = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: {
            strict: true,
            indexes: {
                compositeLeagueSeasonKey: {
                    keys: {
                        leagueId: 1,
                        seasonId: 1,
                    },
                    options: {
                        unique: true,
                    },
                },
                leagueSeasonSlug: {
                    keys: {
                        slug: 1,
                    },
                    options: {
                        unique: true,
                    },
                },
            },
        },
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], LeagueSeason);
exports.LeagueSeason = LeagueSeason;
//# sourceMappingURL=league-season.model.js.map