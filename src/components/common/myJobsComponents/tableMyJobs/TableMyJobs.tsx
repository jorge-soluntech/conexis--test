import type { TableRowSelection } from 'antd/es/table/interface';
import type { FC } from 'react';
import React, { useEffect, useState } from 'react';

import { STATUS } from '@/consts/myJobs';

import TableComponent from '../../tableComponent/Table';
import useColumnsTable from '../columnsTable/ColumnsTable';
import useAdditionalInformation from '../detailsContentTable/DetailContentTable';
import type { ITableMyJobs } from './ITableMyJobs';

/**
 * returns the my jobs table
 *
 * @param props.search - string with search criteria
 * @param props.loading - boolean indicating whether the data request is being made for the table
 * @param props.dataTable - object with the table data
 * @param props.filteredData - object with the table data filtered based on the searchText parameter
 * @param props.setTemplateJobs - set The templates id jobs in a array
 * @returns the my jobs table
 */

const TableMyJobs: FC<ITableMyJobs.IProps> = ({
  search,
  loading,
  dataTable,
  filteredData,
  setTemplateJobs,
}) => {
  const [page, setPage] = useState<number>(1);
  const { expandableOptions } = useAdditionalInformation();
  const { columns, onChange } = useColumnsTable(dataTable, setPage);

  useEffect(() => {
    setPage(1);
  }, [dataTable, filteredData]);

  const rowSelectionOptions: TableRowSelection<any> = {
    type: 'checkbox',
    hideSelectAll: true,
    getCheckboxProps: (record: ITableMyJobs.DataTable) => {
      return {
        style: {
          display: record.status === STATUS.template ? 'flex' : 'none',
        },
      };
    },
    onChange: (_selectedRowKeys, selectedRows) => {
      const templatesSelected: ITableMyJobs.DataTable[] = selectedRows;
      setTemplateJobs(templatesSelected.map((item) => item.key));
    },
  };

  return (
    <TableComponent
      page={page}
      loading={loading}
      columns={columns}
      onChange={onChange}
      padding={'32px 24px'}
      rowsSkeleton={8}
      columnsSkeleton={5}
      showSizeChanger={true}
      dataTable={search ? filteredData : dataTable}
      expandable={expandableOptions}
      rowSelection={rowSelectionOptions}
    />
  );
};

export default TableMyJobs;
