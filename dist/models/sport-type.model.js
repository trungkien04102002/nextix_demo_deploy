"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportType = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let SportType = class SportType extends repository_1.Entity {
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
], SportType.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], SportType.prototype, "name", void 0);
SportType = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], SportType);
exports.SportType = SportType;
//# sourceMappingURL=sport-type.model.js.map