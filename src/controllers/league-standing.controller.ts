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
import {LeagueStanding} from '../models';
import {LeagueStandingRepository} from '../repositories';

export class LeagueStandingController {
  constructor(
    @repository(LeagueStandingRepository)
    public leagueStandingRepository : LeagueStandingRepository,
  ) {}

  @post('/league-standings')
  @response(200, {
    description: 'LeagueStanding model instance',
    content: {'application/json': {schema: getModelSchemaRef(LeagueStanding)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LeagueStanding, {
            title: 'NewLeagueStanding',
            exclude: ['id'],
          }),
        },
      },
    })
    leagueStanding: Omit<LeagueStanding, 'id'>,
  ): Promise<LeagueStanding> {
    return this.leagueStandingRepository.create(leagueStanding);
  }

  @get('/league-standings/count')
  @response(200, {
    description: 'LeagueStanding model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(LeagueStanding) where?: Where<LeagueStanding>,
  ): Promise<Count> {
    return this.leagueStandingRepository.count(where);
  }

  @get('/league-standings')
  @response(200, {
    description: 'Array of LeagueStanding model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(LeagueStanding, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(LeagueStanding) filter?: Filter<LeagueStanding>,
  ): Promise<LeagueStanding[]> {
    return this.leagueStandingRepository.find(filter);
  }

  @patch('/league-standings')
  @response(200, {
    description: 'LeagueStanding PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LeagueStanding, {partial: true}),
        },
      },
    })
    leagueStanding: LeagueStanding,
    @param.where(LeagueStanding) where?: Where<LeagueStanding>,
  ): Promise<Count> {
    return this.leagueStandingRepository.updateAll(leagueStanding, where);
  }

  @get('/league-standings/{id}')
  @response(200, {
    description: 'LeagueStanding model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(LeagueStanding, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(LeagueStanding, {exclude: 'where'}) filter?: FilterExcludingWhere<LeagueStanding>
  ): Promise<LeagueStanding> {
    return this.leagueStandingRepository.findById(id, filter);
  }

  @patch('/league-standings/{id}')
  @response(204, {
    description: 'LeagueStanding PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LeagueStanding, {partial: true}),
        },
      },
    })
    leagueStanding: LeagueStanding,
  ): Promise<void> {
    await this.leagueStandingRepository.updateById(id, leagueStanding);
  }

  @put('/league-standings/{id}')
  @response(204, {
    description: 'LeagueStanding PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() leagueStanding: LeagueStanding,
  ): Promise<void> {
    await this.leagueStandingRepository.replaceById(id, leagueStanding);
  }

  @del('/league-standings/{id}')
  @response(204, {
    description: 'LeagueStanding DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.leagueStandingRepository.deleteById(id);
  }
}
