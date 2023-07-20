import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Stadium, StadiumRelations } from '../models';
export declare class StadiumRepository extends DefaultCrudRepository<Stadium, typeof Stadium.prototype.id, StadiumRelations> {
    constructor(dataSource: DbDataSource);
}
