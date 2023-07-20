import { Entity } from '@loopback/repository';
export declare class LeagueStandingConverted extends Entity {
    teamName?: string;
    teamSlug?: string;
    teamLogo?: string | null;
    position?: number;
    playedGames?: number;
    won?: number;
    draw?: number;
    lost?: number;
    wonPercentage?: number;
    points?: number;
    goalsFor?: number;
    goalsAgainst?: number;
    goalsDifference?: number;
    streak?: number;
    refLeagueSeasonId?: string;
    refId?: string;
    slug?: string;
    constructor(data?: Partial<LeagueStandingConverted>);
}
export interface LeagueStandingConvertedRelations {
}
export declare type LeagueStandingConvertedWithRelations = LeagueStandingConverted & LeagueStandingConvertedRelations;
