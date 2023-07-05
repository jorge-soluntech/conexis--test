import { Col, Form, Row } from 'antd';
import type { FC } from 'react';
import { useEffect } from 'react';

import UploadComponent from '@/components/common/uploadAttachmentComponent/UploadAttachmentComponent';
import useFileUpload from '@/components/hooks/useAttachments/useFileUpload';
import useFileDownload from '@/components/hooks/useFileDownload';
import { gutters } from '@/consts';
import locales from '@/locales/en/en.json';

import type { IPostNewJobs } from '../../postNewJobs/IPostNewJobs';

const JobAttachment: FC<IPostNewJobs.PropsFields> = ({
  className,
  name,
  form,
}) => {
  const {
    postNewJob: { formCreate },
  } = locales;
  const { GUTTERS } = gutters;

  const { downloadFile } = useFileDownload();
  const { attachments, addNewFile } = useFileUpload();

  useEffect(() => {
    form?.setFieldsValue({ job_description_attachment: attachments });
  }, [attachments]);

  const onDownload = () =>
    downloadFile({ name: attachments.fileName, id: attachments.path });

  return (
    <Row className={className} gutter={GUTTERS.formField}>
      <Col span={24}>
        <Form.Item
          label={formCreate.labelJobAttachments}
          name={name}
          htmlFor={name}
        >
          <UploadComponent
            onChange={addNewFile}
            maxCount={1}
            fileName={attachments?.fileName}
            onDownload={onDownload}
          />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default JobAttachment;
