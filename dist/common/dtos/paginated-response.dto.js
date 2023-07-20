"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedResponse = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let PaginatedResponse = class PaginatedResponse {
    constructor(items, pageIndex, pageSize, totalItems) {
        this.items = items;
        this.pageSize = pageSize;
        this.pageIndex = pageIndex;
        this.totalItems = totalItems;
        this.totalPages = Math.ceil(this.totalItems / this.pageSize);
        this.hasPrevPage = this.pageIndex > 1;
        this.hasNextPage = this.pageIndex < this.totalPages;
    }
};
tslib_1.__decorate([
    repository_1.property.array(Object),
    tslib_1.__metadata("design:type", Array)
], PaginatedResponse.prototype, "items", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({ type: 'number' }),
    tslib_1.__metadata("design:type", Number)
], PaginatedResponse.prototype, "pageIndex", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({ type: 'number' }),
    tslib_1.__metadata("design:type", Number)
], PaginatedResponse.prototype, "pageSize", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({ type: 'number' }),
    tslib_1.__metadata("design:type", Number)
], PaginatedResponse.prototype, "totalItems", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({ type: 'boolean' }),
    tslib_1.__metadata("design:type", Boolean)
], PaginatedResponse.prototype, "hasNextPage", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({ type: 'boolean' }),
    tslib_1.__metadata("design:type", Boolean)
], PaginatedResponse.prototype, "hasPrevPage", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({ type: 'number' }),
    tslib_1.__metadata("design:type", Number)
], PaginatedResponse.prototype, "totalPages", void 0);
PaginatedResponse = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Array, Number, Number, Number])
], PaginatedResponse);
exports.PaginatedResponse = PaginatedResponse;
//# sourceMappingURL=paginated-response.dto.js.map