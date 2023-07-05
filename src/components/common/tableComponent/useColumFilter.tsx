// import type { ColumnsType } from 'antd/es/table';
import Image from 'next/image';
import router from 'next/router';
import { useContext } from 'react';

import { AuthContext } from '@/application/authContext';
import type { Dashboards } from '@/consts/permissions';
import { PERMISSIONS } from '@/consts/permissions';

import styles from './Table.module.scss';

type TuseColumnsFilter = {
  dashboard: Dashboards | undefined;
  columns: any[];
};
export const useColumnsFilter = ({ dashboard, columns }: TuseColumnsFilter) => {
  const { user } = useContext(AuthContext);
  const newColums = [...columns];
  if (user && dashboard && PERMISSIONS[dashboard].edit.includes(user.role)) {
    newColums.push({
      title: () => <span className={styles.header_Table}>Actions</span>,
      dataIndex: 'actions',
      className: styles.columnTable,
      render: (_value: any, record: any) => {
        return (
          <span
            onClick={() => {
              router.push(`/home/${dashboard}/edit/${record.key}`);
            }}
            className={styles.wrapperLinkActions}
          >
            <Image
              alt="edit"
              width={16}
              height={16}
              src={'/assets/icons/edit.svg'}
            />
          </span>
        );
      },
    });
  }
  return newColums;
};
