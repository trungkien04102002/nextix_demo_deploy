"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Season = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Season = class Season extends repository_1.Entity {
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
], Season.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Season.prototype, "sportTypeId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Season.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Season.prototype, "fullName", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Season.prototype, "startAt", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Season.prototype, "endAt", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        index: {
            unique: true,
        },
    }),
    tslib_1.__metadata("design:type", String)
], Season.prototype, "slug", void 0);
Season = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Season);
exports.Season = Season;
//# sourceMappingURL=season.model.js.map