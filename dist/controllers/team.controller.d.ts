import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Team } from '../models';
import { TeamRepository } from '../repositories';
export declare class TeamController {
    teamRepository: TeamRepository;
    constructor(teamRepository: TeamRepository);
    create(team: Omit<Team, 'id'>): Promise<Team>;
    count(where?: Where<Team>): Promise<Count>;
    find(filter?: Filter<Team>): Promise<Team[]>;
    updateAll(team: Team, where?: Where<Team>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Team>): Promise<Team>;
    updateById(id: number, team: Team): Promise<void>;
    replaceById(id: number, team: Team): Promise<void>;
    deleteById(id: number): Promise<void>;
}
