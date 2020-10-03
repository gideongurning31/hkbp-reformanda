import { Injectable } from '@angular/core';

@Injectable()
export class PagingHelperService {
  constructor() {}

  getPaging(paging: ApiPaging): Paging {
    const totalPage = paging.totalRow / paging.rowPerPage;
    return {
      page: paging.page + 1,
      rowPerPage: paging.rowPerPage,
      totalRow: paging.totalRow,
      totalPage: Math.floor(totalPage),
      data: paging.data,
    };
  }
}

export interface ApiPaging {
  page: number;
  rowPerPage: number;
  totalRow: number;
  data: Array<any>;
}

export interface Paging extends ApiPaging {
  totalPage: number;
}
