import useFileDownload from '@/components/hooks/useFileDownload';

import styles from './DownloadAttachment.module.scss';

const DownloadAttachment = ({
  file,
}: {
  file: { name: string; id: string };
}) => {
  const { downloadFile } = useFileDownload();

  return (
    <div
      className={styles.attachment}
      onClick={() => {
        downloadFile(file);
      }}
    >
      {file.name}
    </div>
  );
};

export default DownloadAttachment;
