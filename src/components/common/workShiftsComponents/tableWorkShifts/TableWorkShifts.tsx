import type { TableProps } from 'antd';
import type { PaginationProps } from 'antd/lib/pagination';
import type { FC } from 'react';
import React, { useEffect, useRef, useState } from 'react';

import { setErrorWorkShifts } from '@/application/workShiftsSlice/workShiftsSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import scrollToRef from '@/utils/scrollToRef';

import TableComponent from '../../tableComponent/Table';
import useColumnsWorkShifts from '../columnsTable/columnsTable';
import type { ITableWorkShifts } from './ITableWorkShifts';

/**
 * returns the work shifts table
 *
 * @param props.loading - boolean indicating whether the data request is being made for the table
 * @param props.dataUser - object with the table data
 * @returns the work shifts table
 */

const TableWorkShifts: FC<ITableWorkShifts.IProps> = ({
  loading,
  dataUser,
}) => {
  const dispatch = useAppDispatch();
  const tableRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState<number>(1);
  const { columnsTable } = useColumnsWorkShifts();
  const { errorWorkShifts, showErrorWorkShifts } = useAppSelector(
    (state) => state.workShifts
  );

  useEffect(() => {
    /** If there is an error, scroll top is done so that it is visible to the user */
    if (showErrorWorkShifts) {
      scrollToRef(tableRef);
    }
  }, [showErrorWorkShifts]);

  const onChange: TableProps<string | boolean>['onChange'] = (
    pagination: PaginationProps
  ) => {
    setPage(pagination.current as number);
  };

  return (
    <TableComponent
      page={page}
      loading={loading}
      padding={'8px 24px'}
      dataTable={dataUser}
      columns={columnsTable}
      onChange={onChange}
      rowsSkeleton={8}
      columnsSkeleton={5}
      widthError={'100%'}
      tableRef={tableRef}
      errorMessage={errorWorkShifts}
      showError={showErrorWorkShifts}
      setShowError={(value: boolean) => dispatch(setErrorWorkShifts(value))}
    />
  );
};

export default TableWorkShifts;
