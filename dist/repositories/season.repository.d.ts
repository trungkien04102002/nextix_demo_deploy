import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Season, SeasonRelations } from '../models';
export declare class SeasonRepository extends DefaultCrudRepository<Season, typeof Season.prototype.id, SeasonRelations> {
    constructor(dataSource: DbDataSource);
}
