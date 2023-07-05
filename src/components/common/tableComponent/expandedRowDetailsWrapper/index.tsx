import { Row } from 'antd';
import type { FC, ReactElement, ReactNode } from 'react';

import { createNamespacedComponent } from '@/utils/createNamespacedComponent';

import styles from './expandedRowDetailsWrapper.module.scss';

type ExpandableRowDetailsProps = {
  title?: ReactElement;
  children: ReactNode;
};

const WrapperComponent = ({ children, title }: ExpandableRowDetailsProps) => {
  return (
    <div className={styles.expandedRowWrapper}>
      {title ?? null}
      <Row>{children}</Row>
    </div>
  );
};

interface ExpandedProps {
  children: ReactNode;
}

const ExpandedRowDetailsContent: FC<ExpandedProps> = ({
  children,
}: ExpandedProps) => (
  <div className={styles.expandedRowContent}>{children}</div>
);

interface ExpandedRowContentProps extends ExpandedProps {
  inlineStyle?: Record<string, string>;
}

const ExpandedRowContentSection: FC<ExpandedRowContentProps> = ({
  children,
  inlineStyle,
}: ExpandedRowContentProps) => {
  return (
    <div style={inlineStyle ?? {}} className={styles.expandedRowContentSection}>
      {children}
    </div>
  );
};

const ExpandedRowDetailsWrapper = createNamespacedComponent(
  () => WrapperComponent,
  {
    DetailsContent: ExpandedRowDetailsContent,
    ContentSection: ExpandedRowContentSection,
  }
);

export { ExpandedRowDetailsWrapper };
