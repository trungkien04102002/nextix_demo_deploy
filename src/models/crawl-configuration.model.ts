import { Entity, model, property } from '@loopback/repository'
import { CrawlProvider, CrawlType, PrincipleName, Status } from '../constants'

@model()
export class CrawlConfiguration extends Entity {
  @property({
    type: 'number',
    id: true,
    // generated: true,
  })
  id?: number

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      enum: Object.values(PrincipleName),
    },
  })
  principleName: PrincipleName

  @property({
    type: 'string',
    required: true,
  })
  principleId: string

  @property({
    type: 'string',
    required: true,
  })
  url: string

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      enum: Object.values(CrawlType),
    },
  })
  crawlType: CrawlType

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      enum: Object.values(CrawlProvider),
    },
  })
  crawlProvider: CrawlProvider

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      enum: Object.values(Status),
    },
  })
  status: Status

  constructor(data?: Partial<CrawlConfiguration>) {
    super(data)
  }
}

export interface CrawlConfigurationRelations {
  // describe navigational properties here
}

export type CrawlConfigurationWithRelations = CrawlConfiguration & CrawlConfigurationRelations
