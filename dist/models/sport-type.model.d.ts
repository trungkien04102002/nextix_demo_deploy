import { Entity } from '@loopback/repository';
export declare class SportType extends Entity {
    id?: number;
    name?: string;
    constructor(data?: Partial<SportType>);
}
export interface SportTypeRelations {
}
export declare type SportTypeWithRelations = SportType & SportTypeRelations;
