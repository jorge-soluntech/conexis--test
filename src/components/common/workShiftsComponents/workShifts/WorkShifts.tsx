import { Button, Row, Typography } from 'antd';
import router from 'next/router';
import type { FC } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import { exportWorkShifts } from '@/application/workShiftsSlice/workShiftsSlice';
import ExportDropdown from '@/components/common/exportDropdownComponent/ExportDropdownComponent';
import WorkWeekDefinition from '@/components/common/workWeekDefinitionComponent/WorkWeekDefinitionComponent';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import { URL_CREATE_WORK_SHIFTS } from '@/consts/routes';
import locales from '@/locales/en/en.json';

import TableWorkShifts from '../tableWorkShifts/TableWorkShifts';
import type { IWorkShifts } from './IWorkShifts';
import styles from './WorkShifts.module.scss';

const WorkShifts: FC<IWorkShifts.IProps> = ({
  allWorkShifts,
  loading,
}: IWorkShifts.IProps) => {
  const { workShifts } = locales;
  const dispatch = useAppDispatch();
  const { currentUserRoleName } = useAppSelector((state) => state.dashboard);

  return (
    <>
      <div className={styles.work_shifts}>
        <Typography.Title className={styles.work_shifts__buyer}>
          {currentUserRoleName}
        </Typography.Title>
        <Typography.Title className={styles.work_shifts__title}>
          {workShifts.titleWorkShifts}
        </Typography.Title>
        <Row className={styles.top_bar}>
          <WorkWeekDefinition />
          <div className={styles.buttons}>
            <ExportDropdown
              exportData={(type) =>
                dispatch(
                  exportWorkShifts({
                    router,
                    type,
                  })
                )
              }
            />
            <Button
              size="large"
              type="primary"
              onClick={() => {
                router.push(URL_CREATE_WORK_SHIFTS, undefined, {
                  shallow: true,
                });
              }}
            >
              <AiOutlinePlus className={styles.buttons__add_icon} />
              {workShifts.addButton}
            </Button>
          </div>
        </Row>
        <TableWorkShifts loading={loading} dataUser={allWorkShifts} />
      </div>
    </>
  );
};

export default WorkShifts;
