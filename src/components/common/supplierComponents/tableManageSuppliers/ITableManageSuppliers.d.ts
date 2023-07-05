import type { ISupplier } from '@/consts/ISupplierState';
import type { Dashboards } from '@/consts/permissions';

declare namespace ITableManageSuppliers {
  export interface IProps {
    dashboard: Dashboards;
    searchText: string | boolean;
    loading: boolean;
    dataManageSuppliers: ISupplier.DataTableSuppliers[];
    setDataManageSuppliers: Dispatch<
      SetStateAction<ISupplier.DataTableSuppliers[]>
    >;
    filteredData: Object<any>;
    setFilteredData: Function;
    columnFilters: ColumnFilterItem<any>;
  }

  export interface Filter {
    status: Array<string>;
    expiration: Array<string>;
    contactEmail: Array<string>;
    contactName: Array<string>;
  }

  export interface DataRecord {
    key: string;
    supplierCompanyName: string;
    contactName: string;
    contactEmail: string;
    idNumber: number;
    agreementExpiryDate: string;
    supplierStatus: string;
    supplierInformation: { title: string; value: string }[];
    additionalSupplierContacts: { title: string; value: string }[];
    taxes: { title: string; value: string };
    workCategory: { title: string; value: string };
    accountContactInformation: { title: string; value: string }[];
  }
}

export { ITableManageSuppliers };
