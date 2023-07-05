import { LeftOutlined } from '@ant-design/icons';
import { Button, Card, Form, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';
import Image from 'next/image';

import AlertMessage from '@/components/common/alertComponent/AlertMessage';
import useEditAttachments from '@/components/common/attachmentsComponent/editAttachments/useEditAttachments';
import { FormAddAttachment } from '@/components/common/attachmentsComponent/formAddAttachment/FormAddAttachment';
import type { IFormAttachment } from '@/components/common/attachmentsComponent/IFormAttachment';
import type { Attachment } from '@/consts/Attachments';
import sorterTable from '@/utils/sorterTable';

import styles from './ListAndEditAttachments.module.scss';

const PLUS_ICON = '/assets/icons/plus_icon.svg';
const ATTACHMENT_ROW_ICON = '/assets/icons/attachmentRow.svg';

// TODO: If buyers and suppliers flow works this folder can be deleted
/**
 * Displays a table of existing attachments and allows the user to add another attachment.
 *
 * @returns A React component that renders a card containing a table of existing attachments
 * an option to add another attachment, and buttons to go back or submit changes.
 */

const EditAttachments = ({ dashboard }: IFormAttachment.IDashboards) => {
  const {
    onBack,
    errors,
    isLoading,
    setErrors,
    showError,
    setShowError,
    isNewAttachment,
    setIsNewAttachment,
    existingAttachments,
    handleContinue,
    viewListAttachments,
    setViewListAttachments,
    newAttachment,
    setNewAttachment,
    validateNewAttachment,
  } = useEditAttachments({ dashboard });
  const columns: ColumnsType<Attachment.ListAttachments> = [
    {
      title: () => <span className={styles.headerTable}>File</span>,
      dataIndex: 'original_name',
      className: styles.columnTable,
      sorter: (a, b, sortOrder) =>
        sorterTable(a, b, 'original_name', sortOrder),
      render: (_value, record: any) => (
        <div className={styles.attachment}>
          <Image
            width={40}
            height={40}
            alt="attachment"
            src={ATTACHMENT_ROW_ICON}
          />
          <p>{record.original_name}</p>
        </div>
      ),
    },
    {
      title: () => <span className={styles.headerTable}>Name</span>,
      dataIndex: 'name',
      className: styles.columnTable,
      sorter: (a, b, sortOrder) => sorterTable(a, b, 'name', sortOrder),
      render: (_value, record: any) => (
        <p className={styles.column_paragraph}>{record.name}</p>
      ),
    },
    {
      title: () => <span className={styles.headerTable}>Type of document</span>,
      dataIndex: 'type',
      className: styles.columnTable,
      sorter: (a, b, sortOrder) => sorterTable(a, b, 'type', sortOrder),
      render: (_value, record: any) => (
        <p className={styles.column_paragraph}>{record.type}</p>
      ),
    },
    {
      title: () => <span className={styles.headerTable}>Expiry date</span>,
      dataIndex: 'expiry_date',
      className: styles.columnTable,
      sorter: (a, b, sortOrder) => sorterTable(a, b, 'expiry_date', sortOrder),
      render: (_value, record: any) => (
        <p className={styles.column_paragraph}>
          {record?.expiry_date
            ? dayjs(record.expiry_date).format('DD MMM YYYY')
            : ''}
        </p>
      ),
    },
  ];
  return (
    <>
      <Card className={styles.card}>
        {showError && (
          <AlertMessage
            message={errors[Object.keys(errors)[0] as string]!}
            afterClose={() => setShowError(false)}
          />
        )}
        <Form scrollToFirstError name="Attachments" onFinish={handleContinue}>
          {viewListAttachments ? (
            <>
              <div className={styles.table_wrapper}>
                <Table
                  columns={columns}
                  pagination={false}
                  className={styles.table}
                  dataSource={existingAttachments}
                />
              </div>
              <p
                className={styles.add_attachment}
                onClick={() => {
                  setViewListAttachments(false);
                  setIsNewAttachment(true);
                }}
              >
                <Image alt="plus" width={12} height={12} src={PLUS_ICON} />
                Add another attachment
              </p>
              <div className={styles.buttons}>
                <Button type="default" onClick={onBack}>
                  Back
                </Button>
                <Button
                  size="large"
                  type="primary"
                  htmlType="submit"
                  loading={isLoading}
                >
                  Submit
                </Button>
              </div>
            </>
          ) : (
            <>
              <div
                className={styles.on_back}
                onClick={() => {
                  setShowError(false);
                  setViewListAttachments(true);
                  setNewAttachment([]);
                }}
              >
                <LeftOutlined />
                &nbsp; Go back to attachments
              </div>
              <div className={styles.form_subtitle_container}>
                <div className={styles.form_small_title}>
                  Add new attachment
                </div>
              </div>
              <FormAddAttachment
                errors={errors}
                setErrors={setErrors}
                setShowError={setShowError}
                attachments={newAttachment}
                setAttachments={setNewAttachment}
                isNewAttachment={isNewAttachment}
                setIsNewAttachment={setIsNewAttachment}
                buyerOptions={[]}
                dashboard={dashboard}
              />
              <div className={styles.back_add_attachment}>
                <Button
                  size="large"
                  type="primary"
                  onClick={validateNewAttachment}
                >
                  Submit
                </Button>
              </div>
            </>
          )}
        </Form>
      </Card>
    </>
  );
};

export default EditAttachments;
