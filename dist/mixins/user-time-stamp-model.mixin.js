"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAndTimeStampMixin = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
function UserAndTimeStampMixin(superClass) {
    class MixedModel extends superClass {
    }
    tslib_1.__decorate([
        (0, repository_1.property)({
            type: 'number',
            required: false,
            index: true,
        }),
        tslib_1.__metadata("design:type", Number)
    ], MixedModel.prototype, "userId", void 0);
    tslib_1.__decorate([
        (0, repository_1.property)({
            type: 'date',
            defaultFn: 'now',
        }),
        tslib_1.__metadata("design:type", Date)
    ], MixedModel.prototype, "createdAt", void 0);
    tslib_1.__decorate([
        (0, repository_1.property)({
            type: 'date',
            defaultFn: 'now',
        }),
        tslib_1.__metadata("design:type", Date)
    ], MixedModel.prototype, "updatedAt", void 0);
    return MixedModel;
}
exports.UserAndTimeStampMixin = UserAndTimeStampMixin;
//# sourceMappingURL=user-time-stamp-model.mixin.js.map