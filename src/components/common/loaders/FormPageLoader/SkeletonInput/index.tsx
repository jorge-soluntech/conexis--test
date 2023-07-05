import { Skeleton } from '@/components/designSystem';

import styles from './skeletonInput.module.scss';

const SkeletonInput = () => (
  <Skeleton.Input
    active
    block
    size="large"
    className={styles.skeletonLoaderInput}
  />
);

export default SkeletonInput;
