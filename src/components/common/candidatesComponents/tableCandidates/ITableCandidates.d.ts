declare namespace ITableCandidates {
  export interface IData {
    key: string;
    fullName: string;
    email?: string;
    workerStatus: string;
  }
  export interface IProps {
    dataUser: IData[];
    filteredData: Object<any>;
    loading: boolean;
    searchText: string | boolean;
  }

  export interface Filter {
    status: Array<string>;
  }
}

export { ITableCandidates };
