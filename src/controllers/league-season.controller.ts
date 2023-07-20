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
import {LeagueSeason} from '../models';
import {LeagueSeasonRepository} from '../repositories';

export class LeagueSeasonController {
  constructor(
    @repository(LeagueSeasonRepository)
    public leagueSeasonRepository : LeagueSeasonRepository,
  ) {}

  @post('/league-seasons')
  @response(200, {
    description: 'LeagueSeason model instance',
    content: {'application/json': {schema: getModelSchemaRef(LeagueSeason)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LeagueSeason, {
            title: 'NewLeagueSeason',
            exclude: ['id'],
          }),
        },
      },
    })
    leagueSeason: Omit<LeagueSeason, 'id'>,
  ): Promise<LeagueSeason> {
    return this.leagueSeasonRepository.create(leagueSeason);
  }

  @get('/league-seasons/count')
  @response(200, {
    description: 'LeagueSeason model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(LeagueSeason) where?: Where<LeagueSeason>,
  ): Promise<Count> {
    return this.leagueSeasonRepository.count(where);
  }

  @get('/league-seasons')
  @response(200, {
    description: 'Array of LeagueSeason model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(LeagueSeason, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(LeagueSeason) filter?: Filter<LeagueSeason>,
  ): Promise<LeagueSeason[]> {
    return this.leagueSeasonRepository.find(filter);
  }

  @patch('/league-seasons')
  @response(200, {
    description: 'LeagueSeason PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LeagueSeason, {partial: true}),
        },
      },
    })
    leagueSeason: LeagueSeason,
    @param.where(LeagueSeason) where?: Where<LeagueSeason>,
  ): Promise<Count> {
    return this.leagueSeasonRepository.updateAll(leagueSeason, where);
  }

  @get('/league-seasons/{id}')
  @response(200, {
    description: 'LeagueSeason model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(LeagueSeason, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(LeagueSeason, {exclude: 'where'}) filter?: FilterExcludingWhere<LeagueSeason>
  ): Promise<LeagueSeason> {
    return this.leagueSeasonRepository.findById(id, filter);
  }

  @patch('/league-seasons/{id}')
  @response(204, {
    description: 'LeagueSeason PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LeagueSeason, {partial: true}),
        },
      },
    })
    leagueSeason: LeagueSeason,
  ): Promise<void> {
    await this.leagueSeasonRepository.updateById(id, leagueSeason);
  }

  @put('/league-seasons/{id}')
  @response(204, {
    description: 'LeagueSeason PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() leagueSeason: LeagueSeason,
  ): Promise<void> {
    await this.leagueSeasonRepository.replaceById(id, leagueSeason);
  }

  @del('/league-seasons/{id}')
  @response(204, {
    description: 'LeagueSeason DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.leagueSeasonRepository.deleteById(id);
  }
}
