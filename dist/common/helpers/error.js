"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemErrorMessage = exports.SystemErrorCode = exports.CustomError = exports.CreateError = exports.NotFound = void 0;
class NotFound extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 404;
    }
}
exports.NotFound = NotFound;
class CreateError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 400;
    }
}
exports.CreateError = CreateError;
class CustomError extends Error {
    constructor(message, statusCode, result) {
        super(message);
        this.statusCode = statusCode !== null && statusCode !== void 0 ? statusCode : SystemErrorCode.INTERNAL_SERVER_ERROR;
        this.result = result !== null && result !== void 0 ? result : false;
    }
}
exports.CustomError = CustomError;
var SystemErrorCode;
(function (SystemErrorCode) {
    SystemErrorCode[SystemErrorCode["SUCCESS"] = 200] = "SUCCESS";
    SystemErrorCode[SystemErrorCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    SystemErrorCode[SystemErrorCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    SystemErrorCode[SystemErrorCode["PROVIDER_ERROR"] = 501] = "PROVIDER_ERROR";
})(SystemErrorCode = exports.SystemErrorCode || (exports.SystemErrorCode = {}));
exports.SystemErrorMessage = {
    [SystemErrorCode.SUCCESS]: 'SUCCESS',
    [SystemErrorCode.BAD_REQUEST]: 'BAD_REQUEST',
    [SystemErrorCode.INTERNAL_SERVER_ERROR]: 'INTERNAL_SERVER_ERROR',
    [SystemErrorCode.PROVIDER_ERROR]: 'PROVIDER_ERROR'
};
//# sourceMappingURL=error.js.map