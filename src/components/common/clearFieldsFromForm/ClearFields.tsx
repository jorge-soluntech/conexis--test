import type { FC } from 'react';

import locales from '@/locales/en/en.json';

import styles from './clearFields.module.scss';
import type { IClearFields } from './IClearFields';

export const ClearFields: FC<IClearFields.IProps> = ({ title, form }) => {
  const { formsCommon } = locales;
  return (
    <div className={styles.form_subtitle_container}>
      <div className={styles.form_small_title}> {title}</div>
      <button
        type="button"
        className={styles.form_clear_fields}
        onClick={() => form.resetFields()}
      >
        {formsCommon.clearFields}
      </button>
    </div>
  );
};
