import { Button } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import styles from './backLogin.module.scss';

const BackLogin: FC = () => {
  const router = useRouter();

  return (
    <div className={styles.back}>
      <Button
        type="link"
        className={styles.button_back}
        icon={
          <span className={styles.icon_back}>
            <Image
              src="/assets/icons/arrow_back.svg"
              alt="logo_conexis"
              width={6.93}
              height={12}
              priority
            />
          </span>
        }
        onClick={() =>
          router.push('/auth', undefined, {
            shallow: true,
          })
        }
      >
        Log in
      </Button>
    </div>
  );
};

export default BackLogin;
