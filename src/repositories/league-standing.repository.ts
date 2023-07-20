import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {LeagueStanding, LeagueStandingRelations, Team, LeagueSeason} from '../models';
import {TeamRepository} from './team.repository';
import {LeagueSeasonRepository} from './league-season.repository';

export class LeagueStandingRepository extends DefaultCrudRepository<
  LeagueStanding,
  typeof LeagueStanding.prototype.id,
  LeagueStandingRelations
> {

  public readonly team: BelongsToAccessor<Team, typeof LeagueStanding.prototype.id>;

  public readonly leagueSeason: BelongsToAccessor<LeagueSeason, typeof LeagueStanding.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('TeamRepository') protected teamRepositoryGetter: Getter<TeamRepository>, @repository.getter('LeagueSeasonRepository') protected leagueSeasonRepositoryGetter: Getter<LeagueSeasonRepository>,
  ) {
    super(LeagueStanding, dataSource);
    this.leagueSeason = this.createBelongsToAccessorFor('leagueSeason', leagueSeasonRepositoryGetter,);
    this.registerInclusionResolver('leagueSeason', this.leagueSeason.inclusionResolver);
    this.team = this.createBelongsToAccessorFor('team', teamRepositoryGetter,);
    this.registerInclusionResolver('team', this.team.inclusionResolver);
  }
}
