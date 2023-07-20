import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Stadium } from '../models';
import { StadiumRepository } from '../repositories';
export declare class StadiumController {
    stadiumRepository: StadiumRepository;
    constructor(stadiumRepository: StadiumRepository);
    create(stadium: Omit<Stadium, 'id'>): Promise<Stadium>;
    count(where?: Where<Stadium>): Promise<Count>;
    find(filter?: Filter<Stadium>): Promise<Stadium[]>;
    updateAll(stadium: Stadium, where?: Where<Stadium>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Stadium>): Promise<Stadium>;
    updateById(id: number, stadium: Stadium): Promise<void>;
    replaceById(id: number, stadium: Stadium): Promise<void>;
    deleteById(id: number): Promise<void>;
}
