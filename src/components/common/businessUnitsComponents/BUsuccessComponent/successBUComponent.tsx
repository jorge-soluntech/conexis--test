import { Button, Card } from 'antd';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import { businessUnitsHomeUrl } from '@/consts/routes';
import locales from '@/locales/en/en.json';

import type { ISucessBUComponent } from './ISuccessBUComponent';
import styles from './successBUComponent.module.scss';

const gridStyle: React.CSSProperties = {
  width: '100%',
  textAlign: 'center',
  alignContent: 'center',
  boxShadow: 'none',
  padding: '10px',
};

/**
 * A component that is shown for sucessfull states in businessUnit form.
 * @param successMessage - The form intance antd form
 * @returns A component for successfull states in businessUnit form.
 */
const SucessComponent: FC<ISucessBUComponent.IProps> = ({ successMessage }) => {
  const router = useRouter();
  const { businessUnits } = locales;
  const { formsCommon } = locales;

  return (
    <Card className={styles.card}>
      <Card.Grid hoverable={false} style={gridStyle}>
        <div className={`${styles.alertSuccess}`}>{formsCommon.success}</div>
      </Card.Grid>
      <Card.Grid
        hoverable={false}
        style={gridStyle}
        className={` ${styles.text}`}
      >
        {successMessage}
      </Card.Grid>
      <Card.Grid hoverable={false} style={gridStyle}>
        <Button
          type="default"
          size="large"
          htmlType="submit"
          onClick={() => {
            router.push(businessUnitsHomeUrl, undefined, {
              shallow: true,
            });
          }}
        >
          {businessUnits.goBackHome}
        </Button>
      </Card.Grid>
    </Card>
  );
};

export default SucessComponent;
