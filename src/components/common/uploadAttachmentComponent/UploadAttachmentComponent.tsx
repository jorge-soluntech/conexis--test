import { Upload } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload/interface';
import Image from 'next/image';

import useWindowDimensions from '@/components/hooks/useWindowDimension';
import locales from '@/locales/en/en.json';

import type { IUploadComponent } from './IUploadAttachmentComponent';
import styles from './UploadAttachmentComponent.module.scss';

const {
  components: { uploadAttachment },
} = locales;

/**
 * Antd Upload Component
 * @param {string} props.titleUpload - Title to display for upload component
 * @param {string} props.titleUploadResponsive - Title to display for upload component on smaller screens
 * @param {number} props.breakpoint - Breakpoint for smaller screens, defaults to 992
 * @param {Function} props.onChange - Function to handle file upload changes
 * @param {string} props.icon - Path to icon for upload button, defaults to '/assets/icons/uploadAttachment.svg'
 * @returns {JSX.Element} - Antd Upload Component JSX Element
 */
const UploadComponent = ({
  titleUpload = uploadAttachment.title,
  titleUploadResponsive = uploadAttachment.titleResponsive,
  breakpoint = 992,
  onChange,
  icon = '/assets/icons/uploadAttachment.svg',
  maxCount,
  fileName,
  onDownload,
}: IUploadComponent.IProps): JSX.Element => {
  const { width = 0 } = useWindowDimensions();

  return (
    <>
      <div className={styles.drag_and_drop}>
        <Upload
          showUploadList={false}
          onChange={(info: UploadChangeParam) => onChange(info)}
          customRequest={({ onSuccess }) =>
            setTimeout(() => {
              if (onSuccess) {
                onSuccess('ok', undefined);
              }
            }, 0)
          }
          maxCount={maxCount}
        >
          <Image width={18} height={18} src={icon} alt="Upload attachment" />
          <span className={styles.title}>
            {width <= breakpoint ? titleUploadResponsive : titleUpload}
          </span>
        </Upload>
      </div>
      {fileName && (
        <span className={styles.show_attachment} onClick={onDownload}>
          {fileName}
        </span>
      )}
    </>
  );
};

export default UploadComponent;
