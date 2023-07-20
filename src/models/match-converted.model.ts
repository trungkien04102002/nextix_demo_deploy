import { Entity, model, property } from '@loopback/repository'

@model()
export class MatchConverted extends Entity {
  @property({
    type: 'string',
  })
  homeSlug?: string

  @property({
    type: 'string',
  })
  awaySlug?: string

  @property({
    type: 'string',
  })
  homeFullName?: string

  @property({
    type: 'string',
  })
  awayFullName?: string

  @property({
    type: 'string',
  })
  homeShortName?: string

  @property({
    type: 'string',
  })
  awayShortName?: string

  @property({
    type: 'string',
  })
  homeLogo?: string | null

  @property({
    type: 'string',
  })
  awayLogo?: string | null

  @property({
    type: 'string',
  })
  homeAbbr?: string

  @property({
    type: 'string',
  })
  awayAbbr?: string

  @property({
    type: 'number',
    default: 0,
  })
  homeTeamGoals?: number | null

  @property({
    type: 'number',
    default: 0,
  })
  awayTeamGoals?: number | null

  @property({
    type: 'string',
  })
  stadiumName?: string

  @property({
    type: 'string',
  })
  stadiumSlug?: string

  @property({
    type: 'string',
  })
  refLeagueSeasonId?: string | null

  @property({
    type: 'string',
  })
  refId?: string

  @property({
    type: 'string',
  })
  datetime?: string

  @property({
    type: 'string',
  })
  status?: string

  @property({
    type: 'string',
  })
  slug?: string

  constructor(data?: Partial<MatchConverted>) {
    super(data)
  }
}

export interface MatchConvertedRelations {
  // describe navigational properties here
}

export type MatchConvertedWithRelations = MatchConverted & MatchConvertedRelations
