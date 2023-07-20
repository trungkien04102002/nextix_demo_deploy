"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const stadium_model_1 = require("./stadium.model");
let Team = class Team extends repository_1.Entity {
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
], Team.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Team.prototype, "sportTypeId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Team.prototype, "provider", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Team.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Team.prototype, "shortName", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", Object)
], Team.prototype, "logo", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Team.prototype, "image", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Team.prototype, "address", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Team.prototype, "website", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Team.prototype, "email", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Team.prototype, "phone", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Team.prototype, "history", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Team.prototype, "abbr", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Team.prototype, "refId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        index: {
            unique: true,
        },
    }),
    tslib_1.__metadata("design:type", String)
], Team.prototype, "slug", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => stadium_model_1.Stadium),
    tslib_1.__metadata("design:type", Number)
], Team.prototype, "stadiumId", void 0);
Team = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Team);
exports.Team = Team;
//# sourceMappingURL=team.model.js.map