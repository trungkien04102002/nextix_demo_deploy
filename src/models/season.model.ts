import { Entity, model, property } from '@loopback/repository'

@model()
export class Season extends Entity {
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
  fullName?: string

  @property({
    type: 'string',
  })
  startAt?: string

  @property({
    type: 'string',
  })
  endAt?: string

  @property({
    type: 'string',
    index: {
      unique: true,
    },
  })
  slug?: string

  constructor(data?: Partial<Season>) {
    super(data)
  }
}

export interface SeasonRelations {
  // describe navigational properties here
}

export type SeasonWithRelations = Season & SeasonRelations
