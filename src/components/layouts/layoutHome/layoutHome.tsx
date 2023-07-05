import { Col, Layout, Row } from 'antd';
import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';
import type { FC, ReactNode } from 'react';
import { useContext, useEffect } from 'react';

import { AuthContext } from '@/application/authContext';
import { permissionsByRole } from '@/application/roleSlice/roleSlice';
import Navbar from '@/components/common/navbar/Navbar';
import Sidebar from '@/components/common/sidebar/Sidebar';
import { Main } from '@/components/common/templates/Main';
import { useAppDispatch } from '@/components/hooks/storeHooks';
import useItemsSider from '@/components/hooks/useItemsSider';

import { Meta } from '../Meta';

type Props = {
  children: ReactNode;
};

const LayoutHome: FC<Props> = ({ children }) => {
  const router = useRouter();

  const { user } = useContext(AuthContext);

  const { mainList, otherItemsList } = useItemsSider();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user?.role) {
      dispatch(permissionsByRole(user!.role));
    }
  }, [user?.role]);

  return (
    <Main
      meta={
        <Meta
          title={'Conexis | Home'}
          description={'Home page of conexis app'}
        />
      }
    >
      <Layout style={{ minHeight: '100vh' }}>
        {!router.asPath.includes('auth') && user && (
          <Sidebar mainList={mainList} otherItemsList={otherItemsList} />
        )}
        <Layout className="home-layout">
          {!router.asPath.includes('auth') && user && (
            <>
              <Row>
                <Col xs={24} style={{ minHeight: 80 }}>
                  <Navbar />
                </Col>
              </Row>
              <NextNProgress
                color="#96bc33"
                height={4}
                options={{ showSpinner: false }}
              />
            </>
          )}
          {children}
        </Layout>
      </Layout>
    </Main>
  );
};

export default LayoutHome;
