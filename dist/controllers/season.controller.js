"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SeasonController = class SeasonController {
    constructor(seasonRepository) {
        this.seasonRepository = seasonRepository;
    }
    async create(season) {
        return this.seasonRepository.create(season);
    }
    async count(where) {
        return this.seasonRepository.count(where);
    }
    async find(filter) {
        return this.seasonRepository.find(filter);
    }
    async updateAll(season, where) {
        return this.seasonRepository.updateAll(season, where);
    }
    async findById(id, filter) {
        return this.seasonRepository.findById(id, filter);
    }
    async updateById(id, season) {
        await this.seasonRepository.updateById(id, season);
    }
    async replaceById(id, season) {
        await this.seasonRepository.replaceById(id, season);
    }
    async deleteById(id) {
        await this.seasonRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/seasons'),
    (0, rest_1.response)(200, {
        description: 'Season model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Season) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Season, {
                    title: 'NewSeason',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SeasonController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/seasons/count'),
    (0, rest_1.response)(200, {
        description: 'Season model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Season)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SeasonController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/seasons'),
    (0, rest_1.response)(200, {
        description: 'Array of Season model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Season, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Season)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SeasonController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/seasons'),
    (0, rest_1.response)(200, {
        description: 'Season PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Season, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Season)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Season, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SeasonController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/seasons/{id}'),
    (0, rest_1.response)(200, {
        description: 'Season model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Season, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Season, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SeasonController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/seasons/{id}'),
    (0, rest_1.response)(204, {
        description: 'Season PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Season, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Season]),
    tslib_1.__metadata("design:returntype", Promise)
], SeasonController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/seasons/{id}'),
    (0, rest_1.response)(204, {
        description: 'Season PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Season]),
    tslib_1.__metadata("design:returntype", Promise)
], SeasonController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/seasons/{id}'),
    (0, rest_1.response)(204, {
        description: 'Season DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], SeasonController.prototype, "deleteById", null);
SeasonController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SeasonRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SeasonRepository])
], SeasonController);
exports.SeasonController = SeasonController;
//# sourceMappingURL=season.controller.js.map