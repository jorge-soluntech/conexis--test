import { Alert, Card, Table } from 'antd';
import Image from 'next/image';
import type { FC } from 'react';
import React, { useState } from 'react';

import SkeletonTable from '@/components/common/skeletonTable/SkeletonTable';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { MOBILE_BREAKPOINT } from '@/consts/breakpoints';

import type { ITableComponent } from './ITable';
import styles from './Table.module.scss';
import { useColumnsFilter } from './useColumFilter';

/**
 * TableComponent is a reusable Ant Design table component that renders a table with pagination and optional error alert.
 *
 * the reference in the table is used to scroll top when there is an error alert
 *
 * @param props.dashboard - The dashboard.
 * @param props.page - The current page number of the table.
 * @param props.loading - Whether the table is currently loading or not.
 * @param props.dataTable - The array of data to render in the table.
 * @param props.pageSize = 25 - The number of items to display per page in the table, default is 25.
 * @param props.columns - The array of columns to display in the table.
 * @param props.onChange - The function to call when the table is changed, such as when the page number or sort order is changed.
 * @param props.rowsSkeleton - The array of skeleton rows to display while loading the table.
 * @param props.columnsSkeleton - The array of skeleton columns to display while loading the table.
 * @param props.padding - The padding to apply to the table card body.
 * @param props.showError - Whether to display the error alert or not.
 * @param props.setShowError - The function to call to update the state of the showError boolean.
 * @param props.expandable - The expandable configuration for the table.
 * @param props.widthError - error container width, default is 95%.
 * @param props.errorMessage - The error message to display in the alert.
 * @param props.tableRef - A reference to the Ant Design table component.
 * @param props.showSizeChanger - show record resizer per page
 * @param props.rowSelection - show a checkbox to select the row
 *
 * @returns The JSX element representing the table component.
 */
const TableComponent: FC<ITableComponent.IProps> = ({
  dashboard,
  page,
  loading,
  dataTable,
  pageSize = 25,
  columns,
  onChange,
  rowsSkeleton,
  columnsSkeleton,
  padding = '32px 48px',
  showError = false,
  setShowError = () => null,
  widthError = '95%',
  errorMessage,
  expandable,
  tableRef,
  total,
  showSizeChanger = false,
  rowSelection = undefined,
}) => {
  const { width = 0 } = useWindowDimensions();
  const newColumns = useColumnsFilter({ dashboard, columns });
  const [pageSizeTable, setPageSizeTable] = useState<number>(pageSize);

  return (
    <Card ref={tableRef} className={styles.card} bodyStyle={{ padding }}>
      <Card.Grid hoverable={false} className={styles.grid}>
        {showError && (
          <Alert
            showIcon
            closable
            type="error"
            message={errorMessage}
            style={{
              width: widthError,
            }}
            className={`alert_red ${styles.alert}`}
            afterClose={() => setShowError(false)}
            icon={
              <Image
                src="/assets/icons/alert_error.svg"
                alt="logo_conexis"
                width={24}
                height={24}
              />
            }
          />
        )}
        <SkeletonTable
          loading={loading}
          rows={rowsSkeleton}
          columns={columnsSkeleton}
        >
          <Table
            rowSelection={rowSelection}
            columns={newColumns}
            onChange={onChange}
            className={styles.userTable}
            dataSource={dataTable}
            expandable={expandable}
            pagination={{
              size: 'small',
              current: page,
              showSizeChanger,
              style: {
                marginTop: '28px',
                marginBottom: '0px',
                left: width <= MOBILE_BREAKPOINT ? '0' : '',
                position: width <= MOBILE_BREAKPOINT ? 'sticky' : 'initial',
                width: width <= MOBILE_BREAKPOINT ? 'max-content' : '100%',
              },
              pageSize: pageSizeTable,
              defaultPageSize: pageSizeTable,
              onShowSizeChange: (_current, size) => {
                setPageSizeTable(size);
              },
              pageSizeOptions: ['10', '25', '50', '100', '500', '1000'],
              showTotal: (total): JSX.Element => (
                <span style={{ height: '32px' }}>
                  Page {page} from {Math.ceil(total / pageSizeTable)}
                </span>
              ),
              total,
            }}
          />
        </SkeletonTable>
      </Card.Grid>
    </Card>
  );
};

export default TableComponent;
