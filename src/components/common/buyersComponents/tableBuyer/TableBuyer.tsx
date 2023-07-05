import type { TableProps } from 'antd';
import { Col, Divider, Row } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import router from 'next/router';
import type { FC } from 'react';
import React, { useState } from 'react';

import { UtilServices } from '@/infrastructure/services/utilsServices';

import TableComponent from '../../tableComponent/Table';
import type { ITableBuyer } from './ITableBuyer';
import styles from './TableBuyer.module.scss';

const DEFAULT_PAGE_SIZE = 20;

/**
 * returns the buyers table
 * @param dashboard - The type of dashboard.
 * @param loading - boolean indicating whether the data request is being made for the table
 * @param dataTable - object with the table data
 * @param setShowError - function to show the error message
 * @returns the buyers table
 */

const TableBuyers: FC<ITableBuyer.IProps> = ({
  dashboard,
  loading,
  dataTable,
  setShowError,
}) => {
  const [page, setPage] = useState<number>(1);

  const onChange: TableProps<any>['onChange'] = (pagination: any) => {
    setPage(pagination.current as number);
  };

  const columns: ColumnsType<ITableBuyer.DataBuyer> = [
    {
      title: () => (
        <span className={styles.headerTable}>Client company name</span>
      ),
      dataIndex: 'clientCompanyName',
      sorter: (a, b) => a.clientCompanyName.localeCompare(b.clientCompanyName),
      className: styles.columnTable,
    },
    {
      title: () => (
        <span className={styles.headerTable}>Client contact name</span>
      ),
      dataIndex: 'clientContactName',
      className: styles.columnTable,
      sorter: (a, b) => {
        return a.clientContactName.localeCompare(b.clientContactName);
      },
    },
    {
      title: () => (
        <span className={styles.headerTable}>Client contact email</span>
      ),
      dataIndex: 'clientContactEmail',
      className: styles.columnTable,
      sorter: (a, b) => {
        return a.clientContactEmail.localeCompare(b.clientContactEmail);
      },
    },
    {
      title: () => (
        <span className={styles.headerTable}>Client contact phone</span>
      ),
      dataIndex: 'clientContactPhone',
      className: styles.columnTable,

      sorter: (a, b) =>
        a.clientContactPhone.localeCompare(b.clientContactPhone),
    },
    {
      title: () => <span className={styles.headerTable}>Account owner</span>,
      dataIndex: 'accountOwner',
      className: styles.columnTable,

      sorter: (a, b) => a.accountOwner.localeCompare(b.accountOwner),
    },
    {
      title: () => (
        <span className={styles.headerTable}>Contract expiration date</span>
      ),
      dataIndex: 'contractExpirationDate',
      className: styles.columnTable,

      sorter: (a, b) =>
        a.contractExpirationDate.localeCompare(b.contractExpirationDate),
    },
  ];

  function detailsContent(record: ITableBuyer.DataBuyer) {
    const downloadS3File = async (file: { name: string; id: string }) => {
      try {
        await UtilServices.downloadS3File(file, router);
      } catch (error) {
        setShowError(true);
      }
    };

    return (
      <div className={styles.expandedRowContent}>
        <div className={styles.expandedRowContentSection}>
          <p className={styles.expandedRowContentTitle}>
            Additional information
          </p>
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
                  {record.details.aditionalInfo.legalNameInvoicing}
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
                  {record.details.aditionalInfo.clientMailingAddress}
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
                  {record.details.aditionalInfo.clientMailingAddress2}
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
                  {record.details.aditionalInfo.workWeekDefinition}
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
                  {record.details.aditionalInfo.currency}
                </p>
              </div>
            </Col>
          </Row>
          <Divider style={{ backgroundColor: '#DBDDE0' }} />
        </div>
        <div className={styles.expandedRowContentSection}>
          <p className={styles.expandedRowContentTitle}>Taxes</p>
          <Row>
            <Col xs={8} md={8} lg={8}>
              <div
                style={{
                  display: 'flex',
                }}
              >
                <p className={styles.expandedRowContentItem}>VAT/Federal:</p>
                <p className={styles.expandedRowContentItemValue}>
                  {record.details.taxes.vatFederalTax}
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
                  {record.details.taxes.provincialTax}
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
                  {record.details.taxes.otherTax}
                </p>
              </div>
            </Col>
          </Row>

          <Divider style={{ backgroundColor: '#DBDDE0' }} />
        </div>
        <div className={styles.expandedRowContentSection}>
          <p className={styles.expandedRowContentTitle}>Approvals</p>
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
                  {record.details.approvals.jobsRequireApproval}
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
                  {record.details.approvals.submissionsRequireApproval}
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
                  {record.details.approvals.accesToApplicantTrackingModule}
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
                  {record.details.approvals.contractRequiresApproval}
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
                  {record.details.approvals.accountsPayableContactName}
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
                  {record.details.approvals.accountsPayableContactEmail}
                </p>
              </div>
            </Col>
          </Row>
          <Divider style={{ backgroundColor: '#DBDDE0' }} />
        </div>
        <div
          className={styles.expandedRowContentSection}
          style={{ display: 'block' }}
        >
          <p className={styles.expandedRowContentTitle}>Documents</p>

          <p
            className={styles.expandedRowContentItem}
            style={{ display: 'block' }}
          >
            Client agreement
          </p>

          <div style={{ minHeight: '0.5rem', display: 'inline-block' }}>
            {record.details.documents.clientAgreement?.map((item) => {
              if (item.id) {
                return (
                  <div
                    key={item.id}
                    className={styles.expandedRowContentItemDocument}
                    onClick={() => {
                      downloadS3File(item);
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
            {record.details.documents.others?.map((item) => {
              if (item.id) {
                return (
                  <div
                    key={item.id}
                    className={styles.expandedRowContentItemDocument}
                    onClick={() => {
                      downloadS3File(item);
                    }}
                  >
                    {item.name ? item.name : 'Undefined'}
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <TableComponent
      dashboard={dashboard}
      page={page}
      loading={loading}
      dataTable={dataTable}
      pageSize={DEFAULT_PAGE_SIZE}
      columns={columns}
      onChange={onChange}
      expandable={{
        expandedRowClassName: () => styles.expandedRow!,
        expandedRowRender: (record: ITableBuyer.DataBuyer) =>
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
              className={styles.contractedRowIcon}
              onClick={(e) => onExpand(record, e)}
            >
              ........
            </div>
          ) : (
            <div
              className={styles.expandedRowIcon}
              onClick={(e) => onExpand(record, e)}
            >
              ........
            </div>
          );
        },

        rowExpandable: (record: ITableBuyer.DataBuyer) =>
          record.details !== null,
      }}
      rowsSkeleton={8}
      columnsSkeleton={7}
    />
  );
};

export default TableBuyers;
