import { Entity, model, property } from '@loopback/repository'

@model()
export class League extends Entity {
  @property({
    type: 'number',
    id: true,
    // generated: true,
  })
  id?: number

  @property({
    type: 'number',
  })
  sportTypeId?: number

  @property({
    type: 'string',
  })
  name?: string

  @property({
    type: 'string',
  })
  logo?: string

  @property({
    type: 'string',
    index: {
      unique: true,
    },
  })
  slug?: string

  constructor(data?: Partial<League>) {
    super(data)
  }
}

export interface LeagueRelations {
  // describe navigational properties here
}

export type LeagueWithRelations = League & LeagueRelations
