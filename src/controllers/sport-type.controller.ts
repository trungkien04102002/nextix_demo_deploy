import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {SportType} from '../models';
import {SportTypeRepository} from '../repositories';

export class SportTypeController {
  constructor(
    @repository(SportTypeRepository)
    public sportTypeRepository : SportTypeRepository,
  ) {}

  @post('/sport-types')
  @response(200, {
    description: 'SportType model instance',
    content: {'application/json': {schema: getModelSchemaRef(SportType)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SportType, {
            title: 'NewSportType',
            exclude: ['id'],
          }),
        },
      },
    })
    sportType: Omit<SportType, 'id'>,
  ): Promise<SportType> {
    return this.sportTypeRepository.create(sportType);
  }

  @get('/sport-types/count')
  @response(200, {
    description: 'SportType model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(SportType) where?: Where<SportType>,
  ): Promise<Count> {
    return this.sportTypeRepository.count(where);
  }

  @get('/sport-types')
  @response(200, {
    description: 'Array of SportType model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(SportType, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(SportType) filter?: Filter<SportType>,
  ): Promise<SportType[]> {
    return this.sportTypeRepository.find(filter);
  }

  @patch('/sport-types')
  @response(200, {
    description: 'SportType PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SportType, {partial: true}),
        },
      },
    })
    sportType: SportType,
    @param.where(SportType) where?: Where<SportType>,
  ): Promise<Count> {
    return this.sportTypeRepository.updateAll(sportType, where);
  }

  @get('/sport-types/{id}')
  @response(200, {
    description: 'SportType model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(SportType, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SportType, {exclude: 'where'}) filter?: FilterExcludingWhere<SportType>
  ): Promise<SportType> {
    return this.sportTypeRepository.findById(id, filter);
  }

  @patch('/sport-types/{id}')
  @response(204, {
    description: 'SportType PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SportType, {partial: true}),
        },
      },
    })
    sportType: SportType,
  ): Promise<void> {
    await this.sportTypeRepository.updateById(id, sportType);
  }

  @put('/sport-types/{id}')
  @response(204, {
    description: 'SportType PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() sportType: SportType,
  ): Promise<void> {
    await this.sportTypeRepository.replaceById(id, sportType);
  }

  @del('/sport-types/{id}')
  @response(204, {
    description: 'SportType DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.sportTypeRepository.deleteById(id);
  }
}
