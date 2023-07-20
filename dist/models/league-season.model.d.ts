import { Entity } from '@loopback/repository';
export declare class LeagueSeason extends Entity {
    id?: number;
    name?: string;
    logo?: string;
    refId?: string;
    slug?: string;
    leagueId?: number;
    seasonId?: number;
    constructor(data?: Partial<LeagueSeason>);
}
export interface LeagueSeasonRelations {
}
export declare type LeagueSeasonWithRelations = LeagueSeason & LeagueSeasonRelations;
