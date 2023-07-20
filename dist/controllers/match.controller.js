"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MatchController = class MatchController {
    constructor(matchRepository) {
        this.matchRepository = matchRepository;
    }
    async create(match) {
        return this.matchRepository.create(match);
    }
    async count(where) {
        return this.matchRepository.count(where);
    }
    async find(filter) {
        return this.matchRepository.find(filter);
    }
    async updateAll(match, where) {
        return this.matchRepository.updateAll(match, where);
    }
    async findById(id, filter) {
        return this.matchRepository.findById(id, filter);
    }
    async updateById(id, match) {
        await this.matchRepository.updateById(id, match);
    }
    async replaceById(id, match) {
        await this.matchRepository.replaceById(id, match);
    }
    async deleteById(id) {
        await this.matchRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/matches'),
    (0, rest_1.response)(200, {
        description: 'Match model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Match) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Match, {
                    title: 'NewMatch',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MatchController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/matches/count'),
    (0, rest_1.response)(200, {
        description: 'Match model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Match)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MatchController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/matches'),
    (0, rest_1.response)(200, {
        description: 'Array of Match model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Match, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Match)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MatchController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/matches'),
    (0, rest_1.response)(200, {
        description: 'Match PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Match, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Match)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Match, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MatchController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/matches/{id}'),
    (0, rest_1.response)(200, {
        description: 'Match model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Match, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Match, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MatchController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/matches/{id}'),
    (0, rest_1.response)(204, {
        description: 'Match PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Match, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Match]),
    tslib_1.__metadata("design:returntype", Promise)
], MatchController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/matches/{id}'),
    (0, rest_1.response)(204, {
        description: 'Match PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Match]),
    tslib_1.__metadata("design:returntype", Promise)
], MatchController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/matches/{id}'),
    (0, rest_1.response)(204, {
        description: 'Match DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], MatchController.prototype, "deleteById", null);
MatchController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.MatchRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.MatchRepository])
], MatchController);
exports.MatchController = MatchController;
//# sourceMappingURL=match.controller.js.map