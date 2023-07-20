export type VBAMatch = {
  refId: string
  refLeagueSeasonId: string | null
  homeSlug: string
  awaySlug: string
  homeName: string
  awayName: string
  homeLogo: string | null
  awayLogo: string | null
  homeTeamGoals: number | null
  awayTeamGoals: number | null
  stadiumName: string
  stadiumSlug: string
  datetime: string
  status: string
}

export type VBAStanding = {
  refId: string
  refLeagueSeasonId: string
  teamName: string
  teamSlug: string
  teamLogo: string | null
  position: number
  playedGames: number
  won: number
  lost: number
  wonPercentage: number
  goalsFor: number
  goalsAgainst: number
  goalsDifference: number
  streak: number
}

export type IVbaRawData = {
  matches?: VBAMatch[]
  standings?: VBAStanding[]
}
