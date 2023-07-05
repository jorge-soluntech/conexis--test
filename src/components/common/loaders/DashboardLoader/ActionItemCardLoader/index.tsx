import { Skeleton } from 'antd';

import type { ActionItemCardLoaderProps } from '../../types';
import styles from './actionItemCardLoader.module.scss';

const ActionItemCardLoader = ({
  color,
  isLoading,
}: ActionItemCardLoaderProps) => {
  return (
    <div
      id="action_item_card_content"
      className={styles.action_item_card_content}
    >
      <div
        className={styles.action_item_card_loader}
        style={{ height: 75, alignItems: 'center' }}
      >
        <div
          style={{ background: color }}
          className={styles.action_item_card_loader_quantity}
        >
          {null}
        </div>
        <div className={styles.action_item_card_loader_title}>
          <Skeleton
            active
            loading={isLoading}
            title={{ width: 106, style: { margin: 0, height: 16 } }}
            paragraph={{ rows: 1, style: { marginTop: 8, height: 2 } }}
          />
        </div>
      </div>
    </div>
  );
};

export default ActionItemCardLoader;
