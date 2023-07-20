import { Entity } from '@loopback/repository';
export declare class Season extends Entity {
    id?: number;
    sportTypeId?: number;
    name?: string;
    fullName?: string;
    startAt?: string;
    endAt?: string;
    slug?: string;
    constructor(data?: Partial<Season>);
}
export interface SeasonRelations {
}
export declare type SeasonWithRelations = Season & SeasonRelations;
