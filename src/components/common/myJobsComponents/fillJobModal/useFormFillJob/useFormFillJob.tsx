import { Input, Select } from 'antd';

import { OPTIONS_REJECT_FAILED_SUBMISSIONS } from '@/consts/myJobs';
import locales from '@/locales/en/en.json';

import type { IUseFormFillJob } from './IUseFormFillJob';
import styles from './useFormFillJob.module.scss';

const {
  myJobs: { fillJob },
} = locales;

const useFormFillJobModal = ({
  rejectFailedSubmissions,
  setRejectFailedSubmissions,
  reasonCancelation,
  setReasonCancelation,
}: IUseFormFillJob.Props) => {
  const formFillJob = (
    <>
      <span className={styles.label}>{fillJob.label}</span>
      <Select
        size="large"
        maxTagCount="responsive"
        className={styles.select}
        optionFilterProp="children"
        value={rejectFailedSubmissions}
        onChange={(value) => setRejectFailedSubmissions(value)}
        options={OPTIONS_REJECT_FAILED_SUBMISSIONS}
      />

      {rejectFailedSubmissions && (
        <div className={styles.wrapper_cancelation}>
          <span className={styles.label}>{fillJob.reasonCancelation}</span>
          <Input.TextArea
            size="large"
            value={reasonCancelation}
            placeholder={fillJob.placeholder}
            autoSize={{ minRows: 3, maxRows: 6 }}
            onChange={(e) => setReasonCancelation(e.target.value)}
          />
        </div>
      )}
    </>
  );

  return { formFillJob };
};

export default useFormFillJobModal;
