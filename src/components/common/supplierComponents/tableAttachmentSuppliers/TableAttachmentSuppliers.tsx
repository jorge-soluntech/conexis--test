import type { ColumnsType } from 'antd/es/table';
import type { FC } from 'react';
import { useRef, useState } from 'react';

import sorterTable from '@/utils/sorterTable';

import TableComponent from '../../tableComponent/Table';
import type { ITableAttachmentSuppliers } from './ITableAttachmentSuppliers';
import styles from './tableAttachmentSuppliers.module.scss';

const DEFAULT_PAGE_SIZE = 20;

/**
 * returns the attachment table
 *
 * @param loading - boolean indicating whether the data request is being made for the table
 * @param dataUser - object with the table data
 * @returns the attachment table
 */

const TableAttachmentSuppliers: FC<ITableAttachmentSuppliers.IProps> = ({
  loading,
  dataUser,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [showError, setShowError] = useState<boolean>(false);
  const errorMessage = 'Something went wrong, try again.';

  const columns: ColumnsType<ITableAttachmentSuppliers.DataSuppliers> = [
    {
      title: () => <span className={styles.headerTable}>File</span>,
      dataIndex: 'file',
      className: styles.columnTable,
      sorter: (fileParameterA, fileParameterB, sortOrder) =>
        sorterTable(
          fileParameterA.file.props.children,
          fileParameterB.file.props.children,
          '1',
          sortOrder
        ),
    },
    {
      title: () => <span className={styles.headerTable}>Name</span>,
      dataIndex: 'name',
      className: styles.columnTable,
      sorter: (nameParameterA, nameParameterB, sortOrder) =>
        sorterTable(
          nameParameterA.name.props,
          nameParameterB.name.props,
          'children',
          sortOrder
        ),
    },
    {
      title: () => <span className={styles.headerTable}>Type of document</span>,
      dataIndex: 'type',
      className: styles.columnTable,
      sorter: (typeParameterA, typeParameterB, sortOrder) =>
        sorterTable(
          typeParameterA.type.props,
          typeParameterB.type.props,
          'children',
          sortOrder
        ),
    },
    {
      title: () => <span className={styles.headerTable}>Expiry date</span>,
      dataIndex: 'expiryDate',
      className: styles.columnTable,
      sorter: (expiryDateParameterA, expiryDateParameterB, sortOrder) =>
        sorterTable(
          expiryDateParameterA.expiryDate.props,
          expiryDateParameterB.expiryDate.props,
          'children',
          sortOrder
        ),
    },
  ];

  return (
    <>
      <TableComponent
        page={1}
        loading={loading}
        dataTable={dataUser}
        pageSize={DEFAULT_PAGE_SIZE}
        columns={columns}
        onChange={() => {}}
        rowsSkeleton={8}
        columnsSkeleton={7}
        padding="32px 33px"
        errorMessage={errorMessage}
        showError={showError}
        setShowError={setShowError}
        tableRef={ref}
      />
    </>
  );
};

export default TableAttachmentSuppliers;
