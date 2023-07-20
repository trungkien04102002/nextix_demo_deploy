"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TeamController = class TeamController {
    constructor(teamRepository) {
        this.teamRepository = teamRepository;
    }
    async create(team) {
        return this.teamRepository.create(team);
    }
    async count(where) {
        return this.teamRepository.count(where);
    }
    async find(filter) {
        return this.teamRepository.find(filter);
    }
    async updateAll(team, where) {
        return this.teamRepository.updateAll(team, where);
    }
    async findById(id, filter) {
        return this.teamRepository.findById(id, filter);
    }
    async updateById(id, team) {
        await this.teamRepository.updateById(id, team);
    }
    async replaceById(id, team) {
        await this.teamRepository.replaceById(id, team);
    }
    async deleteById(id) {
        await this.teamRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/teams'),
    (0, rest_1.response)(200, {
        description: 'Team model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Team) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Team, {
                    title: 'NewTeam',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/teams/count'),
    (0, rest_1.response)(200, {
        description: 'Team model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Team)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/teams'),
    (0, rest_1.response)(200, {
        description: 'Array of Team model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Team, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Team)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/teams'),
    (0, rest_1.response)(200, {
        description: 'Team PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Team, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Team)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Team, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/teams/{id}'),
    (0, rest_1.response)(200, {
        description: 'Team model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Team, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Team, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/teams/{id}'),
    (0, rest_1.response)(204, {
        description: 'Team PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Team, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Team]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/teams/{id}'),
    (0, rest_1.response)(204, {
        description: 'Team PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Team]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/teams/{id}'),
    (0, rest_1.response)(204, {
        description: 'Team DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamController.prototype, "deleteById", null);
TeamController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.TeamRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TeamRepository])
], TeamController);
exports.TeamController = TeamController;
//# sourceMappingURL=team.controller.js.map