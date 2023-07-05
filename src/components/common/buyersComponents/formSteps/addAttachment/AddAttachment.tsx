import { Col, DatePicker, Form, Input, Row, Select } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import dayjs from 'dayjs';

import UploadComponent from '@/components/common/uploadAttachmentComponent/UploadAttachmentComponent';
import type { Attachment } from '@/consts/Attachments';
import { TYPE } from '@/consts/buyers';

import styles from './AddAttachment.module.scss';
import type { IAddAttachment } from './IAddAttachment';
import useAddAttachments from './UseAddAttachment';

const ISO_8601_FORMAT_DATE = 'YYYY-MM-DDTHH:mm:ss.SSSZ';

const FormAddAttachment = ({
  errors,
  setErrors,
  setShowError,
  attachments,
  setAttachments,
  isNewAttachment,
  setIsNewAttachment,
}: IAddAttachment.IProps) => {
  const { onChange, addAttachment, updateAttachment, deleteAttachment } =
    useAddAttachments({
      setErrors,
      setShowError,
      attachments,
      setAttachments,
      setIsNewAttachment,
    });
  const dashboard = 'buyers';
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
          options={TYPE}
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
        dashboard === 'buyers'
          ? [
              {
                validator: async (_, value) => {
                  if (value && value.length < 10) {
                    return Promise.reject();
                  }
                  return Promise.resolve();
                },
              },
            ]
          : undefined
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
  const ExpiryDateField = (attachment: Attachment.AttachmentComponent) => (
    <Form.Item
      label="Expiry date"
      className={styles.label}
      required={
        /** the expiry date field is only required when the type of document field is client agreement */
        attachment.type === 'Client Agreement'
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
            <Row className={styles.row}>
              <Col lg={12} sm={24} xs={24} md={12}>
                {UploadComponentField(attachment)}
              </Col>
              <Col lg={12} sm={24} xs={24} md={12}>
                {TypeOfDocumentField(attachment)}
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col lg={12} sm={24} xs={24} md={12}>
                {NameField(attachment)}
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

export default FormAddAttachment;
