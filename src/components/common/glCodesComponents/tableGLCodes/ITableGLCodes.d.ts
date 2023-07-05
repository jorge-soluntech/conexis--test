declare namespace ITableGLCodes {
  export interface IProps {
    searchText: string | boolean;
    loading: boolean;
    dataGLCodes: Object<any>;
    setDataGLCodes: Function;
    filteredData: Object<any>;
    setFilteredData: Function;
  }

  export interface DataGLCode {
    id: string;
    costCenterNumber: string;
    costCenterName: string;
    isActive: boolean;
  }
}

export { ITableGLCodes };
