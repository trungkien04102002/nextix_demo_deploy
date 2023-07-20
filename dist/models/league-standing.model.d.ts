import { Entity } from '@loopback/repository';
export declare class LeagueStanding extends Entity {
    id?: number;
    sportTypeId?: number;
    provider?: string;
    position?: number;
    playedGames?: number;
    form?: string;
    won?: number;
    draw?: number;
    lost?: number;
    wonPercentage?: number;
    points?: number;
    goalsFor?: number;
    goalsAgainst?: number;
    goalsDifference?: number;
    streak?: number;
    refId?: string;
    slug?: string;
    teamId?: number;
    leagueSeasonId?: number;
    constructor(data?: Partial<LeagueStanding>);
}
export interface LeagueStandingRelations {
}
export declare type LeagueStandingWithRelations = LeagueStanding & LeagueStandingRelations;
