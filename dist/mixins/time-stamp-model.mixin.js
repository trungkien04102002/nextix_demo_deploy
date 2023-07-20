"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeStampMixin = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
function TimeStampMixin(baseClass) {
    class MixedModel extends baseClass {
    }
    tslib_1.__decorate([
        (0, repository_1.property)({
            type: 'date',
            defaultFn: 'now',
            name: 'createat',
        }),
        tslib_1.__metadata("design:type", Date)
    ], MixedModel.prototype, "createdAt", void 0);
    tslib_1.__decorate([
        (0, repository_1.property)({
            type: 'date',
            defaultFn: 'now',
            name: 'updatedat',
        }),
        tslib_1.__metadata("design:type", Date)
    ], MixedModel.prototype, "updatedAt", void 0);
    return MixedModel;
}
exports.TimeStampMixin = TimeStampMixin;
//# sourceMappingURL=time-stamp-model.mixin.js.map