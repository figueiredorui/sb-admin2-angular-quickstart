export class PagedList<T> {

    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalCount: number;
    data: Array<T>;
}
