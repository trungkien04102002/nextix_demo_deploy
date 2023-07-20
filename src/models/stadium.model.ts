import { Entity, model, property } from '@loopback/repository'

@model()
export class Stadium extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number

  @property({
    type: 'string',
  })
  name?: string

  @property({
    type: 'string',
  })
  address?: string

  @property({
    type: 'number',
  })
  capacity?: number

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

  constructor(data?: Partial<Stadium>) {
    super(data)
  }
}

export interface StadiumRelations {
  // describe navigational properties here
}

export type StadiumWithRelations = Stadium & StadiumRelations
