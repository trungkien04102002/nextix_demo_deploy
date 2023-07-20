import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { LeagueStanding, LeagueStandingRelations, Team, LeagueSeason } from '../models';
import { TeamRepository } from './team.repository';
import { LeagueSeasonRepository } from './league-season.repository';
export declare class LeagueStandingRepository extends DefaultCrudRepository<LeagueStanding, typeof LeagueStanding.prototype.id, LeagueStandingRelations> {
    protected teamRepositoryGetter: Getter<TeamRepository>;
    protected leagueSeasonRepositoryGetter: Getter<LeagueSeasonRepository>;
    readonly team: BelongsToAccessor<Team, typeof LeagueStanding.prototype.id>;
    readonly leagueSeason: BelongsToAccessor<LeagueSeason, typeof LeagueStanding.prototype.id>;
    constructor(dataSource: DbDataSource, teamRepositoryGetter: Getter<TeamRepository>, leagueSeasonRepositoryGetter: Getter<LeagueSeasonRepository>);
}
