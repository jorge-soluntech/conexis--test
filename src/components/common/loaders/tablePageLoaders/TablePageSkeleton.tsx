import { Card, Row, Skeleton } from '@/components/designSystem';

import TableLoader from './TableLoader';
import styles from './tablePageLoader.module.scss';

const TablePageSkeleton = ({ loading }: { loading: boolean }) => {
  return (
    <div className={styles.table_page_loader_container}>
      <Skeleton
        active
        loading={loading}
        title={{ width: 81, style: { margin: 0 } }}
        paragraph={{ rows: 0, style: { margin: 0 } }}
      />
      <Skeleton
        active
        loading={loading}
        paragraph={{ rows: 0, style: { margin: 0 } }}
        title={{ width: 319, style: { marginBottom: 0, height: 30 } }}
      />
      <Row className={styles.top_bar}>
        <div className={styles.search}>
          <Skeleton.Input active className={styles.skeletonInput} />
        </div>
        <Skeleton.Button active className={styles.skeletonButton} />
      </Row>
      <Card className={styles.card} bodyStyle={{ padding: '32px 48px' }}>
        <Card.Grid hoverable={false} className={styles.grid}>
          <TableLoader {...{ isLoading: loading }} />
        </Card.Grid>
      </Card>
    </div>
  );
};

export default TablePageSkeleton;
