import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { League, LeagueRelations } from '../models';
export declare class LeagueRepository extends DefaultCrudRepository<League, typeof League.prototype.id, LeagueRelations> {
    constructor(dataSource: DbDataSource);
}
