"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.League = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let League = class League extends repository_1.Entity {
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
], League.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], League.prototype, "sportTypeId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], League.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], League.prototype, "logo", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        index: {
            unique: true,
        },
    }),
    tslib_1.__metadata("design:type", String)
], League.prototype, "slug", void 0);
League = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], League);
exports.League = League;
//# sourceMappingURL=league.model.js.map