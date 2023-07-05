import DetailsSection from '@/components/common/detailSectionExpandable';
import { Col, Divider, Row } from '@/components/designSystem';
import locales from '@/locales/en/en.json';

import ExpandedRowContent from '../expandedRowContent';
import styles from '../JobsExpandableRow.module.scss';

const {
  jobApprovals: { expandable },
} = locales;

const WorkShifts = ({ workShifts }: { workShifts: Object[] }) => {
  return (
    <>
      <Divider className={styles.divider} />
      <DetailsSection {...{ title: expandable.workShifts }}>
        {workShifts.map((item: any, index: number) => (
          <Row key={`workShift-${index}`}>
            <Col className={styles.col} xs={6}>
              <ExpandedRowContent
                label={`${expandable.workShifts} ${index + 1}`}
                value={item.work_shift_description}
              />
            </Col>
            <Col className={styles.col} xs={6}>
              <ExpandedRowContent
                label={expandable.startTime}
                value={item.start_time}
              />
            </Col>
            <Col className={styles.col} xs={6}>
              <ExpandedRowContent
                label={expandable.endTime}
                value={item.end_time}
              />
            </Col>
            <Col className={styles.col} xs={6}>
              <ExpandedRowContent
                label={expandable.workDays}
                value={item.work_days?.map((day: string) => day).join('- ')}
              />
            </Col>
          </Row>
        ))}
      </DetailsSection>
    </>
  );
};

export default WorkShifts;
