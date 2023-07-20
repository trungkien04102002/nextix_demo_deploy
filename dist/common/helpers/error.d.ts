export declare class NotFound extends Error {
    statusCode: number;
    constructor(message: string);
}
export declare class CreateError extends Error {
    statusCode: number;
    constructor(message: string);
}
export declare class CustomError extends Error {
    statusCode: SystemErrorCode;
    result: boolean;
    constructor(message: string, statusCode?: number, result?: boolean);
}
export declare enum SystemErrorCode {
    SUCCESS = 200,
    BAD_REQUEST = 400,
    INTERNAL_SERVER_ERROR = 500,
    PROVIDER_ERROR = 501
}
export declare const SystemErrorMessage: Record<SystemErrorCode, string>;
