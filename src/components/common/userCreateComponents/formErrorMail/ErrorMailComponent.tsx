import { LeftOutlined } from '@ant-design/icons';
import { Button, Card, Typography } from 'antd';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useContext, useState } from 'react';

import { AuthContext } from '@/application/authContext';
import { UserServices } from '@/infrastructure/services/UserServices';

import styles from './errorMail.module.scss';
import type { IErrorMailComponent } from './IErrorMailComponent';

const { Title } = Typography;

const ErrorMailComponent: FC<IErrorMailComponent.IProps> = ({ titleForm }) => {
  const [available, setAvailable] = useState<boolean>(true);
  const [countReSend, setCountReSend] = useState(0);
  const router = useRouter();
  const urlParams = new URLSearchParams(window.location.search);
  const email: string = urlParams.get('email') || '';
  const gridStyle: React.CSSProperties = {
    width: '100%',
    textAlign: 'center',
    boxShadow: 'none',
    alignContent: 'center',
    padding: '10px',
  };

  const userServices = new UserServices(router);

  const { user } = useContext(AuthContext);

  return (
    <>
      <div className={`${styles.form_container}`}>
        <div
          style={{
            cursor: 'pointer',
            color: '#888E95',
            width: 'fit-content',
            fontSize: '16px',
          }}
          onClick={() => {
            router.push('/home/users', undefined, {
              shallow: true,
            });
          }}
        >
          <LeftOutlined />
          &nbsp; Users
        </div>
        <Title style={{ marginTop: '3rem', fontSize: 32 }} level={2}>
          {titleForm}
        </Title>
        <Card
          style={{
            marginTop: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
          }}
        >
          <Card.Grid hoverable={false} style={gridStyle}>
            <div
              style={{ marginTop: '60px' }}
              className={`${styles.alertError}`}
            >
              Error
            </div>
          </Card.Grid>
          {available ? (
            <>
              <Card.Grid hoverable={false} style={gridStyle}>
                <span className={styles.text}>
                  User has been created but the
                  <br /> email was not sent.
                </span>
              </Card.Grid>
              <Card.Grid hoverable={false} style={gridStyle}>
                <span className={styles.subText}>
                  Please retry sending the user activation email.
                </span>
              </Card.Grid>
              <Card.Grid hoverable={false} style={gridStyle}>
                <Button
                  style={{
                    fontSize: 16,
                  }}
                  type="default"
                  size="large"
                  htmlType="submit"
                  onClick={async () => {
                    await userServices
                      .resendEmail({
                        email,
                        tenant: user?.tenant ? Number(user.tenant) : 1,
                        messageType: 'ResendEmailVerification',
                      })
                      .then(() => {
                        router.push(
                          '/home/users/create/success-form',
                          undefined,
                          { shallow: true }
                        );
                      })
                      .catch(() => {
                        setCountReSend(countReSend + 1);
                        if (countReSend >= 2) setAvailable(false);
                      });
                  }}
                >
                  Send email
                </Button>
                <div style={{ height: '50px' }} />
              </Card.Grid>
            </>
          ) : (
            <>
              <Card.Grid hoverable={false} style={gridStyle}>
                <span className={styles.text}>
                  There have been 3 unsuccesful <br />
                  attempts at sending the user <br />
                  activation email.
                </span>
              </Card.Grid>
              <Card.Grid hoverable={false} style={gridStyle}>
                <span className={styles.subText}>
                  Please contact support at{' '}
                  <span style={{ color: '#DD7812' }}>
                    customerhelp@conexis.io
                  </span>
                </span>
                <div style={{ height: '50px' }} />
              </Card.Grid>
            </>
          )}
        </Card>
      </div>
    </>
  );
};

export default ErrorMailComponent;
