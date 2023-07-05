import type { ColumnsType } from 'antd/es/table';
import Image from 'next/image';

import { showModal } from '@/application/candidatesSlice/candidatesSlice';
import Filter from '@/assets/filter';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import { icons, workers } from '@/consts';
import locales from '@/locales/en/en.json';
import sorterTable from '@/utils/sorterTable';

import type { ITableCandidates } from '../tableCandidates/ITableCandidates';
import styles from './columnsTable.module.scss';

const useColumnsCandidates = () => {
  const {
    candidates: { table },
  } = locales;

  const dispatch = useAppDispatch();

  const { filters } = useAppSelector((state) => state.candidates);

  const columnsTable: ColumnsType<ITableCandidates.IData> = [
    {
      title: () => <span className={styles.header_table}>{table.name}</span>,
      dataIndex: 'fullName',
      className: styles.column_table,
      sorter: (a, b) => a.fullName.localeCompare(b.fullName),
    },
    {
      title: () => <span className={styles.header_table}>{table.email}</span>,
      dataIndex: 'email',
      className: styles.column_table,
      sorter: (a, b, sortOrder) => sorterTable(a, b, 'email', sortOrder),
    },
    {
      title: () => (
        <span className={styles.header_table}>{table.workerStatus}</span>
      ),
      dataIndex: 'workerStatus',
      className: styles.column_table,
      filters: workers.FILTERS_WORKER_STATUS,
      onFilter: (value, record) => {
        return record.workerStatus.indexOf(value as string) === 0;
      },
      sorter: (a, b, sortOrder) => sorterTable(a, b, 'workerStatus', sortOrder),
      defaultFilteredValue: filters.status,
      filterIcon: () => (
        <Filter
          height={16}
          width={16}
          fill={filters.status.length > 0 ? '#96bc33' : '#BFBFBF'}
        />
      ),
    },
    {
      title: () => <span className={styles.header_table}>{table.actions}</span>,
      dataIndex: 'actions',
      className: styles.column_table,
      render: (_value, record: ITableCandidates.IData) => {
        return (
          <span
            onClick={() => dispatch(showModal(record))}
            className={styles.wrapperLinkActions}
          >
            <Image alt="edit" width={16} height={16} src={icons.EDIT_TABLE} />
          </span>
        );
      },
    },
  ];

  return {
    columnsTable,
  };
};

export default useColumnsCandidates;
