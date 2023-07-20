import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { League } from '../models';
import { LeagueRepository } from '../repositories';
export declare class LeagueController {
    leagueRepository: LeagueRepository;
    constructor(leagueRepository: LeagueRepository);
    create(league: Omit<League, 'id'>): Promise<League>;
    count(where?: Where<League>): Promise<Count>;
    find(filter?: Filter<League>): Promise<League[]>;
    updateAll(league: League, where?: Where<League>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<League>): Promise<League>;
    updateById(id: number, league: League): Promise<void>;
    replaceById(id: number, league: League): Promise<void>;
    deleteById(id: number): Promise<void>;
}
