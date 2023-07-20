import { Entity, belongsTo, model, property } from '@loopback/repository'
import { League } from './league.model'
import { Season } from './season.model'

@model({
  settings: {
    strict: true,
    indexes: {
      compositeLeagueSeasonKey: {
        keys: {
          leagueId: 1,
          seasonId: 1,
        },
        options: {
          unique: true,
        },
      },
      leagueSeasonSlug: {
        keys: {
          slug: 1,
        },
        options: {
          unique: true,
        },
      },
    },
  },
})
export class LeagueSeason extends Entity {
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

  @property({
    type: 'string',
  })
  logo?: string

  @property({
    type: 'string',
  })
  refId?: string

  @property({
    type: 'string',
  })
  slug?: string

  @belongsTo(() => League)
  leagueId?: number

  @belongsTo(() => Season)
  seasonId?: number

  constructor(data?: Partial<LeagueSeason>) {
    super(data)
  }
}

export interface LeagueSeasonRelations {
  // describe navigational properties here
}

export type LeagueSeasonWithRelations = LeagueSeason & LeagueSeasonRelations
