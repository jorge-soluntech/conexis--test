import Image from 'next/image';
import type { FC } from 'react';

import styles from './cardTop.module.scss';
import type { ICardTop } from './ICardTop';

/**
 * Returns the card metrics
 *
 * @param title - The string of title
 * @param onClick - The passed function of view details
 * @returns The card metrics
 */

const CardTop: FC<ICardTop.IProps> = ({ title, onClick, list }) => {
  return (
    <div className={styles.container_top_card}>
      <p>{title}</p>
      <div className={styles.container_top_card_list}>
        {list.map((data, index) => (
          <div key={index} className={styles.container_top_card_list_item}>
            <div>{data.label}</div>
            <div>${data.value}</div>
          </div>
        ))}
      </div>
      <div className={styles.container_top_card_all} onClick={() => onClick()}>
        All other suppliers{' '}
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

export default CardTop;
