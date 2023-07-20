import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { LeagueStanding } from '../models';
import { LeagueStandingRepository } from '../repositories';
export declare class LeagueStandingController {
    leagueStandingRepository: LeagueStandingRepository;
    constructor(leagueStandingRepository: LeagueStandingRepository);
    create(leagueStanding: Omit<LeagueStanding, 'id'>): Promise<LeagueStanding>;
    count(where?: Where<LeagueStanding>): Promise<Count>;
    find(filter?: Filter<LeagueStanding>): Promise<LeagueStanding[]>;
    updateAll(leagueStanding: LeagueStanding, where?: Where<LeagueStanding>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<LeagueStanding>): Promise<LeagueStanding>;
    updateById(id: number, leagueStanding: LeagueStanding): Promise<void>;
    replaceById(id: number, leagueStanding: LeagueStanding): Promise<void>;
    deleteById(id: number): Promise<void>;
}
