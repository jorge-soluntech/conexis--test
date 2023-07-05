import { Switch } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import router from 'next/router';

import { toggleStatusWorkShift } from '@/application/workShiftsSlice/workShiftsSlice';
import { useAppDispatch } from '@/components/hooks/storeHooks';
import { ACTIVE_COLOR, INACTIVE_COLOR } from '@/consts/colors';
import locales from '@/locales/en/en.json';
import sorterTable from '@/utils/sorterTable';

import type { ITableWorkShifts } from '../tableWorkShifts/ITableWorkShifts';
import styles from './columnsTable.module.scss';

const useColumnsWorkShifts = () => {
  const activeValue = 'Active';
  const inactiveValue = 'Inactive';
  const dispatch = useAppDispatch();

  const {
    workShifts: { table },
  } = locales;

  const columnsTable: ColumnsType<ITableWorkShifts.IData> = [
    {
      title: () => <span className={styles.header_table}>{table.name}</span>,
      dataIndex: 'workShiftDescription',
      className: styles.column_table,
      sorter: (nameA, nameB, sortOrder) =>
        sorterTable(nameA, nameB, 'workShiftDescription', sortOrder),
      render: (value, { status }) => (
        <span style={{ color: status ? ACTIVE_COLOR : INACTIVE_COLOR }}>
          {value}
        </span>
      ),
    },
    {
      title: () => (
        <span className={styles.header_table}>{table.shiftStartTime}</span>
      ),
      dataIndex: 'startTime',
      className: styles.column_table,
      sorter: (a, b) => a.startTime.localeCompare(b.startTime),
      render: (value, { status }) => (
        <span style={{ color: status ? ACTIVE_COLOR : INACTIVE_COLOR }}>
          {value}
        </span>
      ),
    },
    {
      title: () => (
        <span className={styles.header_table}>{table.shiftEndTime}</span>
      ),
      dataIndex: 'endTime',
      className: styles.column_table,
      sorter: (a, b) => a.endTime.localeCompare(b.endTime),
      render: (value, { status }) => (
        <span style={{ color: status ? ACTIVE_COLOR : INACTIVE_COLOR }}>
          {value}
        </span>
      ),
    },
    {
      title: () => (
        <span className={styles.header_table}>{table.workDays}</span>
      ),
      dataIndex: 'workDays',
      className: styles.column_table,
      sorter: (a, b, sortOrder) => sorterTable(a, b, 'workDays', sortOrder),
      render: (value, { status }) => (
        <span style={{ color: status ? ACTIVE_COLOR : INACTIVE_COLOR }}>
          {value}
        </span>
      ),
    },
    {
      title: () => <span className={styles.header_table}>{table.status}</span>,
      dataIndex: 'status',
      filterMultiple: false,
      className: styles.column_table,
      sorter: (a, b) => {
        const valueA = a.status ? 1 : 0;
        const valueB = b.status ? 1 : 0;
        return valueB - valueA;
      },
      render: (status, { key }) => {
        return (
          <div className={styles.wrapper_switch}>
            <Switch
              size="small"
              checked={status}
              onChange={(_e) =>
                dispatch(
                  toggleStatusWorkShift({
                    router,
                    id: key,
                    status: !status,
                  })
                )
              }
            />
            <span
              className={styles.user_status}
              style={{ color: status ? ACTIVE_COLOR : INACTIVE_COLOR }}
            >
              {status ? activeValue : inactiveValue}
            </span>
          </div>
        );
      },
    },
  ];

  return {
    columnsTable,
  };
};

export default useColumnsWorkShifts;
