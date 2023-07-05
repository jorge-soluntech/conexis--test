import DetailsSection from '@/components/common/detailSectionExpandable';
import { Col, Divider, Row } from '@/components/designSystem';
import locales from '@/locales/en/en.json';

import ExpandedRowContent from '../expandedRowContent';
import styles from '../JobsExpandableRow.module.scss';

const {
  jobApprovals: { expandable },
} = locales;

const AdditionalInformation = ({
  additionalInformation,
  commentsAndSuppliers,
}: {
  additionalInformation: any;
  commentsAndSuppliers: Object[];
}) => {
  return (
    <DetailsSection {...{ title: expandable.additionalInformation }}>
      {additionalInformation.map((item: any, index: number) => (
        <Row key={`additionalInfo-${index}`}>
          {Object.entries(item).map(([key, value], index) => (
            <Col className={styles.col} key={index} xs={6}>
              <ExpandedRowContent label={key} value={value} />
            </Col>
          ))}
        </Row>
      ))}

      <Row>
        {commentsAndSuppliers.map((item) =>
          Object.entries(item).map(([key, value], index) => (
            <Col className={styles.col} key={index} xs={12}>
              <ExpandedRowContent label={key} value={value} />
            </Col>
          ))
        )}
      </Row>
      <Divider className={styles.divider} />
    </DetailsSection>
  );
};

export default AdditionalInformation;
