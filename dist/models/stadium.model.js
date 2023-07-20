"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stadium = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Stadium = class Stadium extends repository_1.Entity {
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
], Stadium.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Stadium.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Stadium.prototype, "address", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Stadium.prototype, "capacity", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Stadium.prototype, "refId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        index: {
            unique: true,
        },
    }),
    tslib_1.__metadata("design:type", String)
], Stadium.prototype, "slug", void 0);
Stadium = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Stadium);
exports.Stadium = Stadium;
//# sourceMappingURL=stadium.model.js.map