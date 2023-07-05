/* eslint-disable no-plusplus */
import { Skeleton } from 'antd';
import type { FC } from 'react';
import React from 'react';

import type { ISkeletonTable } from './ISkeletonTable';
import styles from './SkeletonTable.module.scss';
/**
 * Returns a loader skeleton for tables
 *
 * @param rows - number of rows in the table
 * @param columns - number of columns in the table
 * @param columns - number of columns in the table
 * @param loading - boolean to display the skeleton loader
 * @param children - jsx element to render the table once the upload is done
 * @returns Returns a loader skeleton for tables
 */

const SkeletonTable: FC<ISkeletonTable.IProps> = ({
  rows,
  columns,
  loading,
  children,
}) => {
  const [rowsTable, setRows] = React.useState<Array<number>>([]);
  const [rowsColumns, setColumns] = React.useState<Array<number>>([]);

  React.useEffect(() => {
    const arrayRowsTable: Array<number> = [];
    const arrayColumnsTable: Array<number> = [];
    for (let i = 0; i < rows; i++) {
      arrayRowsTable.push(Math.floor(Math.random() * 9));
    }
    for (let i = 0; i < columns; i++) {
      arrayColumnsTable.push(Math.floor(Math.random() * 9));
    }
    setRows(arrayRowsTable);
    setColumns(arrayColumnsTable);
  }, []);

  return (
    <>
      {loading ? (
        <div className={styles.table}>
          {rowsTable.map((_row, indexRow) => (
            <div key={indexRow} className={styles.table__row}>
              {rowsColumns.map((_column, indexColumn) => (
                <div key={indexColumn} className={styles.table__cell}>
                  <Skeleton
                    active
                    title={false}
                    loading={loading}
                    paragraph={{ rows: 1, width: '100%' }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default SkeletonTable;
