import { MixinTarget } from '@loopback/core';
import { Model } from '@loopback/rest';
export declare function UserAndTimeStampMixin<T extends MixinTarget<Model>>(superClass: T): {
    new (...args: any[]): {
        userId?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        toJSON: () => Object;
        toObject: (options?: import("@loopback/repository").AnyObject | undefined) => Object;
    };
} & T;
