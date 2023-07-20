"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedRequestDto = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let PaginatedRequestDto = class PaginatedRequestDto {
    get skip() {
        return (this.pageIndex - 1) * this.pageSize;
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({ type: 'number' }),
    tslib_1.__metadata("design:type", Number)
], PaginatedRequestDto.prototype, "pageIndex", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({ type: 'number' }),
    tslib_1.__metadata("design:type", Number)
], PaginatedRequestDto.prototype, "pageSize", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({ type: 'number' }),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [])
], PaginatedRequestDto.prototype, "skip", null);
PaginatedRequestDto = tslib_1.__decorate([
    (0, repository_1.model)()
], PaginatedRequestDto);
exports.PaginatedRequestDto = PaginatedRequestDto;
//# sourceMappingURL=paginated-request.dto.js.map