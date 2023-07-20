import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Match } from '../models';
import { MatchRepository } from '../repositories';
export declare class MatchController {
    matchRepository: MatchRepository;
    constructor(matchRepository: MatchRepository);
    create(match: Omit<Match, 'id'>): Promise<Match>;
    count(where?: Where<Match>): Promise<Count>;
    find(filter?: Filter<Match>): Promise<Match[]>;
    updateAll(match: Match, where?: Where<Match>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Match>): Promise<Match>;
    updateById(id: number, match: Match): Promise<void>;
    replaceById(id: number, match: Match): Promise<void>;
    deleteById(id: number): Promise<void>;
}
