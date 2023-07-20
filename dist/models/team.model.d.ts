import { Entity } from '@loopback/repository';
export declare class Team extends Entity {
    id?: number;
    sportTypeId?: number;
    provider?: string;
    name?: string;
    shortName?: string;
    logo?: string | null;
    image?: string;
    address?: string;
    website?: string;
    email?: string;
    phone?: string;
    history?: string;
    abbr?: string;
    refId?: string;
    slug?: string;
    stadiumId?: number;
    constructor(data?: Partial<Team>);
}
export interface TeamRelations {
}
export declare type TeamWithRelations = Team & TeamRelations;
