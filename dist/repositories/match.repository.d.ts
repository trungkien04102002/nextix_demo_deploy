import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Match, MatchRelations, LeagueSeason, Team, Stadium } from '../models';
import { LeagueSeasonRepository } from './league-season.repository';
import { TeamRepository } from './team.repository';
import { StadiumRepository } from './stadium.repository';
export declare class MatchRepository extends DefaultCrudRepository<Match, typeof Match.prototype.id, MatchRelations> {
    protected leagueSeasonRepositoryGetter: Getter<LeagueSeasonRepository>;
    protected teamRepositoryGetter: Getter<TeamRepository>;
    protected stadiumRepositoryGetter: Getter<StadiumRepository>;
    readonly leagueSeason: BelongsToAccessor<LeagueSeason, typeof Match.prototype.id>;
    readonly homeTeam: BelongsToAccessor<Team, typeof Match.prototype.id>;
    readonly awayTeam: BelongsToAccessor<Team, typeof Match.prototype.id>;
    readonly stadium: BelongsToAccessor<Stadium, typeof Match.prototype.id>;
    constructor(dataSource: DbDataSource, leagueSeasonRepositoryGetter: Getter<LeagueSeasonRepository>, teamRepositoryGetter: Getter<TeamRepository>, stadiumRepositoryGetter: Getter<StadiumRepository>);
}
