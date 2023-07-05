declare namespace IGLCodes {
  export interface IProps {
    dataGLCodes: IGLCodes.IGLCodesData[];
    filteredData: IGLCodes.IGLCodesData[];
    handleSearchChange: (value: string) => void;
    loading: boolean;
    setDataGLCodes: Dispatch<SetStateAction<IGLCodes.IGLCodesData[]>>;
    setFilteredData: Dispatch<SetStateAction<IGLCodes.IGLCodesData[]>>;
    searchText: boolean;
  }

  export interface IGLCodesData {
    id: string;
    gl_code: string;
    description: string;
    is_active: string;
  }
}

export { IGLCodes };
