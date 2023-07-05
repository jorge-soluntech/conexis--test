declare namespace ITableCostCenter {
  export interface IProps {
    searchText: string | boolean;
    loading: boolean;
    dataCostCenter: Object<any>;
    setDataCostCenter: Function;
    filteredData: Object<any>;
    setFilteredData: Function;
  }

  export interface DataCostCenter {
    id: string;
    costCenterNumber: string;
    costCenterName: string;
    isActive: boolean;
  }

  export interface Filter {
    isActive: Array<boolean>;
  }
}

export { ITableCostCenter };
