import type { TableProps } from 'antd';
import { Switch } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import React, { useEffect, useRef, useState } from 'react';

import Filter from '@/assets/filter';
import { CostCenterServices } from '@/infrastructure/services/CostCenterServices';
import scrollToRef from '@/utils/scrollToRef';
import sorterTable from '@/utils/sorterTable';

import TableComponent from '../../tableComponent/Table';
import type { ITableCostCenter } from './ITableCostCenter';
import styles from './TableCostCenter.module.scss';

const DEFAULT_PAGE_SIZE = 25;

/**
 * returns the cost center table
 *
 * @param {string} searchText - string or boolean that indicates if there is a search
 * @param {boolean} loading - boolean indicating whether the data request is being made for the table
 * @param {Object} dataUser - object with the table data
 * @param {Function} setDataUser - function that modifies dataUser
 * @param {Object} filteredData - object with the table data filtered based on the searchText parameter
 * @param {Function} setFilteredData - function that modifies filteredData
 * @returns the cost center table
 */

const TableCostCenter: FC<ITableCostCenter.IProps> = ({
  searchText,
  loading,
  dataCostCenter,
  setDataCostCenter,
  filteredData,
  setFilteredData,
}) => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const costCenterServices = new CostCenterServices(router);

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setPage(1);
  }, [dataCostCenter, filteredData]);

  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage] = useState<string>(
    'Cost centers cannot be deactivated if there’s an active contract connected to them.'
  );
  const [filters, setFilters] = useState<ITableCostCenter.Filter>({
    isActive: [],
  });

  const updateStatus = (id: string) => {
    setDataCostCenter((prevData: any) =>
      prevData.map((item: any) => {
        if (item.key === id) {
          return {
            ...item,
            isActive: !item.isActive,
          };
        }
        return item;
      })
    );
    setFilteredData((prevData: any) =>
      prevData.map((item: any) => {
        if (item.key === id) {
          return {
            ...item,
            isActive: !item.isActive,
          };
        }
        return item;
      })
    );
  };

  const handleChange = async (id: string): Promise<void> => {
    await costCenterServices
      .toggleCostCentersStatus(id)
      .then((response: any) => {
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
    const field = Object.keys(filters)[0];
    if (field) {
      const filterLength = filters[field]?.length;
      if (filterLength && filterLength > 0) {
        setFilters((prev: any) => {
          return {
            isActive: field === 'isActive' ? filters.isActive : prev.isActive,
          };
        });
      } else {
        setFilters((prev: any) => {
          return {
            isActive: field === 'isActive' ? [] : prev.isActive,
          };
        });
      }
    }
    setPage(pagination.current as number);
  };

  const columns: ColumnsType<ITableCostCenter.DataCostCenter> = [
    {
      title: () => (
        <span className={styles.headerTable}>Cost center number</span>
      ),
      dataIndex: 'costCenterNumber',
      className: styles.columnTable,
      sorter: (a, b, sortOrder) =>
        sorterTable(a, b, 'costCenterNumber', sortOrder),
    },
    {
      title: () => <span className={styles.headerTable}>Cost center name</span>,
      dataIndex: 'costCenterName',
      className: styles.columnTable,
      sorter: (a, b, sortOrder) =>
        sorterTable(a, b, 'costCenterName', sortOrder),
    },
    {
      title: () => <span className={styles.headerTable}>Status</span>,
      dataIndex: 'isActive',
      filterMultiple: false,
      className: styles.columnTable,
      filters: [
        {
          text: 'Active',
          value: true,
        },
        {
          text: 'Inactive',
          value: false,
        },
      ],
      filterIcon: () => (
        <Filter
          height={16}
          width={16}
          fill={filters.isActive.length > 0 ? '#96bc33' : '#BFBFBF'}
        />
      ),
      onFilter: (value: any, record) => record.isActive === value,
      sorter: (a: any, b: any) => b.isActive - a.isActive,
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
                setShowError(false);
                handleChange(record.key);
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
  ];

  return (
    <TableComponent
      page={page}
      loading={loading}
      dataTable={searchText ? filteredData : dataCostCenter}
      pageSize={DEFAULT_PAGE_SIZE}
      columns={columns}
      onChange={onChange}
      rowsSkeleton={8}
      columnsSkeleton={3}
      padding="24px 32px"
      errorMessage={errorMessage}
      showError={showError}
      setShowError={setShowError}
      tableRef={ref}
    />
  );
};

export default TableCostCenter;
