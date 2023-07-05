import { Col, Row } from 'antd';
import type { ExpandableConfig } from 'antd/es/table/interface';

import locales from '@/locales/en/en.json';

import type { ITableBuyer } from '../../buyersComponents/tableBuyer/ITableBuyer';
import type { ITableMyJobs } from '../tableMyJobs/ITableMyJobs';
import styles from './DetailContentTable.module.scss';

const {
  myJobs: { additionalInformation },
} = locales;

const useAdditionalInformation = () => {
  const formatAdditionalInformation = (record: ITableMyJobs.DataTable) => {
    const { postedOn, numberOfPositions, filledPositions, submissionsCount } =
      record;

    const additionalInfoMap = {
      [additionalInformation.postedOn]: postedOn,
      [additionalInformation.numberOfPositions]: numberOfPositions,
      [additionalInformation.filledPositions]: filledPositions,
      [additionalInformation.submissionsCount]: submissionsCount,
      [additionalInformation.fulfillmentRate]: `${
        numberOfPositions > 0 ? (filledPositions / numberOfPositions) * 100 : 0
      }%`,
    };

    const ADDITIONAL_INFORMATION = Object.entries(additionalInfoMap).map(
      ([label, value]) => ({
        label,
        value,
      })
    );

    return ADDITIONAL_INFORMATION;
  };

  const detailsContent = (record: ITableMyJobs.DataTable) => {
    const ADDITIONAL_INFORMATION = formatAdditionalInformation(record);
    return (
      <div className={styles.expanded_row_wrapper}>
        <p className={styles.expanded_row_wrapper_title}>
          {additionalInformation.title}
        </p>
        <Row>
          {ADDITIONAL_INFORMATION.map((info, index) => (
            <Col xs={4} key={`additional_information-${index}`}>
              <div className={styles.expanded_row_content}>
                <span className={styles.expanded_row_content_item}>
                  {info.label}
                </span>
                <span className={styles.expanded_row_content_item_value}>
                  {info.value}
                </span>
              </div>
            </Col>
          ))}
          <Col xs={4} md={4} lg={4}>
            <div className={styles.expanded_row_content}>
              <span className={styles.expanded_row_content_item}>
                {additionalInformation.submissions}
              </span>
              <span className={styles.expanded_row_content_view_more}>
                View more
              </span>
            </div>
          </Col>
        </Row>
      </div>
    );
  };

  const expandableOptions: ExpandableConfig<any> = {
    expandedRowClassName: () => 'expanded_row',
    expandedRowRender: (record: ITableMyJobs.DataTable) =>
      detailsContent(record),
    columnWidth: '1px',
    expandIcon: ({
      expanded,
      onExpand,
      record,
    }: {
      expanded: boolean;
      onExpand: any;
      record: ITableBuyer.DataBuyer;
    }) => {
      if (record.details === null) {
        return null;
      }

      return expanded ? (
        <div
          className={'contracted_row_icon'}
          onClick={(e) => onExpand(record, e)}
        >
          ........
        </div>
      ) : (
        <div
          className={'expanded_row_icon'}
          onClick={(e) => onExpand(record, e)}
        >
          ........
        </div>
      );
    },

    rowExpandable: (record: ITableBuyer.DataBuyer) => record.details !== null,
  };

  return { expandableOptions };
};

export default useAdditionalInformation;
