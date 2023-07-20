import { LeagueStandingConverted, MatchConverted, Stadium, Team } from '../models'

export type ConvertedData = {
  teams?: Team[]
  stadiums?: Stadium[]
  matches?: MatchConverted[]
  standings?: LeagueStandingConverted[]
}
