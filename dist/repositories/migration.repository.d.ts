import { Constructor } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Migration, MigrationRelations } from '../models';
declare const MigrationRepository_base: {
    new (...args: any[]): {
        create(entity: import("@loopback/repository").DataObject<Migration>, options?: import("@loopback/repository").AnyObject | undefined): Promise<Migration>;
        updateAll(data: import("@loopback/repository").DataObject<Migration>, where?: import("@loopback/repository").Where<Migration> | undefined, options?: import("@loopback/repository").AnyObject | undefined): Promise<import("@loopback/repository").Count>;
        replaceById(id: number | undefined, data: import("@loopback/repository").DataObject<Migration>, options?: import("@loopback/repository").AnyObject | undefined): Promise<void>;
        updateById(id: number | undefined, data: import("@loopback/repository").DataObject<Migration>, options?: import("@loopback/repository").AnyObject | undefined): Promise<void>;
        save(data: import("@loopback/repository").DataObject<Migration>, options?: import("@loopback/repository").AnyObject | undefined): Promise<Migration>;
        entityClass: typeof import("@loopback/repository").Entity & {
            prototype: Migration;
        };
        inclusionResolvers: Map<string, import("@loopback/repository").InclusionResolver<Migration, import("@loopback/repository").Entity>>;
        update(entity: import("@loopback/repository").DataObject<Migration>, options?: import("@loopback/repository").AnyObject | undefined): Promise<void>;
        delete(entity: import("@loopback/repository").DataObject<Migration>, options?: import("@loopback/repository").AnyObject | undefined): Promise<void>;
        findById(id: number | undefined, filter?: import("@loopback/repository").FilterExcludingWhere<Migration> | undefined, options?: import("@loopback/repository").AnyObject | undefined): Promise<Migration>;
        deleteById(id: number | undefined, options?: import("@loopback/repository").AnyObject | undefined): Promise<void>;
        exists(id: number | undefined, options?: import("@loopback/repository").AnyObject | undefined): Promise<boolean>;
        execute(command: import("@loopback/repository").Command, parameters: import("@loopback/repository").AnyObject | import("@loopback/repository").PositionalParameters, options?: import("@loopback/repository").AnyObject | undefined): Promise<import("@loopback/repository").AnyObject>;
        createAll(dataObjects: import("@loopback/repository").DataObject<Migration>[], options?: import("@loopback/repository").AnyObject | undefined): Promise<Migration[]>;
        find(filter?: import("@loopback/repository").Filter<Migration> | undefined, options?: import("@loopback/repository").AnyObject | undefined): Promise<Migration[]>;
        deleteAll(where?: import("@loopback/repository").Where<Migration> | undefined, options?: import("@loopback/repository").AnyObject | undefined): Promise<import("@loopback/repository").Count>;
        count(where?: import("@loopback/repository").Where<Migration> | undefined, options?: import("@loopback/repository").AnyObject | undefined): Promise<import("@loopback/repository").Count>;
    };
} & Constructor<DefaultCrudRepository<Migration, number | undefined, MigrationRelations>>;
export declare class MigrationRepository extends MigrationRepository_base {
    constructor(dataSource: DbDataSource);
}
export {};
