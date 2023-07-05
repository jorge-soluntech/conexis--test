import Image from 'next/image';
import type { FC } from 'react';

import styles from './cardMetrics.module.scss';
import type { ICardMetrics } from './ICardMetrics';

/**
 * Returns the card metrics
 *
 * @param title - The string of title
 * @param value - The number of value
 * @param onClick - The passed function of view details
 * @returns The card metrics
 */

const CardMetrics: FC<ICardMetrics.IProps> = ({ title, value, onClick }) => {
  return (
    <div className={styles.container_metrics_card}>
      <div className={styles.container_metrics_card_check}>
        <Image src={'/assets/icons/check_card.svg'} layout="fill" alt="check" />
      </div>
      <p>{title}</p>
      <h2>{value}</h2>
      <div
        className={styles.container_metrics_card_details}
        onClick={() => onClick()}
      >
        View details{' '}
        <div className={styles.icon}>
          <Image
            src={'/assets/icons/arrow_right.svg'}
            layout="fill"
            alt="check"
          />
        </div>
      </div>
    </div>
  );
};

export default CardMetrics;
