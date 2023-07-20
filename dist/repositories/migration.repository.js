"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrationRepository = void 0;
const tslib_1 = require("tslib");
/* eslint-disable linebreak-style */
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const time_stamp_repository_mixin_1 = require("../mixins/time-stamp-repository.mixin");
const models_1 = require("../models");
let MigrationRepository = class MigrationRepository extends (0, time_stamp_repository_mixin_1.TimeStampRepositoryMixin)(repository_1.DefaultCrudRepository) {
    constructor(dataSource) {
        super(models_1.Migration, dataSource);
    }
};
MigrationRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.db')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource])
], MigrationRepository);
exports.MigrationRepository = MigrationRepository;
//# sourceMappingURL=migration.repository.js.map