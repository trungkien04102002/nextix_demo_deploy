"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseDto = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let ResponseDto = class ResponseDto {
};
tslib_1.__decorate([
    (0, repository_1.property)({ type: 'string' }),
    tslib_1.__metadata("design:type", String)
], ResponseDto.prototype, "code", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({ type: 'object' }),
    tslib_1.__metadata("design:type", Object)
], ResponseDto.prototype, "data", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({ type: 'string' }),
    tslib_1.__metadata("design:type", String)
], ResponseDto.prototype, "message", void 0);
ResponseDto = tslib_1.__decorate([
    (0, repository_1.model)()
], ResponseDto);
exports.ResponseDto = ResponseDto;
//# sourceMappingURL=response.dto.js.map