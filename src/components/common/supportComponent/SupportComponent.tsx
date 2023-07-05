import { Card } from 'antd';
import type { FC } from 'react';

import type { ISupportComponent } from './ISupportComponent';
import styles from './supportComponent.module.scss';

/**
 * SuccessComponent is a component that renders a success message with a button that navigates to a specific route.
 * @param title - The title to be displayed in the success message.
 * @param paragraph - The text with de email support.
 * @returns A React component that renders a success message with exceptions.
 */
const SupportComponent: FC<ISupportComponent.IProps> = ({
  title,
  paragraph,
}) => (
  <Card className={styles.card}>
    <Card.Grid hoverable={false} className={styles.grid_style}>
      <div className={styles.alert_success} />
    </Card.Grid>
    <Card.Grid hoverable={false} className={styles.grid_style}>
      <span className={styles.text}>{title}</span>
      <div className={styles.paragraph}>{paragraph}</div>
    </Card.Grid>
  </Card>
);

export default SupportComponent;
