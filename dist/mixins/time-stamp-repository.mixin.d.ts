import { Constructor } from '@loopback/core';
import { Count, DataObject, Entity, EntityCrudRepository, Options, Where } from '@loopback/repository';
export declare function TimeStampRepositoryMixin<E extends Entity & {
    createdAt?: Date;
    updatedAt?: Date;
}, ID, R extends Constructor<EntityCrudRepository<E, ID>>>(repository: R): {
    new (...args: any[]): {
        create(entity: DataObject<E>, options?: Options): Promise<E>;
        updateAll(data: DataObject<E>, where?: Where<E>, options?: Options): Promise<Count>;
        replaceById(id: ID, data: DataObject<E>, options?: Options): Promise<void>;
        updateById(id: ID, data: DataObject<E>, options?: Options): Promise<void>;
        save(data: DataObject<E>, options?: Options): Promise<E>;
        entityClass: typeof Entity & {
            prototype: E;
        };
        inclusionResolvers: Map<string, import("@loopback/repository").InclusionResolver<E, Entity>>;
        update(entity: DataObject<E>, options?: import("@loopback/repository").AnyObject | undefined): Promise<void>;
        delete(entity: DataObject<E>, options?: import("@loopback/repository").AnyObject | undefined): Promise<void>;
        findById(id: ID, filter?: import("@loopback/repository").FilterExcludingWhere<E> | undefined, options?: import("@loopback/repository").AnyObject | undefined): Promise<E & {}>;
        deleteById(id: ID, options?: import("@loopback/repository").AnyObject | undefined): Promise<void>;
        exists(id: ID, options?: import("@loopback/repository").AnyObject | undefined): Promise<boolean>;
        execute(command: import("@loopback/repository").Command, parameters: import("@loopback/repository").AnyObject | import("@loopback/repository").PositionalParameters, options?: import("@loopback/repository").AnyObject | undefined): Promise<import("@loopback/repository").AnyObject>;
        createAll(dataObjects: DataObject<E>[], options?: import("@loopback/repository").AnyObject | undefined): Promise<E[]>;
        find(filter?: import("@loopback/repository").Filter<E> | undefined, options?: import("@loopback/repository").AnyObject | undefined): Promise<(E & {})[]>;
        deleteAll(where?: Where<E> | undefined, options?: import("@loopback/repository").AnyObject | undefined): Promise<Count>;
        count(where?: Where<E> | undefined, options?: import("@loopback/repository").AnyObject | undefined): Promise<Count>;
    };
} & R;
