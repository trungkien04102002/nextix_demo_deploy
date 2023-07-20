"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrawlConfigurationController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CrawlConfigurationController = class CrawlConfigurationController {
    constructor(crawlConfigurationRepository) {
        this.crawlConfigurationRepository = crawlConfigurationRepository;
    }
    async create(crawlConfiguration) {
        return this.crawlConfigurationRepository.create(crawlConfiguration);
    }
    async count(where) {
        return this.crawlConfigurationRepository.count(where);
    }
    async find(filter) {
        return this.crawlConfigurationRepository.find(filter);
    }
    async updateAll(crawlConfiguration, where) {
        return this.crawlConfigurationRepository.updateAll(crawlConfiguration, where);
    }
    async findById(id, filter) {
        return this.crawlConfigurationRepository.findById(id, filter);
    }
    async updateById(id, crawlConfiguration) {
        await this.crawlConfigurationRepository.updateById(id, crawlConfiguration);
    }
    async replaceById(id, crawlConfiguration) {
        await this.crawlConfigurationRepository.replaceById(id, crawlConfiguration);
    }
    async deleteById(id) {
        await this.crawlConfigurationRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/crawl-configurations'),
    (0, rest_1.response)(200, {
        description: 'CrawlConfiguration model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.CrawlConfiguration) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.CrawlConfiguration, {
                    title: 'NewCrawlConfiguration',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CrawlConfigurationController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/crawl-configurations/count'),
    (0, rest_1.response)(200, {
        description: 'CrawlConfiguration model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.CrawlConfiguration)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CrawlConfigurationController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/crawl-configurations'),
    (0, rest_1.response)(200, {
        description: 'Array of CrawlConfiguration model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.CrawlConfiguration, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.CrawlConfiguration)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CrawlConfigurationController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/crawl-configurations'),
    (0, rest_1.response)(200, {
        description: 'CrawlConfiguration PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.CrawlConfiguration, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.CrawlConfiguration)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.CrawlConfiguration, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CrawlConfigurationController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/crawl-configurations/{id}'),
    (0, rest_1.response)(200, {
        description: 'CrawlConfiguration model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.CrawlConfiguration, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.CrawlConfiguration, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CrawlConfigurationController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/crawl-configurations/{id}'),
    (0, rest_1.response)(204, {
        description: 'CrawlConfiguration PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.CrawlConfiguration, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.CrawlConfiguration]),
    tslib_1.__metadata("design:returntype", Promise)
], CrawlConfigurationController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/crawl-configurations/{id}'),
    (0, rest_1.response)(204, {
        description: 'CrawlConfiguration PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.CrawlConfiguration]),
    tslib_1.__metadata("design:returntype", Promise)
], CrawlConfigurationController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/crawl-configurations/{id}'),
    (0, rest_1.response)(204, {
        description: 'CrawlConfiguration DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CrawlConfigurationController.prototype, "deleteById", null);
CrawlConfigurationController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CrawlConfigurationRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CrawlConfigurationRepository])
], CrawlConfigurationController);
exports.CrawlConfigurationController = CrawlConfigurationController;
//# sourceMappingURL=crawl-configuration.controller.js.map