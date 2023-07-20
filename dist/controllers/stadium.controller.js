"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StadiumController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let StadiumController = class StadiumController {
    constructor(stadiumRepository) {
        this.stadiumRepository = stadiumRepository;
    }
    async create(stadium) {
        return this.stadiumRepository.create(stadium);
    }
    async count(where) {
        return this.stadiumRepository.count(where);
    }
    async find(filter) {
        return this.stadiumRepository.find(filter);
    }
    async updateAll(stadium, where) {
        return this.stadiumRepository.updateAll(stadium, where);
    }
    async findById(id, filter) {
        return this.stadiumRepository.findById(id, filter);
    }
    async updateById(id, stadium) {
        await this.stadiumRepository.updateById(id, stadium);
    }
    async replaceById(id, stadium) {
        await this.stadiumRepository.replaceById(id, stadium);
    }
    async deleteById(id) {
        await this.stadiumRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/stadiums'),
    (0, rest_1.response)(200, {
        description: 'Stadium model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Stadium) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Stadium, {
                    title: 'NewStadium',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StadiumController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/stadiums/count'),
    (0, rest_1.response)(200, {
        description: 'Stadium model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Stadium)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StadiumController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/stadiums'),
    (0, rest_1.response)(200, {
        description: 'Array of Stadium model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Stadium, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Stadium)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StadiumController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/stadiums'),
    (0, rest_1.response)(200, {
        description: 'Stadium PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Stadium, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Stadium)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Stadium, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StadiumController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/stadiums/{id}'),
    (0, rest_1.response)(200, {
        description: 'Stadium model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Stadium, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Stadium, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StadiumController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/stadiums/{id}'),
    (0, rest_1.response)(204, {
        description: 'Stadium PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Stadium, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Stadium]),
    tslib_1.__metadata("design:returntype", Promise)
], StadiumController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/stadiums/{id}'),
    (0, rest_1.response)(204, {
        description: 'Stadium PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Stadium]),
    tslib_1.__metadata("design:returntype", Promise)
], StadiumController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/stadiums/{id}'),
    (0, rest_1.response)(204, {
        description: 'Stadium DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], StadiumController.prototype, "deleteById", null);
StadiumController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.StadiumRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.StadiumRepository])
], StadiumController);
exports.StadiumController = StadiumController;
//# sourceMappingURL=stadium.controller.js.map