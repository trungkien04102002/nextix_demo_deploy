import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Stadium, Team, TeamRelations } from '../models';
import { StadiumRepository } from './stadium.repository';
export declare class TeamRepository extends DefaultCrudRepository<Team, typeof Team.prototype.id, TeamRelations> {
    protected stadiumRepositoryGetter: Getter<StadiumRepository>;
    readonly stadium: BelongsToAccessor<Stadium, typeof Team.prototype.id>;
    constructor(dataSource: DbDataSource, stadiumRepositoryGetter: Getter<StadiumRepository>);
}
