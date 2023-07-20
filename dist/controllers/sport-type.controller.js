"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportTypeController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SportTypeController = class SportTypeController {
    constructor(sportTypeRepository) {
        this.sportTypeRepository = sportTypeRepository;
    }
    async create(sportType) {
        return this.sportTypeRepository.create(sportType);
    }
    async count(where) {
        return this.sportTypeRepository.count(where);
    }
    async find(filter) {
        return this.sportTypeRepository.find(filter);
    }
    async updateAll(sportType, where) {
        return this.sportTypeRepository.updateAll(sportType, where);
    }
    async findById(id, filter) {
        return this.sportTypeRepository.findById(id, filter);
    }
    async updateById(id, sportType) {
        await this.sportTypeRepository.updateById(id, sportType);
    }
    async replaceById(id, sportType) {
        await this.sportTypeRepository.replaceById(id, sportType);
    }
    async deleteById(id) {
        await this.sportTypeRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/sport-types'),
    (0, rest_1.response)(200, {
        description: 'SportType model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.SportType) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.SportType, {
                    title: 'NewSportType',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SportTypeController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/sport-types/count'),
    (0, rest_1.response)(200, {
        description: 'SportType model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.SportType)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SportTypeController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/sport-types'),
    (0, rest_1.response)(200, {
        description: 'Array of SportType model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.SportType, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.SportType)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SportTypeController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/sport-types'),
    (0, rest_1.response)(200, {
        description: 'SportType PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.SportType, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.SportType)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.SportType, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SportTypeController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/sport-types/{id}'),
    (0, rest_1.response)(200, {
        description: 'SportType model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.SportType, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.SportType, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SportTypeController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/sport-types/{id}'),
    (0, rest_1.response)(204, {
        description: 'SportType PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.SportType, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.SportType]),
    tslib_1.__metadata("design:returntype", Promise)
], SportTypeController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/sport-types/{id}'),
    (0, rest_1.response)(204, {
        description: 'SportType PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.SportType]),
    tslib_1.__metadata("design:returntype", Promise)
], SportTypeController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/sport-types/{id}'),
    (0, rest_1.response)(204, {
        description: 'SportType DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], SportTypeController.prototype, "deleteById", null);
SportTypeController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SportTypeRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SportTypeRepository])
], SportTypeController);
exports.SportTypeController = SportTypeController;
//# sourceMappingURL=sport-type.controller.js.map