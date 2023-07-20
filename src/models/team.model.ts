import { Entity, belongsTo, model, property } from '@loopback/repository'

import { Stadium } from './stadium.model'

@model()
export class Team extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number

  @property({
    type: 'number',
  })
  sportTypeId?: number

  @property({
    type: 'string',
  })
  provider?: string

  @property({
    type: 'string',
  })
  name?: string

  @property({
    type: 'string',
  })
  shortName?: string

  @property({
    type: 'string',
  })
  logo?: string | null

  @property({
    type: 'string',
  })
  image?: string

  @property({
    type: 'string',
  })
  address?: string

  @property({
    type: 'string',
  })
  website?: string

  @property({
    type: 'string',
  })
  email?: string

  @property({
    type: 'string',
  })
  phone?: string

  @property({
    type: 'string',
  })
  history?: string

  @property({
    type: 'string',
  })
  abbr?: string

  @property({
    type: 'string',
  })
  refId?: string

  @property({
    type: 'string',
    index: {
      unique: true,
    },
  })
  slug?: string

  @belongsTo(() => Stadium)
  stadiumId?: number

  constructor(data?: Partial<Team>) {
    super(data)
  }
}

export interface TeamRelations {
  // describe navigational properties here
}

export type TeamWithRelations = Team & TeamRelations
