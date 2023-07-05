import { Input } from 'antd';

import locales from '@/locales/en/en.json';

import type { IUseFormCancelJob } from './IUseFormCancelJob';
import styles from './useFormJobModal.module.scss';

const {
  myJobs: { cancelJob },
} = locales;

const useFormCancelJob = ({
  reasonCancelation,
  setReasonCancelation,
}: IUseFormCancelJob.Props) => {
  const formCancelJob = (
    <>
      <div className={styles.wrapper_cancelation}>
        <span className={styles.label}>{cancelJob.label}</span>
        <Input.TextArea
          size="large"
          value={reasonCancelation}
          placeholder={cancelJob.placeholder}
          autoSize={{ minRows: 3, maxRows: 6 }}
          onChange={(e) => setReasonCancelation(e.target.value)}
        />
      </div>
    </>
  );

  return { formCancelJob };
};

export default useFormCancelJob;
