import { Col, Layout, Row, Typography } from 'antd';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import { useAppSelector } from '@/components/hooks/storeHooks';
import locales from '@/locales/en/en.json';

import BackButton from '../../backButton/BackButton';
import SuccessComponent from '../../successComponent/SuccessComponent';
import WorkWeekDefinition from '../../workWeekDefinitionComponent/WorkWeekDefinitionComponent';
import FormWorkShiftsCreate from '../formWorkShiftsCreate/FormWorkShiftsCreate';
import type { IWorkShiftsCreate } from './IWorkShiftsCreate';
import styles from './workShiftsCreate.module.scss';

const { Title } = Typography;

const { Content } = Layout;

const urlBackHome = '/home/work-shifts';

/**
 * Returns the WorkShiftsCreate component
 *
 * @returns The WorkShiftsCreate component
 */

const WorkShiftsCreate: FC<IWorkShiftsCreate.IProps> = ({
  titleForm,
  titleBackButton,
}) => {
  const router = useRouter();
  const { success } = router.query;

  const { currentUserRoleName } = useAppSelector((state) => state.dashboard);

  const { workShifts } = locales;

  return (
    <>
      <Content>
        <div className={`${styles.wshifts_container}`}>
          <Row>
            <Col>
              <BackButton
                title={titleBackButton}
                onClick={() => router.push(urlBackHome)}
              />
            </Col>
          </Row>

          <Title level={4} className={styles.wshifts_container__buyer}>
            {currentUserRoleName}
          </Title>
          <Title level={3} className={styles.wshifts_container__title}>
            {titleForm}
          </Title>
          {!success && <WorkWeekDefinition />}
          <div className={styles.form_container}>
            {success ? (
              <SuccessComponent
                title={workShifts.create.titleSuccess}
                textButton={workShifts.create.textButtonSuccess}
                route={urlBackHome}
              />
            ) : (
              <FormWorkShiftsCreate />
            )}
          </div>
        </div>
      </Content>
    </>
  );
};

export default WorkShiftsCreate;
