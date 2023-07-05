declare namespace ITableBusinessUnits {
  export interface IProps {
    searchText: string | boolean;
    loading: boolean;
    dataUser: Object<any>;
    setDataUser: Function;
    filteredData: Object<any>;
    setFilteredData: Function;
    BuOwnerFilters: ColumnFilterItem[];
  }

  export interface DataBusinessUnits {
    key: string;
    region: string;
    location: string;
    businessUnitNumber: string;
    buOwner: string;
    status: boolean;
  }

  export interface Filter {
    buOwners: Array<string>;
    status: Array<boolean>;
  }
}

export { ITableBusinessUnits };
