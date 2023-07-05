import { Skeleton } from '@/components/designSystem';

import styles from './skeletonFormDetailsHeader.module.scss';

const SkeletonFormDetailsHeader = () => {
  return (
    <div className={styles.formDetailsHeader}>
      <div className={styles.detail}>
        <Skeleton
          active
          className={styles.label}
          title={{ width: 50, style: { margin: 0 } }}
          paragraph={{ width: 80, rows: 1, style: { margin: '4px 0 0 0' } }}
        />
      </div>
      <div className={styles.detail}>
        <Skeleton
          active
          className={styles.label}
          title={{ width: 50, style: { margin: 0 } }}
          paragraph={{ width: 80, rows: 1, style: { margin: '4px 0 0 0' } }}
        />
      </div>
    </div>
  );
};

export default SkeletonFormDetailsHeader;
