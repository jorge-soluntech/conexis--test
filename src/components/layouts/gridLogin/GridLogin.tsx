import { Col, Layout, Row } from 'antd';
import type { FC, ReactNode } from 'react';

import TextIntro from '@/components/common/loginComponents/textIntro/TextIntro';
import { Main } from '@/components/common/templates/Main';
import { Meta } from '@/components/layouts/Meta';

import styles from './gridLogin.module.scss';

const { Content } = Layout;

const GridLogin: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Main
      meta={
        <Meta
          title={'Conexis | Login'}
          description={'Login page of conexis app'}
        />
      }
    >
      <Layout>
        <Content>
          <Row className={styles.row_columns_auth}>
            <Col xs={24} lg={10} className={styles.container__intro}>
              <TextIntro />
            </Col>
            <Col xs={24} lg={14} className={styles.container__form}>
              {children}
            </Col>
          </Row>
        </Content>
      </Layout>
    </Main>
  );
};

export default GridLogin;
