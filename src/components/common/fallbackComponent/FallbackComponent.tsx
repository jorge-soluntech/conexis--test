import Image from 'next/image';
import React from 'react';

import styles from './fallbackComponent.module.scss';

const FallbackComponent = () => {
  return (
    <div className={styles.fallback}>
      <Image
        src="/assets/images/load_conexis.svg"
        width={140}
        height={117}
        alt="mask"
        priority
      />
    </div>
  );
};

export default FallbackComponent;
