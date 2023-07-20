import { Entity, belongsTo, model, property } from '@loopback/repository'
import { LeagueSeason } from './league-season.model'
import { Team } from './team.model'

@model({
  settings: {
    indexes: {
      compositeTeamLeagueSeasonProviderKey: {
        keys: {
          leagueSeasonId: 1,
          teamId: 1,
          provider: 1,
        },
        options: {
          unique: true,
        },
      },
    },
  },
})
export class LeagueStanding extends Entity {
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
  position?: number

  @property({
    type: 'number',
  })
  playedGames?: number

  @property({
    type: 'string',
  })
  form?: string

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
  refId?: string

  @property({
    type: 'string',
  })
  slug?: string

  @belongsTo(() => Team)
  teamId?: number

  @belongsTo(() => LeagueSeason)
  leagueSeasonId?: number

  constructor(data?: Partial<LeagueStanding>) {
    super(data)
  }
}

export interface LeagueStandingRelations {
  // describe navigational properties here
}

export type LeagueStandingWithRelations = LeagueStanding & LeagueStandingRelations
