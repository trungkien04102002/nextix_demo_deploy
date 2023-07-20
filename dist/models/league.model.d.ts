import { Entity } from '@loopback/repository';
export declare class League extends Entity {
    id?: number;
    sportTypeId?: number;
    name?: string;
    logo?: string;
    slug?: string;
    constructor(data?: Partial<League>);
}
export interface LeagueRelations {
}
export declare type LeagueWithRelations = League & LeagueRelations;
