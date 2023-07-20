import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Season } from '../models';
import { SeasonRepository } from '../repositories';
export declare class SeasonController {
    seasonRepository: SeasonRepository;
    constructor(seasonRepository: SeasonRepository);
    create(season: Omit<Season, 'id'>): Promise<Season>;
    count(where?: Where<Season>): Promise<Count>;
    find(filter?: Filter<Season>): Promise<Season[]>;
    updateAll(season: Season, where?: Where<Season>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Season>): Promise<Season>;
    updateById(id: number, season: Season): Promise<void>;
    replaceById(id: number, season: Season): Promise<void>;
    deleteById(id: number): Promise<void>;
}
