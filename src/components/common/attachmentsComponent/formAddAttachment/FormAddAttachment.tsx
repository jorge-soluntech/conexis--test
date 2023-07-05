import { Col, DatePicker, Form, Input, Row, Select } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import dayjs from 'dayjs';

import UploadComponent from '@/components/common/uploadAttachmentComponent/UploadAttachmentComponent';
import type { Attachment } from '@/consts/Attachments';
import { TYPE as buyerConst } from '@/consts/buyers';
import { DASHBOARDTYPES } from '@/consts/permissions';
import { TYPE as supplierConst } from '@/consts/suppliers';

import styles from './FormAddAttachment.module.scss';
import type { IAddAttachment } from './IFormAddAttachment';
import { useFormAddAttachments } from './UseFormAddAttachment';

const ISO_8601_FORMAT_DATE = 'YYYY-MM-DDTHH:mm:ss.SSSZ';

export const FormAddAttachment = ({
  errors,
  setErrors,
  setShowError,
  attachments,
  setAttachments,
  isNewAttachment,
  setIsNewAttachment,
  buyerOptions,
  dashboard,
}: IAddAttachment.FormAddAttachment) => {
  const { onChange, addAttachment, updateAttachment, deleteAttachment } =
    useFormAddAttachments({
      setErrors,
      setShowError,
      attachments,
      setAttachments,
      setIsNewAttachment,
      dashboard,
    });
  const TypeOfDocumentField = (attachment: Attachment.AttachmentComponent) => {
    return (
      <Form.Item
        required={true}
        label="Type of document"
        className={styles.label}
        initialValue={attachment.type}
        validateStatus={errors[`${attachment.id}_type`] ? 'error' : ''}
      >
        <Select
          size="large"
          value={attachment.type}
          maxTagCount="responsive"
          optionFilterProp="children"
          placeholder="Select type of document here"
          className={'dummyClassCreateFormForBorder'}
          style={{ width: '100%', borderRight: 'white' }}
          onChange={(value) => onChange(attachment.id, 'type', value)}
          options={
            dashboard === DASHBOARDTYPES.supplier ? supplierConst : buyerConst
          }
        />
      </Form.Item>
    );
  };
  const NameField = (attachment: Attachment.AttachmentComponent) => (
    <Form.Item
      label="Name"
      required={true}
      className={styles.label}
      initialValue={attachment.name}
      validateStatus={errors[`${attachment.id}_name`] ? 'error' : ''}
      rules={
        dashboard === DASHBOARDTYPES.supplier
          ? undefined
          : [
              {
                validator: async (_, value) => {
                  if (value && value.length < 10) {
                    return Promise.reject();
                  }
                  return Promise.resolve();
                },
              },
            ]
      }
    >
      <Input
        type="text"
        size="large"
        placeholder="Enter name here"
        value={attachment.name}
        onChange={(e) => onChange(attachment.id, 'name', e.target.value)}
      />
    </Form.Item>
  );
  const BuyerField = (attachment: Attachment.AttachmentComponent) => (
    <Form.Item
      label="Buyer"
      className={styles.label}
      validateStatus={errors[`${attachment.id}_buyer`] ? 'error' : ''}
      required
    >
      <Select
        size="large"
        value={attachment.buyer}
        maxTagCount="responsive"
        optionFilterProp="children"
        placeholder="Select buyer here"
        className={'dummyClassCreateFormForBorder'}
        style={{ width: '100%', borderRight: 'white' }}
        onChange={(value) => onChange(attachment.id, 'buyer', value)}
        options={buyerOptions}
      />
    </Form.Item>
  );
  const ExpiryDateField = (attachment: Attachment.AttachmentComponent) => (
    <Form.Item
      label="Expiry date"
      className={styles.label}
      required={
        dashboard === DASHBOARDTYPES.supplier
          ? attachment.type === 'Supplier Agreements' ||
            attachment.type === 'COI'
          : attachment.type === 'Client Agreement'
      }
      validateStatus={errors[`${attachment.id}_expiryDate`] ? 'error' : ''}
    >
      <DatePicker
        placeholder="Select expiry date here"
        defaultValue={
          attachment.expiryDate ? dayjs(attachment.expiryDate) : undefined
        }
        format={(value) => `${dayjs(value).format('DD MMM YYYY')}`}
        onChange={(value) =>
          onChange(
            attachment.id,
            'expiryDate',
            value ? value.format(ISO_8601_FORMAT_DATE) : undefined
          )
        }
      />
    </Form.Item>
  );
  const UploadComponentField = (attachment: Attachment.AttachmentComponent) => (
    <Form.Item label="File" className={styles.label}>
      <UploadComponent
        onChange={(info: UploadChangeParam) =>
          updateAttachment(attachment.id, info)
        }
      />
      <span className={styles.show_attachment}>{attachment.fileName}</span>
    </Form.Item>
  );
  return (
    <>
      {attachments.length > 0 &&
        attachments.map((attachment, index) => (
          <div
            key={`ATT-${attachment.id}`}
            className={styles.attachment_wrapper}
          >
            <div className={styles.new_attachment}>
              <span className={styles.title_attachment}>
                Attachment {index + 1}
              </span>
              {attachments.length > 0 && index !== 0 && (
                <span
                  className={styles.text_attachment}
                  onClick={() => deleteAttachment(attachment.id)}
                >
                  Delete attachment
                </span>
              )}
            </div>
            {dashboard === DASHBOARDTYPES.supplier &&
              UploadComponentField(attachment)}
            <Row className={styles.row}>
              <Col lg={12} sm={24} xs={24} md={12}>
                {dashboard === DASHBOARDTYPES.supplier
                  ? TypeOfDocumentField(attachment)
                  : UploadComponentField(attachment)}
              </Col>
              <Col lg={12} sm={24} xs={24} md={12}>
                {dashboard === DASHBOARDTYPES.supplier
                  ? NameField(attachment)
                  : TypeOfDocumentField(attachment)}
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col lg={12} sm={24} xs={24} md={12}>
                {dashboard === DASHBOARDTYPES.supplier
                  ? BuyerField(attachment)
                  : NameField(attachment)}
              </Col>
              <Col lg={12} sm={24} xs={24} md={12}>
                {ExpiryDateField(attachment)}
              </Col>
            </Row>
          </div>
        ))}
      {isNewAttachment && (
        <Row className={styles.row}>
          <Col xs={24}>
            <Form.Item label="File" className={styles.label}>
              <UploadComponent onChange={addAttachment} />
            </Form.Item>
          </Col>
        </Row>
      )}
    </>
  );
};
