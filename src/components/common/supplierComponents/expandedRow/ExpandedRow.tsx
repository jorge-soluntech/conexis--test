import { Button, Col, Divider, Rate, Row } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import React from 'react';

import { icons } from '@/consts';

import styles from './expandedRow.module.scss';

type Props = {
  dataExpanded: any;
};

const ExpandedRow: FC<Props> = ({ dataExpanded }) => {
  const router = useRouter();
  return (
    <div className={styles.expandedRow}>
      <h3 className={styles.expandedRow_title}>Supplier’s information</h3>

      <Row gutter={[16, 24]}>
        {dataExpanded.supplierInformation?.map((data: any, index: number) => (
          <Col className={styles.expandedRow_col} span={6} key={index}>
            <p>{data?.title}</p>
            {data?.title === 'Rating' ? (
              <div>
                <Rate disabled defaultValue={data?.value} allowHalf />
              </div>
            ) : (
              <div>{data?.value ?? '-'}</div>
            )}
          </Col>
        ))}
      </Row>

      <Divider />

      <h3 className={styles.expandedRow_title}>Additional supplier contacts</h3>

      <Row gutter={16}>
        {dataExpanded.additionalSupplierContacts?.map(
          (data: any, index: number) => (
            <Col className={styles.expandedRow_col} span={6} key={index}>
              <p>{data?.title}</p>
              <div>{data?.value ?? '-'}</div>
            </Col>
          )
        )}
      </Row>

      <Divider />

      <Row gutter={16}>
        <Col className={styles.expandedRow_col} span={6}>
          <h3 className={styles.expandedRow_title}>Taxes</h3>
          <strong>
            <p>{dataExpanded.taxes?.title}</p>
          </strong>
          <div>{dataExpanded.taxes?.value ?? '-'}</div>
        </Col>
        <Col className={styles.expandedRow_col} span={6}>
          <h3 className={styles.expandedRow_title}>Work category</h3>
          <strong>
            <p>{dataExpanded.workCategory?.title}</p>
          </strong>
          <div>{dataExpanded.workCategory?.value ?? '-'}</div>
        </Col>
      </Row>

      <Divider />

      <h3 className={styles.expandedRow_title}>Account contact information</h3>

      <Row gutter={16}>
        {dataExpanded.accountContactInformation?.map(
          (data: any, index: number) => (
            <Col className={styles.expandedRow_col} span={6} key={index}>
              <p>{data?.title}</p>
              <div>{data?.value ?? '-'}</div>
            </Col>
          )
        )}
      </Row>

      <Divider />

      <Button
        type="text"
        className={styles.attachments}
        onClick={() =>
          router.push(
            `/home/suppliers/attachments/${dataExpanded.key}`,
            undefined,
            {
              shallow: true,
            }
          )
        }
      >
        Go to attachments
        <span className={styles.attachments_icon}>
          <Image
            src={icons.ARROW_RIGHT_GREEN}
            width={5.77}
            height={12}
            alt="arrow"
          />
        </span>
      </Button>
    </div>
  );
};

export default ExpandedRow;
