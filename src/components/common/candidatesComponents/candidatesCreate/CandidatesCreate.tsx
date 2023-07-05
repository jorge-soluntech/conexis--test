import { Col, Layout, Row, Typography } from 'antd';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import { resetValuesFormCandidates } from '@/application/candidatesSlice/candidatesSlice';
import { useAppDispatch } from '@/components/hooks/storeHooks';
import useRenderTitleLoggedAs from '@/components/hooks/useRenderTitleLoggedAs';
import { urls } from '@/consts';

import BackButton from '../../backButton/BackButton';
import ContentCandidate from '../contentCandidate/ContentCandidate';
import ModalWarningEmail from '../modalWarningEmail/ModalWarningEmail';
import styles from './candidatesCreate.module.scss';
import type { ICandidatesCreate } from './ICandidatesCreate';

const { Title } = Typography;

const { Content } = Layout;

/**
 * Returns the CandidatesCreate component
 *
 * @returns The CandidatesCreate component
 */

const CandidatesCreate: FC<ICandidatesCreate.IProps> = ({
  titleForm,
  titleBackButton,
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { renderTitleLoggedAs } = useRenderTitleLoggedAs();

  const handleBackButton = () => {
    dispatch(resetValuesFormCandidates());
    router.push(urls.URL_BACK_CREATE_CANDIDATE);
  };

  return (
    <>
      <ModalWarningEmail />
      <Content>
        <div className={styles.candidate_container}>
          <Row>
            <Col>
              <BackButton title={titleBackButton} onClick={handleBackButton} />
            </Col>
          </Row>

          <Title level={4} className={styles.candidate_container__buyer}>
            {renderTitleLoggedAs}
          </Title>
          <Title level={3} className={styles.candidate_container__title}>
            {titleForm}
          </Title>
          <div className={styles.form_container}>
            <ContentCandidate />
          </div>
        </div>
      </Content>
    </>
  );
};

export default CandidatesCreate;
