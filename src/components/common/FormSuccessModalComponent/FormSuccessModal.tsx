import { Modal } from 'antd';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

import AlertSuccess from '@/assets/alertSuccess';
import { useAppSelector } from '@/components/hooks/storeHooks';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { MOBILE_BREAKPOINT } from '@/consts/breakpoints';

import FooterModal from './footerModal/FooterModal';
import styles from './FormSuccessModal.module.scss';
import type { IFormSuccessModal } from './IFormSuccessModal';

const FormSuccessModal: FC<IFormSuccessModal.Props> = ({
  title,
  isModal,
  children,
  isLoading,
  centered = true,
  closable = false,
  showSuccess = false,
  titleSuccess,
  handleSave,
  handleCancel,
  handleOkSuccess,
  titleSave,
  titleCancel,
}) => {
  const { width = 0 } = useWindowDimensions();
  const [modalStyles, setModalStyles] = useState<React.CSSProperties>({});
  const { collapseSider, widthCollapseSider } = useAppSelector(
    (state) => state.ui
  );

  useEffect(() => {
    if (collapseSider) {
      setModalStyles({});
    } else if (width >= MOBILE_BREAKPOINT) {
      setModalStyles({ left: `${widthCollapseSider / 2}px` });
    }
  }, [collapseSider, widthCollapseSider, width]);

  return (
    <Modal
      open={isModal}
      closable={closable}
      centered={centered}
      style={modalStyles}
      className={styles.modal}
      title={
        !showSuccess && <span className={styles.title_modal}>{title}</span>
      }
      onCancel={handleCancel}
      footer={
        <FooterModal
          showSuccess={showSuccess}
          isLoading={isLoading}
          handleOkSuccess={handleOkSuccess}
          handleCancel={handleCancel}
          handleSave={handleSave}
          titleSave={titleSave}
          titleCancel={titleCancel}
        />
      }
    >
      {showSuccess ? (
        <div className={styles.wrapper_success}>
          <AlertSuccess />
          <span className={styles.title_success}>{titleSuccess}</span>
        </div>
      ) : (
        <>{children}</>
      )}
    </Modal>
  );
};

export default FormSuccessModal;
