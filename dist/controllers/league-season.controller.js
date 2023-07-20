"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueSeasonController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let LeagueSeasonController = class LeagueSeasonController {
    constructor(leagueSeasonRepository) {
        this.leagueSeasonRepository = leagueSeasonRepository;
    }
    async create(leagueSeason) {
        return this.leagueSeasonRepository.create(leagueSeason);
    }
    async count(where) {
        return this.leagueSeasonRepository.count(where);
    }
    async find(filter) {
        return this.leagueSeasonRepository.find(filter);
    }
    async updateAll(leagueSeason, where) {
        return this.leagueSeasonRepository.updateAll(leagueSeason, where);
    }
    async findById(id, filter) {
        return this.leagueSeasonRepository.findById(id, filter);
    }
    async updateById(id, leagueSeason) {
        await this.leagueSeasonRepository.updateById(id, leagueSeason);
    }
    async replaceById(id, leagueSeason) {
        await this.leagueSeasonRepository.replaceById(id, leagueSeason);
    }
    async deleteById(id) {
        await this.leagueSeasonRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/league-seasons'),
    (0, rest_1.response)(200, {
        description: 'LeagueSeason model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.LeagueSeason) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.LeagueSeason, {
                    title: 'NewLeagueSeason',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LeagueSeasonController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/league-seasons/count'),
    (0, rest_1.response)(200, {
        description: 'LeagueSeason model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.LeagueSeason)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LeagueSeasonController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/league-seasons'),
    (0, rest_1.response)(200, {
        description: 'Array of LeagueSeason model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.LeagueSeason, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.LeagueSeason)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LeagueSeasonController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/league-seasons'),
    (0, rest_1.response)(200, {
        description: 'LeagueSeason PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.LeagueSeason, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.LeagueSeason)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.LeagueSeason, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LeagueSeasonController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/league-seasons/{id}'),
    (0, rest_1.response)(200, {
        description: 'LeagueSeason model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.LeagueSeason, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.LeagueSeason, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LeagueSeasonController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/league-seasons/{id}'),
    (0, rest_1.response)(204, {
        description: 'LeagueSeason PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.LeagueSeason, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.LeagueSeason]),
    tslib_1.__metadata("design:returntype", Promise)
], LeagueSeasonController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/league-seasons/{id}'),
    (0, rest_1.response)(204, {
        description: 'LeagueSeason PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.LeagueSeason]),
    tslib_1.__metadata("design:returntype", Promise)
], LeagueSeasonController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/league-seasons/{id}'),
    (0, rest_1.response)(204, {
        description: 'LeagueSeason DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], LeagueSeasonController.prototype, "deleteById", null);
LeagueSeasonController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.LeagueSeasonRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.LeagueSeasonRepository])
], LeagueSeasonController);
exports.LeagueSeasonController = LeagueSeasonController;
//# sourceMappingURL=league-season.controller.js.map