import { Injectable } from '@angular/core';

@Injectable()
export class PagingHelper {
  constructor() {}

  getPaging(paging: ApiPaging): Paging {
    const totalPage = paging.totalRow / paging.rowPerPage;
    return {
      page: paging.page + 1,
      rowPerPage: paging.rowPerPage,
      totalRow: paging.totalRow,
      totalPage: Math.floor(totalPage),
    };
  }
}

export interface ApiPagingResponse {
  paging: ApiPaging;
  data: Array<any>;
}

export interface ApiPaging {
  page: number;
  rowPerPage: number;
  totalRow: number;
}

export interface Paging extends ApiPaging {
  totalPage: number;
}
