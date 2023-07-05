import { LeftOutlined } from '@ant-design/icons';
import { Button, Card, Typography } from 'antd';
import router from 'next/router';
import type { FC } from 'react';
import React from 'react';

/// import useWindowDimensions from '@/components/hooks/useWindowDimension';
import type { ISuccessfullComponent } from './ISuccessfullComponent';
import styles from './succesfullComponent.module.scss';

const { Title } = Typography;

const SuccessfullComponent: FC<ISuccessfullComponent.IProps> = ({
  titleForm,
}) => {
  // const { width = 0 } = useWindowDimensions();
  const gridStyle: React.CSSProperties = {
    width: '100%',
    textAlign: 'center',
    alignContent: 'center',
    boxShadow: 'none',
    padding: '10px',
  };
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
        <Title style={{ marginTop: '2rem', fontSize: 32 }} level={2}>
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
            {/* <CheckCircleTwoTone
              twoToneColor="#96BC33"
              style={{ fontSize: '40px', marginTop: '60px' }}
            /> */}
            <div
              style={{ marginTop: '55px' }}
              className={`${styles.alertSuccess}`}
            >
              sucess
            </div>
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <span className={styles.text}>
              Your form has been successfully
              <br /> submitted.
            </span>
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <Button
              style={{
                fontSize: 16, // width <= MOBILE_BREAKPOINT ? 700 : 400,
              }}
              type="default"
              size="large"
              htmlType="submit"
              onClick={() => {
                router.push('/home/users', undefined, {
                  shallow: true,
                });
              }}
            >
              Go back to users
            </Button>
            <div style={{ height: '50px' }} />
          </Card.Grid>
        </Card>
      </div>
    </>
  );
};

export default SuccessfullComponent;
