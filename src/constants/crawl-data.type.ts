import { LeagueStanding, Match, Stadium, Team } from '../models'

export type CrawlData = {
  teams?: Team[]
  stadiums?: Stadium[]
  matches?: Match[]
  standing?: LeagueStanding[]
}
