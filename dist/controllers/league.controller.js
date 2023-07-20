"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let LeagueController = class LeagueController {
    constructor(leagueRepository) {
        this.leagueRepository = leagueRepository;
    }
    async create(league) {
        return this.leagueRepository.create(league);
    }
    async count(where) {
        return this.leagueRepository.count(where);
    }
    async find(filter) {
        return this.leagueRepository.find(filter);
    }
    async updateAll(league, where) {
        return this.leagueRepository.updateAll(league, where);
    }
    async findById(id, filter) {
        return this.leagueRepository.findById(id, filter);
    }
    async updateById(id, league) {
        await this.leagueRepository.updateById(id, league);
    }
    async replaceById(id, league) {
        await this.leagueRepository.replaceById(id, league);
    }
    async deleteById(id) {
        await this.leagueRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/leagues'),
    (0, rest_1.response)(200, {
        description: 'League model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.League) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.League, {
                    title: 'NewLeague',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LeagueController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/leagues/count'),
    (0, rest_1.response)(200, {
        description: 'League model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.League)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LeagueController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/leagues'),
    (0, rest_1.response)(200, {
        description: 'Array of League model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.League, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.League)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LeagueController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/leagues'),
    (0, rest_1.response)(200, {
        description: 'League PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.League, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.League)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.League, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LeagueController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/leagues/{id}'),
    (0, rest_1.response)(200, {
        description: 'League model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.League, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.League, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LeagueController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/leagues/{id}'),
    (0, rest_1.response)(204, {
        description: 'League PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.League, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.League]),
    tslib_1.__metadata("design:returntype", Promise)
], LeagueController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/leagues/{id}'),
    (0, rest_1.response)(204, {
        description: 'League PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.League]),
    tslib_1.__metadata("design:returntype", Promise)
], LeagueController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/leagues/{id}'),
    (0, rest_1.response)(204, {
        description: 'League DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], LeagueController.prototype, "deleteById", null);
LeagueController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.LeagueRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.LeagueRepository])
], LeagueController);
exports.LeagueController = LeagueController;
//# sourceMappingURL=league.controller.js.map