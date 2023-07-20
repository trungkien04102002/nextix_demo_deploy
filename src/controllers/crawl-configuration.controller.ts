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
import {CrawlConfiguration} from '../models';
import {CrawlConfigurationRepository} from '../repositories';

export class CrawlConfigurationController {
  constructor(
    @repository(CrawlConfigurationRepository)
    public crawlConfigurationRepository : CrawlConfigurationRepository,
  ) {}

  @post('/crawl-configurations')
  @response(200, {
    description: 'CrawlConfiguration model instance',
    content: {'application/json': {schema: getModelSchemaRef(CrawlConfiguration)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CrawlConfiguration, {
            title: 'NewCrawlConfiguration',
            exclude: ['id'],
          }),
        },
      },
    })
    crawlConfiguration: Omit<CrawlConfiguration, 'id'>,
  ): Promise<CrawlConfiguration> {
    return this.crawlConfigurationRepository.create(crawlConfiguration);
  }

  @get('/crawl-configurations/count')
  @response(200, {
    description: 'CrawlConfiguration model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CrawlConfiguration) where?: Where<CrawlConfiguration>,
  ): Promise<Count> {
    return this.crawlConfigurationRepository.count(where);
  }

  @get('/crawl-configurations')
  @response(200, {
    description: 'Array of CrawlConfiguration model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CrawlConfiguration, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CrawlConfiguration) filter?: Filter<CrawlConfiguration>,
  ): Promise<CrawlConfiguration[]> {
    return this.crawlConfigurationRepository.find(filter);
  }

  @patch('/crawl-configurations')
  @response(200, {
    description: 'CrawlConfiguration PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CrawlConfiguration, {partial: true}),
        },
      },
    })
    crawlConfiguration: CrawlConfiguration,
    @param.where(CrawlConfiguration) where?: Where<CrawlConfiguration>,
  ): Promise<Count> {
    return this.crawlConfigurationRepository.updateAll(crawlConfiguration, where);
  }

  @get('/crawl-configurations/{id}')
  @response(200, {
    description: 'CrawlConfiguration model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CrawlConfiguration, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CrawlConfiguration, {exclude: 'where'}) filter?: FilterExcludingWhere<CrawlConfiguration>
  ): Promise<CrawlConfiguration> {
    return this.crawlConfigurationRepository.findById(id, filter);
  }

  @patch('/crawl-configurations/{id}')
  @response(204, {
    description: 'CrawlConfiguration PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CrawlConfiguration, {partial: true}),
        },
      },
    })
    crawlConfiguration: CrawlConfiguration,
  ): Promise<void> {
    await this.crawlConfigurationRepository.updateById(id, crawlConfiguration);
  }

  @put('/crawl-configurations/{id}')
  @response(204, {
    description: 'CrawlConfiguration PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() crawlConfiguration: CrawlConfiguration,
  ): Promise<void> {
    await this.crawlConfigurationRepository.replaceById(id, crawlConfiguration);
  }

  @del('/crawl-configurations/{id}')
  @response(204, {
    description: 'CrawlConfiguration DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.crawlConfigurationRepository.deleteById(id);
  }
}
