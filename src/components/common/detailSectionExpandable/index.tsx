import type { FC, ReactElement } from 'react';
import { Children, cloneElement } from 'react';

import styles from './DetailSection.module.scss';

type DetailSectionContainerProps = {
  children: ReactElement | ReactElement[];
  title: string;
};

const DetailSectionContainer: FC<DetailSectionContainerProps> = ({
  children,
  title,
}: DetailSectionContainerProps) => {
  return (
    <>
      <h3 className={styles.expanded_row_content_title}>{title}</h3>
      {Children.count(children) > 0
        ? Children.map(children, (child, index) =>
            cloneElement(child, { index })
          )
        : children}
    </>
  );
};

export default DetailSectionContainer;
