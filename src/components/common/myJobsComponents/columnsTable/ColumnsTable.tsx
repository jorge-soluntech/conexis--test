import { type TableProps, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { ColumnFilterItem } from 'antd/lib/table/interface';
import React, { useState } from 'react';

import Filter from '@/assets/filter';
import { FILTER_OFF, GREEN_50 } from '@/consts/colors';
import { JOB_STATUS_FILTER, POSITION_TYPE } from '@/consts/myJobs';
import locales from '@/locales/en/en.json';
import sorterTable from '@/utils/sorterTable';

import RowActionWrapper from '../../tableComponent/rowActionComponents/RowActionWrapper';
import Dots from '../dots/Dots';
import type { ITableMyJobs } from '../tableMyJobs/ITableMyJobs';
import styles from './ColumnsTable.module.scss';

const {
  myJobs: { table },
  consts: {
    emptyLabel,
    filters: { blankObject },
  },
} = locales;

const useColumnsTable = (
  dataTable: ITableMyJobs.DataTable[],
  setPage: Function
) => {
  const [plannedStartDateFilter, setPlannedStartDate] = useState<
    ColumnFilterItem[]
  >([]);
  const [plannedEndDateFilter, setPlannedEndDate] = useState<
    ColumnFilterItem[]
  >([]);
  const [businessUnitFilter, setBusinessUnitFilter] = useState<
    ColumnFilterItem[]
  >([]);
  const [filters, setFilters] = useState<ITableMyJobs.Filter>({
    typeOfPosition: [],
    status: [],
    plannedStartDate: [],
    plannedEndDate: [],
    businessUnit: [],
  });

  const handleBusinessUnitFilter = () => {
    setBusinessUnitFilter(
      Array.from(
        new Set(
          dataTable?.map((item: ITableMyJobs.DataTable) => item.businessUnit)
        )
      ).map((businessUnit: string) => ({
        text: businessUnit || blankObject.text,
        value: businessUnit,
      }))
    );
  };

  React.useEffect(() => {
    /** Filters are assigned depending on dataTable */
    setPlannedStartDate(
      Array.from(
        new Set(
          dataTable?.map(
            (item: ITableMyJobs.DataTable) => item.plannedStartDate
          )
        )
      ).map((plannedStartDate: string) => ({
        text: plannedStartDate,
        value: plannedStartDate,
      }))
    );

    setPlannedEndDate(
      Array.from(
        new Set(
          dataTable?.map((item: ITableMyJobs.DataTable) => item.plannedEndDate)
        )
      ).map((plannedEndDate: string) => ({
        text: plannedEndDate || blankObject.text,
        value: plannedEndDate,
      }))
    );

    handleBusinessUnitFilter();
  }, [dataTable]);

  const onChange: TableProps<any>['onChange'] = (
    pagination: any,
    filters: any
  ) => {
    setFilters(filters);
    setPage(pagination.current as number);
  };

  const FilterIcon = ({ fill }: { fill: string }) => {
    return <Filter width={16} height={16} fill={fill} />;
  };

  const columns: ColumnsType<ITableMyJobs.DataTable> = [
    Table.SELECTION_COLUMN,
    Table.EXPAND_COLUMN,
    {
      title: () => <span className={styles.header_table}>{table.JobId}</span>,
      dataIndex: 'jobId',
      className: styles.column_table,
      sorter: (a, b, sortOrder) => sorterTable(a, b, 'jobId', sortOrder),
    },
    {
      title: () => (
        <span className={styles.header_table}>{table.jobTitle}</span>
      ),
      dataIndex: 'jobTitle',
      className: styles.column_table,
      sorter: (a, b, sortOrder) => sorterTable(a, b, 'jobTitle', sortOrder),
    },
    {
      title: () => (
        <span className={styles.header_table}>{table.positionType}</span>
      ),
      dataIndex: 'typeOfPosition',
      className: styles.column_table,
      filters: POSITION_TYPE,
      sorter: (a, b, sortOrder) =>
        sorterTable(a, b, 'typeOfPosition', sortOrder),
      filterIcon: () => (
        <FilterIcon
          fill={filters.typeOfPosition?.length > 0 ? GREEN_50 : FILTER_OFF}
        />
      ),
      onFilter: (value, record) => record.typeOfPosition === value,
    },
    {
      title: () => <span className={styles.header_table}>{table.status}</span>,
      dataIndex: 'status',
      className: styles.column_table,
      filters: JOB_STATUS_FILTER,
      sorter: (a, b, sortOrder) => sorterTable(a, b, 'status', sortOrder),
      filterIcon: () => (
        <FilterIcon fill={filters.status?.length > 0 ? GREEN_50 : FILTER_OFF} />
      ),
      onFilter: (value, record) => record.status === value,
    },
    {
      title: () => (
        <span className={styles.header_table}>{table.plannedStartDate}</span>
      ),
      dataIndex: 'plannedStartDate',
      className: styles.column_table,
      filters: plannedStartDateFilter,
      sorter: (a, b, sortOrder) =>
        sorterTable(a, b, 'plannedStartDate', sortOrder),
      filterIcon: () => (
        <FilterIcon
          fill={filters.plannedStartDate?.length > 0 ? GREEN_50 : FILTER_OFF}
        />
      ),
      onFilter: (value, record) => record.plannedStartDate === value,
    },
    {
      title: () => (
        <span className={styles.header_table}>{table.plannedEndDate}</span>
      ),
      dataIndex: 'plannedEndDate',
      className: styles.column_table,
      filters: plannedEndDateFilter,
      sorter: (a, b, sortOrder) =>
        sorterTable(a, b, 'plannedEndDate', sortOrder),
      filterIcon: () => (
        <FilterIcon
          fill={filters.plannedEndDate?.length > 0 ? GREEN_50 : FILTER_OFF}
        />
      ),
      onFilter: (value, record) => record.plannedEndDate === value,
      render: (value) => <span>{value ?? emptyLabel}</span>,
    },
    {
      title: () => (
        <span className={styles.header_table}>{table.businessUnit}</span>
      ),
      dataIndex: 'businessUnit',
      className: styles.column_table,
      filters: businessUnitFilter,
      sorter: (a, b, sortOrder) => sorterTable(a, b, 'businessUnit', sortOrder),
      filterIcon: () => (
        <FilterIcon
          fill={filters.businessUnit?.length > 0 ? GREEN_50 : FILTER_OFF}
        />
      ),
      onFilter: (value, record) => record.businessUnit === value,
      render: (value) => <span>{value ?? emptyLabel}</span>,
    },
    {
      title: () => <span className={styles.header_table}>{table.actions}</span>,
      dataIndex: 'actions',
      className: styles.column_table,
      render: (_value, record) => (
        <RowActionWrapper>
          {({
            dropdownVisible,
            handleModalDispatch,
            handleDropdownVisibleChange,
          }) => {
            return (
              <Dots
                {...{
                  jobId: record.key,
                  status: record.status,
                  dropdownVisible,
                  handleModalDispatch,
                  handleDropdownVisibleChange,
                }}
              />
            );
          }}
        </RowActionWrapper>
      ),
    },
  ];

  return { onChange, columns };
};

export default useColumnsTable;
