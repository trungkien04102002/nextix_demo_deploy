export declare class PaginatedResponse<Type> {
    constructor(items: Type[], pageIndex: number, pageSize: number, totalItems: number);
    items: Array<Type>;
    pageIndex: number;
    pageSize: number;
    totalItems: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    totalPages: number;
}
