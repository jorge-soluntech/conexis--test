/* eslint-disable array-callback-return */

import { LeftOutlined } from '@ant-design/icons';
import { Col, Layout, Row, Typography } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useCallback, useEffect, useState } from 'react';

import { useAppSelector } from '@/components/hooks/storeHooks';
import { SupplierServices } from '@/infrastructure/services/SupplierServices';
import locales from '@/locales/en/en.json';

import TableAttachmentSuppliers from '../tableAttachmentSuppliers/TableAttachmentSuppliers';
import styles from './attachmentSuppliers.module.scss';
import type { IAttachmentSuppliers } from './IAttachmentSuppliers';

const { Title } = Typography;
const { Content } = Layout;
const { suppliers } = locales;

/**
 * Returns the AttachmentSuppliers component
 *
 * @param idSupplier - The string of the id supplier
 * @returns The AttachmentSuppliers component
 */

const AttachmentSuppliers: FC<IAttachmentSuppliers.Props> = ({
  idSupplier,
}) => {
  const router = useRouter();
  const supplierServices = new SupplierServices(router);
  const { currentUserRoleName } = useAppSelector((state) => state.dashboard);

  const [dataUser, setDataUser] = useState<
    IAttachmentSuppliers.DataAttachments[]
  >([]);
  const [loading, setloader] = useState<boolean>(true);

  const getDataSupplierId = useCallback(async (): Promise<void> => {
    await supplierServices.getSuppliersById(idSupplier).then((response) => {
      const result = response.data.attachments.map(
        ({
          id,
          file,
          name,
          type,
          expiry_date,
        }: IAttachmentSuppliers.DataAttachments) => {
          const expiryDate = `${expiry_date.slice(5, 7)}/${expiry_date.slice(
            8,
            10
          )}/${expiry_date.slice(0, 4)}`;

          return {
            key: id,
            file: (
              <span className={styles.att_container_file}>
                <span>
                  <Image
                    src="/assets/icons/doc.svg"
                    width={40}
                    height={40}
                    alt="doc"
                  />
                </span>
                {file}
              </span>
            ),
            name: <span className={styles.att_container_row}>{name}</span>,
            type: <span className={styles.att_container_row}>{type}</span>,
            expiryDate: (
              <span className={styles.att_container_row}>{expiryDate}</span>
            ),
          };
        }
      );

      setDataUser(result);
      setloader(false);
    });
  }, [idSupplier]);

  useEffect(() => {
    getDataSupplierId();
  }, []);

  return (
    <>
      <Content>
        <div className={`${styles.att_container}`}>
          <Row>
            <Col>
              <div
                style={{
                  cursor: 'pointer',
                  color: '#888E95',
                  width: 'fit-content',
                  fontSize: '16px',
                }}
                onClick={() => {
                  router.push('/home/suppliers', undefined, {
                    shallow: true,
                  });
                }}
              >
                <LeftOutlined />
                &nbsp; Suppliers
              </div>
            </Col>
          </Row>

          <Title level={4} className={styles.att_container__buyer}>
            {currentUserRoleName}
          </Title>
          <Title level={3} className={styles.att_container__title}>
            {suppliers.textGoTo}
          </Title>
          <TableAttachmentSuppliers loading={loading} dataUser={dataUser} />
        </div>
      </Content>
    </>
  );
};

export default AttachmentSuppliers;
