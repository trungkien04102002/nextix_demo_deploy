import { MixinTarget } from '@loopback/core';
export declare function TimeStampMixin<T extends MixinTarget<object>>(baseClass: T): {
    new (...args: any[]): {
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    };
} & T;
