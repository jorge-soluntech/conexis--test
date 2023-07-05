import { Button } from 'antd';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import GridLogin from '@/components/layouts/gridLogin/GridLogin';

import { LogoTypeWithMargin } from '../logo/logotype';
import styles from './404.module.scss';

type Props = {
  type: string;
};

/**
 * Returns PageNotFound
 * @returns custom 404 page
 */

const PageNotFound: FC<Props> = ({ type }) => {
  const router = useRouter();

  return type === 'in' ? (
    <div className={`${styles.not_found} ${styles.not_found_in}`}>
      <div style={{ marginTop: '-12rem' }}>
        <h3>Page not found</h3>
        <p>
          The page you’re looking for is not here. Go back to return
          <br /> where you came from.
        </p>
        <Button type="default" onClick={() => router.push(`/`)}>
          Go to dashboard
        </Button>
      </div>
    </div>
  ) : (
    <GridLogin>
      <div className={`${styles.not_found} ${styles.not_found_out}`}>
        <div>
          <LogoTypeWithMargin />
          <h3>Page not found</h3>
          <p>
            The page you’re looking for is not here. Go <br /> back to return
            where you came from.
          </p>
          <Button type="default" onClick={() => router.back()}>
            Go back
          </Button>
        </div>
      </div>
    </GridLogin>
  );
};

export default PageNotFound;
