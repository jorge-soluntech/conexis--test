import type { TableProps } from 'antd';
import { Switch } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import React, { useRef, useState } from 'react';

import { GLCodesServices } from '@/infrastructure/services/GLCodesServices';
import scrollToRef from '@/utils/scrollToRef';
import sorterTable from '@/utils/sorterTable';

import TableComponent from '../../tableComponent/Table';
import type { ITableGLCodes } from './ITableGLCodes';
import styles from './TableGLCodes.module.scss';

const DEFAULT_PAGE_SIZE = 25;

/**
 * returns the cost center table
 *
 * @param {string} searchText - string or boolean that indicates if there is a search
 * @param {boolean} loading - boolean indicating whether the data request is being made for the table
 * @param {Object} dataGLCodes - object with the table data
 * @param {Function} setDataGLCodes - function that modifies dataGLCodes
 * @param {Object} filteredData - object with the table data filtered based on the searchText parameter
 * @param {Function} setFilteredData - function that modifies filteredData
 * @returns the cost center table
 */

const TableGLCodes: FC<ITableGLCodes.IProps> = ({
  searchText,
  loading,
  dataGLCodes,
  setDataGLCodes,
  filteredData,
  setFilteredData,
}) => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const glCodesServices = new GLCodesServices(router);

  const [page, setPage] = useState<number>(1);
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage] = useState<string>(
    'GL codes cannot be deactivated if there’s an active contract connected to them.'
  );

  const updateStatus = (id: string) => {
    setDataGLCodes((prevData: any) =>
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
    await glCodesServices.toggleGLCode(id).then((response: any) => {
      if (response.statusCode === 200) updateStatus(id);
      if (response.statusCode === 400) {
        setShowError(true);
        scrollToRef(ref);
      }
    });
  };

  const onChange: TableProps<any>['onChange'] = (pagination: any) => {
    setPage(pagination.current as number);
  };

  const columns: ColumnsType<ITableGLCodes.DataGLCode> = [
    {
      title: () => <span className={styles.headerTable}>GL code</span>,
      dataIndex: 'glCode',
      className: styles.columnTable,
      sorter: (a, b, sortOrder) => sorterTable(a, b, 'glCode', sortOrder),
    },
    {
      title: () => (
        <span className={styles.headerTable}>GL code description</span>
      ),
      dataIndex: 'description',
      className: styles.columnTable,
      sorter: (a, b, sortOrder) => sorterTable(a, b, 'description', sortOrder),
    },
    {
      title: () => <span className={styles.headerTable}>Status</span>,
      dataIndex: 'isActive',
      filterMultiple: false,
      className: styles.columnTable,
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
      dataTable={searchText ? filteredData : dataGLCodes}
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

export default TableGLCodes;
