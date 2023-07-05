import type { IUserComponent } from '../IUserComponent';

declare namespace ITableUser {
  export interface IProps {
    search: string;
    loading: boolean;
    dataUser: IUserComponent.DataUserMapped[];
    setDataUser: Function;
    filteredData: IUserComponent.DataUserMapped[];
    setFilteredData: Function;
    filters: {
      userRole: Array<string>;
      userStatus: Array<boolean>;
    };
    setFilters: Function;
  }
}

export { ITableUser };
