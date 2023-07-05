import type { TableProps } from 'antd';
import { Switch } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import React, { useEffect, useRef, useState } from 'react';

import Filter from '@/assets/filter';
import { BusinessUnitServices } from '@/infrastructure/services/BusinessUnitsServices';
import locales from '@/locales/en/en.json';
import scrollToRef from '@/utils/scrollToRef';
import sorterTable from '@/utils/sorterTable';

import TableComponent from '../../tableComponent/Table';
import type { ITableBusinessUnits } from './ITableBusinessUnits';
import styles from './TableBusinessUnits.module.scss';

const DEFAULT_PAGE_SIZE = 20;

/**
 * returns the user table
 *
 * @param searchText - string or boolean that indicates if there is a search
 * @param loading - boolean indicating whether the data request is being made for the table
 * @param dataUser - object with the table data
 * @param setDataUser - function that modifies dataUser
 * @param filteredData - object with the table data filtered based on the searchText parameter
 * @param setFilteredData - function that modifies filteredData
 * @param BuOwnerFilters - string array with business owners that can be filtered
 * @returns the user table
 */

const TableBusinessUnits: FC<ITableBusinessUnits.IProps> = ({
  searchText,
  loading,
  dataUser,
  setDataUser,
  filteredData,
  setFilteredData,
  BuOwnerFilters,
}) => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const businessUnitServices = new BusinessUnitServices(router);

  const { businessUnits } = locales;

  const [page, setPage] = useState<number>(1);
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage] = useState<string>(businessUnits.table.errors.status);
  const [filters, setFilters] = useState<ITableBusinessUnits.Filter>({
    buOwners: [],
    status: [],
  });

  useEffect(() => {
    setPage(1);
  }, [dataUser, filteredData]);

  const statusFilters = [
    { text: 'Active', value: true },
    { text: 'Inactive', value: false },
  ];

  const updateStatus = (key: string) => {
    setDataUser((prevData: any) =>
      prevData.map((item: any) => {
        if (item.key === key) {
          return {
            ...item,
            status: !item.status,
          };
        }
        return item;
      })
    );
    setFilteredData((prevData: any) =>
      prevData.map((item: any) => {
        if (item.key === key) {
          return {
            ...item,
            status: !item.status,
          };
        }
        return item;
      })
    );
  };

  const handleChange = async (id: string): Promise<void> => {
    await businessUnitServices.toggleBusinessUnit(id).then((response: any) => {
      if (response.statusCode === 200) updateStatus(id);
      if (response.statusCode === 400) {
        setShowError(true);
        scrollToRef(ref);
      }
    });
  };

  const onChange: TableProps<any>['onChange'] = (
    pagination: any,
    filters: any
  ) => {
    const field = Object.keys(filters)[1];
    if (field) {
      const filterLength = filters[field]?.length;
      if (filterLength && filterLength > 0) {
        setFilters((prev: any) => {
          return {
            buOwners: field === 'buOwner' ? filters.buOwner : prev.buOwners,
            status: field === 'status' ? filters.status : prev.status,
          };
        });
      } else {
        setFilters((prev: any) => {
          return {
            buOwners: field === 'buOwner' ? [] : prev.buOwners,
            status: field === 'status' ? [] : prev.status,
          };
        });
      }
    }
    setPage(pagination.current as number);
  };

  const columns: ColumnsType<ITableBusinessUnits.DataBusinessUnits> = [
    {
      title: () => (
        <span className={styles.headerTable}>{businessUnits.table.id}</span>
      ),
      dataIndex: 'idNumber',
      className: styles.columnTable,
      sorter: (idNumberA, idNumberB, sortOrder) =>
        sorterTable(idNumberA, idNumberB, 'idNumber', sortOrder),
    },
    {
      title: () => (
        <span className={styles.headerTable}>{businessUnits.table.number}</span>
      ),
      dataIndex: 'businessUnitNumber',
      className: styles.columnTable,
      sorter: (buNumberA, buNumberB) =>
        buNumberA.businessUnitNumber.localeCompare(
          buNumberB.businessUnitNumber
        ),
    },
    {
      title: () => (
        <span className={styles.headerTable}>{businessUnits.table.name}</span>
      ),
      dataIndex: 'location',
      className: styles.columnTable,
      sorter: (locationA, locationB, sortOrder) =>
        sorterTable(locationA, locationB, 'location', sortOrder),
    },
    {
      title: () => (
        <span className={styles.headerTable}>
          {businessUnits.table.buOwner}
        </span>
      ),
      dataIndex: 'buOwner',
      className: styles.columnTable,
      sorter: (buOwnerA, buOwnerB, sortOrder) =>
        sorterTable(buOwnerA, buOwnerB, 'buOwner', sortOrder),
      filters: BuOwnerFilters,
      filterIcon: () => (
        <Filter
          height={16}
          width={16}
          fill={filters.buOwners.length > 0 ? '#96bc33' : '#BFBFBF'}
        />
      ),
      onFilter: (value: any, record) => record.buOwner.indexOf(value) === 0,
    },
    {
      title: () => (
        <span className={styles.headerTable}>{businessUnits.table.status}</span>
      ),
      dataIndex: 'status',
      filterMultiple: false,
      className: styles.columnTable,
      filters: statusFilters,
      filterIcon: () => (
        <Filter
          height={16}
          width={16}
          fill={filters.status.length > 0 ? '#96bc33' : '#BFBFBF'}
        />
      ),
      onFilter: (value: any, record) => record.status === value,
      sorter: (a: any, b: any) => b.status - a.status,
      render: (status: boolean, record: any) => {
        return (
          <div style={{ minWidth: '104px' }}>
            <Switch
              style={{
                backgroundColor: status ? '#96BC33' : '#BFBFBF',
              }}
              size="small"
              checked={status}
              onChange={() => {
                handleChange(record.key);
                setShowError(false);
              }}
            />
            <span
              className={styles.userStatus}
              style={{ color: status ? '#303336' : '#888E95' }}
            >
              {status ? 'Active' : 'Inactive'}
            </span>
          </div>
        );
      },
    },
    {
      title: () => (
        <span className={styles.headerTable}>
          {businessUnits.table.actions}
        </span>
      ),
      dataIndex: 'actions',
      className: styles.columnTable,
      render: (_value, record: any) => {
        return (
          <span
            onClick={() => {
              router.push(`/home/business-units/edit/${record.key}`);
            }}
            className={styles.wrapperLinkActions}
          >
            <Image
              alt="edit"
              width={16}
              height={16}
              src={'/assets/icons/edit.svg'}
            />
          </span>
        );
      },
    },
  ];

  return (
    <TableComponent
      page={page}
      loading={loading}
      dataTable={searchText ? filteredData : dataUser}
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
    />
  );
};

export default TableBusinessUnits;
