import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { LeagueSeason } from '../models';
import { LeagueSeasonRepository } from '../repositories';
export declare class LeagueSeasonController {
    leagueSeasonRepository: LeagueSeasonRepository;
    constructor(leagueSeasonRepository: LeagueSeasonRepository);
    create(leagueSeason: Omit<LeagueSeason, 'id'>): Promise<LeagueSeason>;
    count(where?: Where<LeagueSeason>): Promise<Count>;
    find(filter?: Filter<LeagueSeason>): Promise<LeagueSeason[]>;
    updateAll(leagueSeason: LeagueSeason, where?: Where<LeagueSeason>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<LeagueSeason>): Promise<LeagueSeason>;
    updateById(id: number, leagueSeason: LeagueSeason): Promise<void>;
    replaceById(id: number, leagueSeason: LeagueSeason): Promise<void>;
    deleteById(id: number): Promise<void>;
}
