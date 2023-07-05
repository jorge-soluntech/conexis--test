import { Button } from 'antd';
import type { FC } from 'react';

import locales from '@/locales/en/en.json';

import styles from './FooterModal.module.scss';
import type { IFooterModal } from './IFooterModal';

const {
  components: { formSuccessModal },
} = locales;

const FooterModal: FC<IFooterModal.Props> = ({
  showSuccess,
  isLoading,
  handleOkSuccess,
  handleCancel,
  handleSave,
  titleSave = formSuccessModal.saveButton,
  titleCancel = formSuccessModal.cancelButton,
}) => {
  let footer;
  if (showSuccess) {
    footer = (
      <div className={styles.footer_success}>
        <Button key="cancel" type="default" onClick={handleOkSuccess}>
          {formSuccessModal.successButton}
        </Button>
      </div>
    );
  } else {
    footer = (
      <div className={styles.footer}>
        <Button key="cancel" type="text" onClick={handleCancel}>
          {titleCancel}
        </Button>
        <Button
          key="save"
          type="default"
          loading={isLoading}
          onClick={handleSave}
        >
          {titleSave}
        </Button>
      </div>
    );
  }

  return <div>{footer}</div>;
};

export default FooterModal;
