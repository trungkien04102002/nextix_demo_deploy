import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { SportType } from '../models';
import { SportTypeRepository } from '../repositories';
export declare class SportTypeController {
    sportTypeRepository: SportTypeRepository;
    constructor(sportTypeRepository: SportTypeRepository);
    create(sportType: Omit<SportType, 'id'>): Promise<SportType>;
    count(where?: Where<SportType>): Promise<Count>;
    find(filter?: Filter<SportType>): Promise<SportType[]>;
    updateAll(sportType: SportType, where?: Where<SportType>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<SportType>): Promise<SportType>;
    updateById(id: number, sportType: SportType): Promise<void>;
    replaceById(id: number, sportType: SportType): Promise<void>;
    deleteById(id: number): Promise<void>;
}
