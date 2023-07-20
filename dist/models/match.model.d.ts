import { Entity } from '@loopback/repository';
export declare class Match extends Entity {
    id?: number;
    sportTypeId?: number;
    provider?: string;
    awayTeamGoals?: number | null;
    homeTeamGoals?: number | null;
    datetime?: string;
    status?: string;
    refId?: string;
    slug?: string;
    leagueSeasonId?: number;
    homeTeamId?: number;
    awayTeamId?: number;
    stadiumId?: number;
    constructor(data?: Partial<Match>);
}
export interface MatchRelations {
}
export declare type MatchWithRelations = Match & MatchRelations;
