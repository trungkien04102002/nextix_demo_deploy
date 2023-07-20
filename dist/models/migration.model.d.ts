import { BaseEntity } from '../common/models/base-entity.model';
declare const Migration_base: {
    new (...args: any[]): {
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    };
} & typeof BaseEntity;
export declare class Migration extends Migration_base {
    name: string;
    id?: number;
    [prop: string]: any;
    constructor(data?: Partial<Migration>);
}
export interface MigrationRelations {
}
export declare type MigrationWithRelations = Migration & MigrationRelations;
export {};
