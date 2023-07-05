import type { ReactNode } from 'react';

import styles from './Main.module.scss';

type IMainProps = {
  /** meta data to be set */
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className={styles.container_main}>
    {props.meta}
    {props.children}
  </div>
);

export { Main };
