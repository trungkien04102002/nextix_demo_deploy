"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueStandingController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let LeagueStandingController = class LeagueStandingController {
    constructor(leagueStandingRepository) {
        this.leagueStandingRepository = leagueStandingRepository;
    }
    async create(leagueStanding) {
        return this.leagueStandingRepository.create(leagueStanding);
    }
    async count(where) {
        return this.leagueStandingRepository.count(where);
    }
    async find(filter) {
        return this.leagueStandingRepository.find(filter);
    }
    async updateAll(leagueStanding, where) {
        return this.leagueStandingRepository.updateAll(leagueStanding, where);
    }
    async findById(id, filter) {
        return this.leagueStandingRepository.findById(id, filter);
    }
    async updateById(id, leagueStanding) {
        await this.leagueStandingRepository.updateById(id, leagueStanding);
    }
    async replaceById(id, leagueStanding) {
        await this.leagueStandingRepository.replaceById(id, leagueStanding);
    }
    async deleteById(id) {
        await this.leagueStandingRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/league-standings'),
    (0, rest_1.response)(200, {
        description: 'LeagueStanding model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.LeagueStanding) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.LeagueStanding, {
                    title: 'NewLeagueStanding',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LeagueStandingController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/league-standings/count'),
    (0, rest_1.response)(200, {
        description: 'LeagueStanding model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.LeagueStanding)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LeagueStandingController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/league-standings'),
    (0, rest_1.response)(200, {
        description: 'Array of LeagueStanding model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.LeagueStanding, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.LeagueStanding)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LeagueStandingController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/league-standings'),
    (0, rest_1.response)(200, {
        description: 'LeagueStanding PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.LeagueStanding, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.LeagueStanding)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.LeagueStanding, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LeagueStandingController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/league-standings/{id}'),
    (0, rest_1.response)(200, {
        description: 'LeagueStanding model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.LeagueStanding, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.LeagueStanding, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LeagueStandingController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/league-standings/{id}'),
    (0, rest_1.response)(204, {
        description: 'LeagueStanding PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.LeagueStanding, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.LeagueStanding]),
    tslib_1.__metadata("design:returntype", Promise)
], LeagueStandingController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/league-standings/{id}'),
    (0, rest_1.response)(204, {
        description: 'LeagueStanding PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.LeagueStanding]),
    tslib_1.__metadata("design:returntype", Promise)
], LeagueStandingController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/league-standings/{id}'),
    (0, rest_1.response)(204, {
        description: 'LeagueStanding DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], LeagueStandingController.prototype, "deleteById", null);
LeagueStandingController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.LeagueStandingRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.LeagueStandingRepository])
], LeagueStandingController);
exports.LeagueStandingController = LeagueStandingController;
//# sourceMappingURL=league-standing.controller.js.map