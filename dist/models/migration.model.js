"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const time_stamp_model_mixin_1 = require("../mixins/time-stamp-model.mixin");
const base_entity_model_1 = require("../common/models/base-entity.model");
let Migration = class Migration extends (0, time_stamp_model_mixin_1.TimeStampMixin)(base_entity_model_1.BaseEntity) {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Migration.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Migration.prototype, "id", void 0);
Migration = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: {
            strict: true,
            indexes: {
                uniqueName: {
                    keys: {
                        name: 1,
                    },
                    options: {
                        unique: true,
                    },
                },
            },
        },
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Migration);
exports.Migration = Migration;
//# sourceMappingURL=migration.model.js.map