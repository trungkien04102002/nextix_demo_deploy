import { Entity } from '@loopback/repository';
export declare class MatchConverted extends Entity {
    homeSlug?: string;
    awaySlug?: string;
    homeFullName?: string;
    awayFullName?: string;
    homeShortName?: string;
    awayShortName?: string;
    homeLogo?: string | null;
    awayLogo?: string | null;
    homeAbbr?: string;
    awayAbbr?: string;
    homeTeamGoals?: number | null;
    awayTeamGoals?: number | null;
    stadiumName?: string;
    stadiumSlug?: string;
    refLeagueSeasonId?: string | null;
    refId?: string;
    datetime?: string;
    status?: string;
    slug?: string;
    constructor(data?: Partial<MatchConverted>);
}
export interface MatchConvertedRelations {
}
export declare type MatchConvertedWithRelations = MatchConverted & MatchConvertedRelations;
