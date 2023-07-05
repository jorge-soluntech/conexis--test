import { Skeleton } from 'antd';
import { useMemo } from 'react';

import type { BaseLoaderProps } from '../../types';
import styles from './cardTopLoader.module.scss';

const renderSkeletonTopCard = (quantity: number) => {
  const arr = Array(quantity).fill(0);
  const arrayMapped = arr.map((_, index) => {
    return index % 2 === 0 ? 111 : 139;
  });

  return arrayMapped;
};

const CardTopLoader = ({ isLoading }: BaseLoaderProps) => {
  const renderSkeletonTop = useMemo(
    () => renderSkeletonTopCard(10),
    [renderSkeletonTopCard]
  );
  return (
    <div
      id="container_top_card_loader"
      className={styles.container_top_card_loader}
    >
      <Skeleton
        active
        loading={isLoading}
        title={{
          width: 169,
          style: { marginBottom: 26, marginTop: 0, height: 16 },
        }}
        paragraph={{ rows: 10, width: renderSkeletonTop }}
      />
    </div>
  );
};

export default CardTopLoader;
