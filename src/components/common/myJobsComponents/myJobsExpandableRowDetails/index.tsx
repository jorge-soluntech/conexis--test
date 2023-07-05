import { Col } from 'antd';

import locales from '@/locales/en/en.json';

import { getMyJobsAdditionalRowInformation } from './helpers';
import styles from './myJobsExpandableRowDetails.module.scss';
import type { RowInformation } from './types';

const {
  myJobs: { additionalInformation },
} = locales;

type MyJobsExpandableRowDetailsProps = {
  record: any;
};

const MyJobsExpandableRowDetails = ({
  record,
}: MyJobsExpandableRowDetailsProps) => {
  const { detailsContent } = getMyJobsAdditionalRowInformation(record);
  // The empty <Fragment> is wrapping the array.map because antd Table expandable row expects a valid JSX element.
  return (
    <>
      {detailsContent.map(({ label, value }: RowInformation, index: number) => (
        <Col xs={4} key={`additional_information-${index}`}>
          <div className={styles.expandedRowContent}>
            <span className={styles.expandedRowContentItem}>{label}</span>
            <span className={styles.expandedRowContentItemValue}>{value}</span>
          </div>
        </Col>
      ))}
      <Col xs={4} md={4} lg={4}>
        <div className={styles.expandedRowContent}>
          <span className={styles.expandedRowContentItem}>
            {additionalInformation.submissions}
          </span>
          <span className={styles.expandedRowContentViewMore}>View more</span>
        </div>
      </Col>
    </>
  );
};

export default MyJobsExpandableRowDetails;
