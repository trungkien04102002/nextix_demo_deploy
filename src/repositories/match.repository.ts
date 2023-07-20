import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Match, MatchRelations, LeagueSeason, Team, Stadium} from '../models';
import {LeagueSeasonRepository} from './league-season.repository';
import {TeamRepository} from './team.repository';
import {StadiumRepository} from './stadium.repository';

export class MatchRepository extends DefaultCrudRepository<
  Match,
  typeof Match.prototype.id,
  MatchRelations
> {

  public readonly leagueSeason: BelongsToAccessor<LeagueSeason, typeof Match.prototype.id>;

  public readonly homeTeam: BelongsToAccessor<Team, typeof Match.prototype.id>;

  public readonly awayTeam: BelongsToAccessor<Team, typeof Match.prototype.id>;

  public readonly stadium: BelongsToAccessor<Stadium, typeof Match.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('LeagueSeasonRepository') protected leagueSeasonRepositoryGetter: Getter<LeagueSeasonRepository>, @repository.getter('TeamRepository') protected teamRepositoryGetter: Getter<TeamRepository>, @repository.getter('StadiumRepository') protected stadiumRepositoryGetter: Getter<StadiumRepository>,
  ) {
    super(Match, dataSource);
    this.stadium = this.createBelongsToAccessorFor('stadium', stadiumRepositoryGetter,);
    this.registerInclusionResolver('stadium', this.stadium.inclusionResolver);
    this.awayTeam = this.createBelongsToAccessorFor('awayTeam', teamRepositoryGetter,);
    this.registerInclusionResolver('awayTeam', this.awayTeam.inclusionResolver);
    this.homeTeam = this.createBelongsToAccessorFor('homeTeam', teamRepositoryGetter,);
    this.registerInclusionResolver('homeTeam', this.homeTeam.inclusionResolver);
    this.leagueSeason = this.createBelongsToAccessorFor('leagueSeason', leagueSeasonRepositoryGetter,);
    this.registerInclusionResolver('leagueSeason', this.leagueSeason.inclusionResolver);
  }
}
