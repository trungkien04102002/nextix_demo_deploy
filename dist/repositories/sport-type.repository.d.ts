import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { SportType, SportTypeRelations } from '../models';
export declare class SportTypeRepository extends DefaultCrudRepository<SportType, typeof SportType.prototype.id, SportTypeRelations> {
    constructor(dataSource: DbDataSource);
}
