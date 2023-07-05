import { Skeleton } from 'antd';
import Image from 'next/image';

import type { BaseLoaderProps } from '../../types';
import styles from './MetricCardLoader.module.scss';

const MetricCardLoader = ({ isLoading = true }: BaseLoaderProps) => {
  return (
    <div
      id="container_metrics_card_loader"
      className={styles.container_metrics_card_loader}
    >
      <div className={styles.container_metrics_card_loader_check}>
        <Image src={'/assets/icons/check_card.svg'} layout="fill" alt="check" />
      </div>
      <Skeleton
        active
        loading={isLoading}
        title={{ width: 169, style: { margin: 0, height: 16 } }}
        paragraph={{ rows: 0, style: { margin: 0, height: 0 } }}
      />
    </div>
  );
};

export default MetricCardLoader;
