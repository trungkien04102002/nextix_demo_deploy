import { Getter, inject } from '@loopback/core'
import { BelongsToAccessor, DefaultCrudRepository, repository } from '@loopback/repository'
import { DbDataSource } from '../datasources'
import { Stadium, Team, TeamRelations } from '../models'
import { StadiumRepository } from './stadium.repository'

export class TeamRepository extends DefaultCrudRepository<Team, typeof Team.prototype.id, TeamRelations> {
  public readonly stadium: BelongsToAccessor<Stadium, typeof Team.prototype.id>

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('StadiumRepository') protected stadiumRepositoryGetter: Getter<StadiumRepository>
  ) {
    super(Team, dataSource)
    this.stadium = this.createBelongsToAccessorFor('stadium', stadiumRepositoryGetter)
    this.registerInclusionResolver('stadium', this.stadium.inclusionResolver)
  }
}
