import { Col, Divider, Row } from 'antd';
import type { FC } from 'react';

import useFileDownload from '@/components/hooks/useFileDownload';

import type { ITableBuyer } from '../tableBuyer/ITableBuyer';
import styles from './buyersExpandableRowDetails.module.scss';
import DetailsSection from './DetailSection';

const DETAIL_SECTION_TYPES = Object.freeze({
  AdditionalInfo: 'Additional Info',
  Approvals: 'Approvals',
  Documents: 'Documents',
  Taxes: 'Taxes',
});

type BuyersExpandableRowDetailsProps = {
  record: ITableBuyer.DataBuyer;
};
// NOTE:: this is a large file it can be reduced but it has flexible composition
// so for now it is okay at this many lines it could be refactored later to add more smaller components
const BuyersExpandableRowDetails: FC<BuyersExpandableRowDetailsProps> = ({
  record,
}: BuyersExpandableRowDetailsProps) => {
  const { downloadFile } = useFileDownload();

  const {
    details: { aditionalInfo: additionalInfo, taxes, approvals, documents },
  } = record;

  return (
    <>
      <DetailsSection {...{ title: DETAIL_SECTION_TYPES.AdditionalInfo }}>
        <Row>
          <Col xs={12} md={12} lg={9}>
            <div
              style={{
                display: 'flex',
              }}
            >
              <p className={styles.expandedRowContentItem}>
                Legal name for invoicing:
              </p>
              <p className={styles.expandedRowContentItemValue}>
                {additionalInfo.legalNameInvoicing}
              </p>
            </div>
          </Col>
          <Col xs={12} md={12} lg={12}>
            <div
              style={{
                display: 'flex',
              }}
            >
              <p className={styles.expandedRowContentItem}>
                Client mailing address:
              </p>
              <p className={styles.expandedRowContentItemValue}>
                {additionalInfo.clientMailingAddress}
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={12} lg={9}>
            <div
              style={{
                display: 'flex',
              }}
            >
              <p className={styles.expandedRowContentItem}>
                Client mailing address 2:
              </p>
              <p className={styles.expandedRowContentItemValue}>
                {additionalInfo.clientMailingAddress2}
              </p>
            </div>
          </Col>
          <Col xs={12} md={12} lg={12}>
            <div
              style={{
                display: 'flex',
              }}
            >
              <p className={styles.expandedRowContentItem}>
                Work week definition:
              </p>
              <p className={styles.expandedRowContentItemValue}>
                {additionalInfo.workWeekDefinition}
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={24} md={24}>
            <div
              style={{
                display: 'flex',
              }}
            >
              <p className={styles.expandedRowContentItem}>Currency:</p>
              <p className={styles.expandedRowContentItemValue}>
                {additionalInfo.currency}
              </p>
            </div>
          </Col>
        </Row>
        <Divider style={{ backgroundColor: '#DBDDE0' }} />
      </DetailsSection>
      <DetailsSection {...{ title: DETAIL_SECTION_TYPES.Taxes }}>
        <Row>
          <Col xs={8} md={8} lg={8}>
            <div
              style={{
                display: 'flex',
              }}
            >
              <p className={styles.expandedRowContentItem}>VAT/Federal:</p>
              <p className={styles.expandedRowContentItemValue}>
                {taxes.vatFederalTax}
              </p>
            </div>
          </Col>
          <Col xs={8} md={8} lg={8}>
            <div
              style={{
                display: 'flex',
              }}
            >
              <p className={styles.expandedRowContentItem}>
                Provincial/State sales tax:
              </p>
              <p className={styles.expandedRowContentItemValue}>
                {taxes.provincialTax}
              </p>
            </div>
          </Col>
          <Col xs={8} md={8} lg={8}>
            <div
              style={{
                display: 'flex',
              }}
            >
              <p className={styles.expandedRowContentItem}>Other:</p>
              <p className={styles.expandedRowContentItemValue}>
                {taxes.otherTax}
              </p>
            </div>
          </Col>
        </Row>
        <Divider style={{ backgroundColor: '#DBDDE0' }} />
      </DetailsSection>
      <DetailsSection {...{ title: DETAIL_SECTION_TYPES.Approvals }}>
        <Row>
          <Col xs={12} md={12} sm={12} lg={10}>
            <div
              style={{
                display: 'flex',
              }}
            >
              <p className={styles.expandedRowContentItem}>
                Jobs require approval?
              </p>
              <p className={styles.expandedRowContentItemValue}>
                {approvals.jobsRequireApproval}
              </p>
            </div>
          </Col>
          <Col xs={12} md={12} sm={12} lg={10}>
            <div
              style={{
                display: 'flex',
              }}
            >
              <p className={styles.expandedRowContentItem}>
                Submissions require approval?
              </p>
              <p className={styles.expandedRowContentItemValue}>
                {approvals.submissionsRequireApproval}
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={10}>
            <div
              style={{
                display: 'flex',
              }}
            >
              <p className={styles.expandedRowContentItem}>
                Access to applicant tracking module:
              </p>
              <p className={styles.expandedRowContentItemValue}>
                {approvals.accesToApplicantTrackingModule}
              </p>
            </div>
          </Col>
          <Col xs={12} md={12} sm={12} lg={10}>
            <div
              style={{
                display: 'flex',
              }}
            >
              <p className={styles.expandedRowContentItem}>
                Contracts require final approval?
              </p>
              <p className={styles.expandedRowContentItemValue}>
                {approvals.contractRequiresApproval}
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={10}>
            <div
              style={{
                display: 'flex',
              }}
            >
              <p className={styles.expandedRowContentItem}>
                Accounts payable contact name:
              </p>
              <p className={styles.expandedRowContentItemValue}>
                {approvals.accountsPayableContactName}
              </p>
            </div>
          </Col>
          <Col xs={12} md={12} sm={12} lg={10}>
            <div
              style={{
                display: 'flex',
              }}
            >
              <p className={styles.expandedRowContentItem}>
                Accounts payable contact email:
              </p>
              <p className={styles.expandedRowContentItemValue}>
                {approvals.accountsPayableContactEmail}
              </p>
            </div>
          </Col>
        </Row>
        <Divider style={{ backgroundColor: '#DBDDE0' }} />
      </DetailsSection>
      <DetailsSection {...{ title: DETAIL_SECTION_TYPES.Documents }}>
        <p
          className={styles.expandedRowContentItem}
          style={{ display: 'block' }}
        >
          Client agreement
        </p>

        <div style={{ minHeight: '0.5rem', display: 'inline-block' }}>
          {documents.clientAgreement?.map((item: any) => {
            if (item.id) {
              return (
                <div
                  key={item.id}
                  className={styles.expandedRowContentItemDocument}
                  onClick={() => {
                    downloadFile(item);
                  }}
                >
                  {item.name ? item.name : 'undefined'}
                </div>
              );
            }
            return null;
          })}
        </div>

        <p
          className={styles.expandedRowContentItem}
          style={{ display: 'block' }}
        >
          Others
        </p>

        <div style={{ minHeight: '1rem', display: 'inline-block' }}>
          {documents.others?.map((item: any) => {
            if (item.id) {
              return (
                <div
                  key={item.id}
                  className={styles.expandedRowContentItemDocument}
                  onClick={() => {
                    downloadFile(item);
                  }}
                >
                  {item.name ? item.name : 'Undefined'}
                </div>
              );
            }
            return null;
          })}
        </div>
      </DetailsSection>
    </>
  );
};

export default BuyersExpandableRowDetails;
