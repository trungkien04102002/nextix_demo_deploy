import { inject } from '@loopback/core'
import { DefaultCrudRepository } from '@loopback/repository'
import { DbDataSource } from '../datasources'
import { SportType, SportTypeRelations } from '../models'

export class SportTypeRepository extends DefaultCrudRepository<
  SportType,
  typeof SportType.prototype.id,
  SportTypeRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(SportType, dataSource)
  }
}
