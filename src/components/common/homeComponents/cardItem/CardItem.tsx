import Image from 'next/image';
import type { FC } from 'react';

import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { TABLET_BREAKPOINT } from '@/consts/login_ui';

import styles from './cardItem.module.scss';
import type { ICardItem } from './ICardItem';

/**
 * Returns the card item
 *
 * @param quantity - The number of quantity
 * @param title - The string of title
 * @param color - The string of color
 * @param status - The boolean of status
 * @returns The card item requiring attention
 */

const CardItem: FC<ICardItem.IProps> = ({
  quantity,
  title,
  color,
  status,
  onHover,
  onClick,
  index,
  style,
}) => {
  const { width = 0 } = useWindowDimensions();
  return (
    <div className={styles.content}>
      <div
        className={styles.card}
        style={status === true ? { ...style, alignItems: 'flex-start' } : style}
        onMouseEnter={() => onHover(index)}
        onClick={() => (width <= TABLET_BREAKPOINT ? onClick() : null)}
        // onMouseLeave={() => setHoverCard(false)}
      >
        <div style={{ background: color }} className={styles.card_quantity}>
          {quantity}
        </div>
        <div className={styles.card_title}>
          {title}
          {width >= TABLET_BREAKPOINT && status && (
            <span
              onClick={() => (width >= TABLET_BREAKPOINT ? onClick() : null)}
            >
              View details{' '}
              <div className={styles.icon}>
                <Image
                  src={'/assets/icons/arrow_right.svg'}
                  layout="fill"
                  alt="check"
                />
              </div>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
