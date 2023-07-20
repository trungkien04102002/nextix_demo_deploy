import { Entity, model, property } from '@loopback/repository'

@model()
export class SportType extends Entity {
  @property({
    type: 'number',
    id: true,
    // generated: true,
  })
  id?: number

  @property({
    type: 'string',
  })
  name?: string

  constructor(data?: Partial<SportType>) {
    super(data)
  }
}

export interface SportTypeRelations {
  // describe navigational properties here
}

export type SportTypeWithRelations = SportType & SportTypeRelations
