import dynamic from 'next/dynamic';

import FallbackComponent from '@/components/common/fallbackComponent/FallbackComponent';
import { TablePageLoader } from '@/components/common/loaders';
import type { IManageSuppliers } from '@/components/common/supplierComponents/manageSuppliers/IManageSuppliers';
import useManageSuppliers from '@/components/common/supplierComponents/useManageSuppliersData';

const ManageSuppliers = dynamic(
  () =>
    import(
      '@/components/common/supplierComponents/manageSuppliers/ManageSuppliers'
    ),
  {
    loading: () => <FallbackComponent />,
  }
);

/**
 * Suppliers page, will see Main as a template, use the same template for other pages
 * @returns The suppliers page ./home/suppliers/
 */

const Suppliers = () => {
  return (
    <TablePageLoader<IManageSuppliers.IProps>
      {...{ useGetData: useManageSuppliers }}
    >
      {({
        dataManageSuppliers,
        filters,
        filteredData,
        handleSearchChange,
        loading,
        searchText,
        setFilteredData,
        setDataManageSuppliers,
      }) => {
        return (
          <ManageSuppliers
            {...{
              dataManageSuppliers,
              filters,
              filteredData,
              handleSearchChange,
              loading,
              searchText,
              setFilteredData,
              setDataManageSuppliers,
            }}
          />
        );
      }}
    </TablePageLoader>
  );
};

export default Suppliers;
