import DetailsSection from '@/components/common/detailSectionExpandable';
import DownloadAttachment from '@/components/common/downloadAttachmnetComponent';
import { Col, Row } from '@/components/designSystem';
import locales from '@/locales/en/en.json';

import ExpandedRowContent from '../expandedRowContent';
import styles from '../JobsExpandableRow.module.scss';

const {
  jobApprovals: { expandable },
} = locales;

const JobSummary = ({
  jobDescription,
  jobDescriptionAttachment,
}: {
  jobDescription: string;
  jobDescriptionAttachment: string;
}) => {
  return (
    <>
      <DetailsSection {...{ title: expandable.jobSummary }}>
        <Row>
          <Col className={styles.col} xs={24}>
            <ExpandedRowContent
              label={expandable.yourResponsibilities}
              value={jobDescription}
            />
          </Col>
        </Row>
      </DetailsSection>
      <Col className={styles.col} xs={24}>
        <div className={styles.expandedRowContent}>
          <p className={styles.expandedRowContentItem}>
            {expandable.jobSummaryAttachment}
          </p>
          {jobDescriptionAttachment ? (
            <div className={styles.containerAttachment}>
              <DownloadAttachment
                file={{ name: jobDescriptionAttachment, id: '' }}
              />
            </div>
          ) : (
            '-'
          )}
        </div>
      </Col>
    </>
  );
};

export default JobSummary;
