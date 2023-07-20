import { Entity, model, property } from '@loopback/repository'

@model()
export class LeagueStandingConverted extends Entity {
  @property({
    type: 'string',
  })
  teamName?: string

  @property({
    type: 'string',
  })
  teamSlug?: string

  @property({
    type: 'string',
  })
  teamLogo?: string | null

  @property({
    type: 'number',
  })
  position?: number

  @property({
    type: 'number',
  })
  playedGames?: number

  @property({
    type: 'number',
  })
  won?: number

  @property({
    type: 'number',
  })
  draw?: number

  @property({
    type: 'number',
  })
  lost?: number

  @property({
    type: 'number',
  })
  wonPercentage?: number

  @property({
    type: 'number',
  })
  points?: number

  @property({
    type: 'number',
  })
  goalsFor?: number

  @property({
    type: 'number',
  })
  goalsAgainst?: number

  @property({
    type: 'number',
  })
  goalsDifference?: number

  @property({
    type: 'number',
  })
  streak?: number

  @property({
    type: 'string',
  })
  refLeagueSeasonId?: string

  @property({
    type: 'string',
  })
  refId?: string

  @property({
    type: 'string',
  })
  slug?: string

  constructor(data?: Partial<LeagueStandingConverted>) {
    super(data)
  }
}

export interface LeagueStandingConvertedRelations {
  // describe navigational properties here
}

export type LeagueStandingConvertedWithRelations = LeagueStandingConverted & LeagueStandingConvertedRelations
