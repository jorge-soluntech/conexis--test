import type { TableProps } from 'antd';
import type { PaginationProps } from 'antd/lib/pagination';
import type { FC } from 'react';
import React, { useEffect, useRef } from 'react';

import {
  setErrorCandidates,
  setFilters,
  setPage,
} from '@/application/candidatesSlice/candidatesSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import scrollToRef from '@/utils/scrollToRef';

import TableComponent from '../../tableComponent/Table';
import useColumnsCandidates from '../columnsTable/columnsTable';
import type { ITableCandidates } from './ITableCandidates';

/**
 * returns the candidates table
 *
 * @param props.loading - boolean indicating whether the data request is being made for the table
 * @param props.dataUser - object with the table data
 * @param props.filteredData - filered data when the user use the search bar
 * @param props.searchText - boolean that indicate if search is used
 * @returns the candidates table
 */

const TableCandidates: FC<ITableCandidates.IProps> = ({
  dataUser,
  filteredData,
  loading,
  searchText,
}) => {
  const dispatch = useAppDispatch();
  const tableRef = useRef<HTMLDivElement>(null);
  const { columnsTable } = useColumnsCandidates();
  const { errorCandidates, showErrorCandidates, page, totalRecords } =
    useAppSelector((state) => state.candidates);

  useEffect(() => {
    /** If there is an error, scroll top is done so that it is visible to the user */
    if (showErrorCandidates) scrollToRef(tableRef);
  }, [showErrorCandidates]);

  const onChange: TableProps<string | boolean>['onChange'] = (
    pagination: PaginationProps,
    filters: Record<string, any>
  ) => {
    dispatch(setFilters(filters.workerStatus));
    dispatch(setPage(pagination.current as number));
  };

  return (
    <TableComponent
      page={page}
      total={totalRecords}
      loading={loading}
      padding={'8px 24px'}
      dataTable={searchText ? filteredData : dataUser}
      columns={columnsTable}
      onChange={onChange}
      rowsSkeleton={8}
      columnsSkeleton={5}
      widthError={'100%'}
      tableRef={tableRef}
      errorMessage={errorCandidates}
      showError={showErrorCandidates}
      setShowError={(value: boolean) => dispatch(setErrorCandidates(value))}
    />
  );
};

export default TableCandidates;
