import { Button, Card } from 'antd';
import { useRouter } from 'next/router';

import styles from '../EditBusinessUnit.module.scss';

const SuccessfulUpdate = () => {
  const router = useRouter();

  const gridStyle: React.CSSProperties = {
    width: '100%',
    textAlign: 'center',
    alignContent: 'center',
    boxShadow: 'none',
    padding: '10px',
  };

  return (
    <Card className={styles.form_create}>
      <Card.Grid hoverable={false} style={gridStyle}>
        <div style={{ marginTop: '55px' }} className={`${styles.alertSuccess}`}>
          sucess
        </div>
      </Card.Grid>
      <Card.Grid hoverable={false} style={gridStyle}>
        <span className={styles.text}>
          Your business unit has been
          <br /> successfully update.
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
          onClick={() => {
            router.push('/home/business-units', undefined, {
              shallow: true,
            });
          }}
        >
          Go back to business units
        </Button>
        <div style={{ height: '50px' }} />
      </Card.Grid>
    </Card>
  );
};

export default SuccessfulUpdate;
