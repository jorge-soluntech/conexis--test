import { Button, Card } from 'antd';
import router from 'next/router';
import type { FC } from 'react';

import type { ISuccessComponent } from './ISuccessComponent';
import styles from './SuccessComponent.module.scss';

const gridStyle: React.CSSProperties = {
  width: '100%',
  textAlign: 'center',
  alignContent: 'center',
  boxShadow: 'none',
  padding: '10px',
};

/**
 * SuccessComponent is a component that renders a success message with a button that navigates to a specific route.
 * @param title - The title to be displayed in the success message.
 * @param textButton - The text to be displayed in the button.
 * @param route - The route to navigate to when the button is clicked.
 * @returns A React component that renders a success message with a button.
 */
const SuccessComponent: FC<ISuccessComponent.IProps> = ({
  title,
  subtitle,
  textButton,
  route,
}) => (
  <Card className={styles.card}>
    <Card.Grid hoverable={false} style={gridStyle}>
      <div className={styles.alert_success}>sucess</div>
    </Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>
      <span className={styles.text}>{title}</span>
    </Card.Grid>
    {subtitle && (
      <Card.Grid hoverable={false} style={gridStyle}>
        <p className={styles.sub_text}>{subtitle}</p>
      </Card.Grid>
    )}
    <Card.Grid hoverable={false} style={gridStyle}>
      <Button
        type="default"
        size="large"
        htmlType="submit"
        className={styles.button}
        onClick={() => {
          router.push(route);
        }}
      >
        {textButton}
      </Button>
    </Card.Grid>
  </Card>
);

export default SuccessComponent;
