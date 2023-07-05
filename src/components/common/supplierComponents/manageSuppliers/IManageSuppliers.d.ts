import type { Dispatch, SetStateAction } from 'react';

declare namespace IManageSuppliers {
  type StringOrNull = string | null;

  export type ManageSuppliersFilters = {
    status: Array<StringOrNull>;
    expiration: Array<StringOrNull>;
    contactEmail: Array<StringOrNull>;
    contactName: Array<string>;
  };

  export interface IProps {
    dataManageSuppliers: ISupplier.GetMultipleSuppliers[];
    filters: ManageSuppliersFilters;
    filteredData: ISupplier.GetMultipleSuppliers[];
    handleSearchChange: (value: string) => void;
    loading: boolean;
    searchText: boolean;
    setFilteredData: Dispatch<SetStateAction<ISupplier.GetMultipleSuppliers[]>>;
    setDataManageSuppliers: Dispatch<
      SetStateAction<ISupplier.GetMultipleSuppliers[]>
    >;
  }
}

export { IManageSuppliers };
