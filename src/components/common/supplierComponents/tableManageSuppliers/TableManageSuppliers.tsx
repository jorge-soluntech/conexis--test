import type { TableProps } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { FC } from 'react';
import { useRef, useState } from 'react';

import { setPage } from '@/application/supplierSlice/supplierSlice';
import Filter from '@/assets/filter';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import locales from '@/locales/en/en.json';
import sorterTable from '@/utils/sorterTable';

import TableComponent from '../../tableComponent/Table';
import ExpandedRow from '../expandedRow/ExpandedRow';
import type { ITableManageSuppliers } from './ITableManageSuppliers';
import styles from './tableManageSuppliers.module.scss';

const DEFAULT_PAGE_SIZE = 20;

const {
  consts: {
    filters: { blankObject },
  },
} = locales;
/**
 * returns the suppliers table
 * @param dashboard - The dashboard.
 * @param searchText - string or boolean that indicates if there is a search
 * @param loading - boolean indicating whether the data request is being made for the table
 * @param dataUser - object with the table data
 * @param setDataUser - function that modifies dataUser
 * @param filteredData - object with the table data filtered based on the searchText parameter
 * @param setFilteredData - function that modifies filteredData
 * @param columnFilters - string array with columns that can be filtered
 * @returns the suppliers table
 */

const TableManageSuppliers: FC<ITableManageSuppliers.IProps> = ({
  dashboard,
  searchText,
  loading,
  dataManageSuppliers,
  filteredData,
  columnFilters,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const { page } = useAppSelector((state) => state.suppliers);

  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage] = useState<string>(
    'Business units cannot be deactivated if there’s an active contract connected to them.'
  );
  const [filters, setFilters] = useState<ITableManageSuppliers.Filter>({
    status: [],
    expiration: [],
    contactEmail: [],
    contactName: [],
  });

  const onChange: TableProps<any>['onChange'] = (
    pagination: any,
    filters: any
  ) => {
    dispatch(setPage(pagination.current as number));
    const field = Object.keys(filters)[1];
    if (field) {
      const filterLength = filters[field]?.length;
      if (filterLength && filterLength > 0) {
        setFilters((prev: any) => {
          return {
            status: field === 'supplierStatus' ? filters.status : prev.status,
            expiration:
              field === 'agreementExpiryDate'
                ? filters.expiration
                : prev.expiration,
            contactEmail:
              field === 'contactEmail'
                ? filters.contactEmail
                : prev.contactEmail,
            contactName:
              field === 'contactName' ? filters.contactName : prev.contactName,
          };
        });
      } else {
        setFilters((prev: any) => {
          return {
            status: field === 'supplierStatus' ? [] : prev.status,
            expiration: field === 'agreementExpiryDate' ? [] : prev.expiration,
            contactEmail: field === 'contactEmail' ? [] : prev.contactEmail,
            contactName: field === 'contactName' ? [] : prev.contactName,
          };
        });
      }
    }
  };

  const columns: ColumnsType<ITableManageSuppliers.DataRecord> = [
    {
      title: () => (
        <span className={styles.headerTable}>
          Supplier company <br /> name
        </span>
      ),
      dataIndex: 'supplierCompanyName',
      className: styles.columnTable,
      sorter: (a, b, sortOrder) =>
        sorterTable(a, b, 'supplierCompanyName', sortOrder),
    },
    {
      title: () => <span className={styles.headerTable}>Contact name</span>,
      dataIndex: 'contactName',
      className: styles.columnTable,
      sorter: (a, b, sortOrder) => sorterTable(a, b, 'contactName', sortOrder),
      filters: columnFilters.contactName!.map((val: any) => ({
        text: val === '' ? blankObject.text : val,
        value: val,
      })),
      filterIcon: () => (
        <Filter
          height={16}
          width={16}
          fill={filters.contactName?.length > 0 ? '#96bc33' : '#BFBFBF'}
        />
      ),
      onFilter: (value: any, record) => record.contactName === value,
    },
    {
      title: () => <span className={styles.headerTable}>Contact email</span>,
      dataIndex: 'contactEmail',
      className: styles.columnTable,
      sorter: (a, b, sortOrder) => sorterTable(a, b, 'contactEmail', sortOrder),
      filters: columnFilters.contactEmail!.map((val: any) => ({
        text: val,
        value: val,
      })),
      filterIcon: () => (
        <Filter
          height={16}
          width={16}
          fill={filters.contactEmail?.length > 0 ? '#96bc33' : '#BFBFBF'}
        />
      ),
      onFilter: (value: any, record) =>
        record.contactEmail.indexOf(value) === 0,
    },
    {
      title: () => (
        <span className={styles.headerTable}>
          Contract expiration <br /> date
        </span>
      ),
      dataIndex: 'agreementExpiryDate',
      className: styles.columnTable,
      sorter: (a, b, sortOrder) =>
        sorterTable(a, b, 'agreementExpiryDate', sortOrder),
      filters: columnFilters.expiration!.map((val: any) => ({
        text: val === '' ? blankObject.text : val,
        value: val,
      })),
      filterIcon: () => (
        <Filter
          height={16}
          width={16}
          fill={filters.expiration?.length > 0 ? '#96bc33' : '#BFBFBF'}
        />
      ),
      onFilter: (value: any, record) => record.agreementExpiryDate === value,
    },
    {
      title: () => <span className={styles.headerTable}>Supplier status</span>,
      dataIndex: 'supplierStatus',
      className: `${styles.columnTable} ${styles.supplier_status}`,
      sorter: (a, b, sortOrder) =>
        sorterTable(a, b, 'supplierStatus', sortOrder),
      filters: columnFilters.status!.map((val: any) => ({
        text: val ?? blankObject.text,
        value: val,
      })),
      filterIcon: () => (
        <Filter
          height={16}
          width={16}
          fill={filters.status?.length > 0 ? '#96bc33' : '#BFBFBF'}
        />
      ),
      onFilter: (value: any, record) => record.supplierStatus === value,
    },
  ];

  return (
    <>
      <TableComponent
        dashboard={dashboard}
        page={page}
        loading={loading}
        dataTable={searchText ? filteredData : dataManageSuppliers}
        pageSize={DEFAULT_PAGE_SIZE}
        columns={columns}
        onChange={onChange}
        rowsSkeleton={8}
        columnsSkeleton={7}
        padding="32px 33px"
        errorMessage={errorMessage}
        showError={showError}
        setShowError={setShowError}
        tableRef={ref}
        expandable={{
          expandedRowRender: (record: ITableManageSuppliers.DataRecord) => (
            <ExpandedRow dataExpanded={record} />
          ),
          columnWidth: '1px',
          expandIcon: ({
            expanded,
            onExpand,
            record,
          }: {
            expanded: boolean;
            onExpand: any;
            record: ITableManageSuppliers.DataRecord;
          }) => {
            if (record.key === null) {
              return null;
            }

            return expanded ? (
              <div
                className={styles.contractedRowIcon}
                onClick={(e) => onExpand(record, e)}
              ></div>
            ) : (
              <div
                className={styles.expandedRowIcon}
                onClick={(e) => onExpand(record, e)}
              ></div>
            );
          },
          expandedRowClassName: () => styles.childrenExpanded!,
          rowExpandable: (record: ITableManageSuppliers.DataRecord) =>
            record.key !== null,
        }}
      />
    </>
  );
};

export default TableManageSuppliers;
