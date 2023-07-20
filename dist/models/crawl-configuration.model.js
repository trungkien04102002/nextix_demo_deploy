"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrawlConfiguration = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const constants_1 = require("../constants");
let CrawlConfiguration = class CrawlConfiguration extends repository_1.Entity {
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
], CrawlConfiguration.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        jsonSchema: {
            enum: Object.values(constants_1.PrincipleName),
        },
    }),
    tslib_1.__metadata("design:type", String)
], CrawlConfiguration.prototype, "principleName", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], CrawlConfiguration.prototype, "principleId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], CrawlConfiguration.prototype, "url", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        jsonSchema: {
            enum: Object.values(constants_1.CrawlType),
        },
    }),
    tslib_1.__metadata("design:type", String)
], CrawlConfiguration.prototype, "crawlType", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        jsonSchema: {
            enum: Object.values(constants_1.CrawlProvider),
        },
    }),
    tslib_1.__metadata("design:type", String)
], CrawlConfiguration.prototype, "crawlProvider", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        jsonSchema: {
            enum: Object.values(constants_1.Status),
        },
    }),
    tslib_1.__metadata("design:type", String)
], CrawlConfiguration.prototype, "status", void 0);
CrawlConfiguration = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], CrawlConfiguration);
exports.CrawlConfiguration = CrawlConfiguration;
//# sourceMappingURL=crawl-configuration.model.js.map