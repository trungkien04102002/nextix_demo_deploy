import { Entity, belongsTo, model, property } from '@loopback/repository'
import { LeagueSeason } from './league-season.model'
import { Stadium } from './stadium.model'
import { Team } from './team.model'

@model({
  settings: {
    indexes: {
      leagueSeasonRefIdProviderIdx: {
        keys: {
          refId: 1,
          provider: 1,
        },
        options: {
          unique: true,
        },
      },
    },
  },
})
export class Match extends Entity {
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
    type: 'number',
  })
  awayTeamGoals?: number | null

  @property({
    type: 'number',
  })
  homeTeamGoals?: number | null

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
  refId?: string

  @property({
    type: 'string',
  })
  slug?: string

  @belongsTo(() => LeagueSeason)
  leagueSeasonId?: number

  @belongsTo(() => Team, { name: 'homeTeam' })
  homeTeamId?: number

  @belongsTo(() => Team, { name: 'awayTeam' })
  awayTeamId?: number

  @belongsTo(() => Stadium)
  stadiumId?: number

  constructor(data?: Partial<Match>) {
    super(data)
  }
}

export interface MatchRelations {
  // describe navigational properties here
}

export type MatchWithRelations = Match & MatchRelations
