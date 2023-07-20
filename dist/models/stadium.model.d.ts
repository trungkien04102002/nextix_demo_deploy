import { Entity } from '@loopback/repository';
export declare class Stadium extends Entity {
    id?: number;
    name?: string;
    address?: string;
    capacity?: number;
    refId?: string;
    slug?: string;
    constructor(data?: Partial<Stadium>);
}
export interface StadiumRelations {
}
export declare type StadiumWithRelations = Stadium & StadiumRelations;
