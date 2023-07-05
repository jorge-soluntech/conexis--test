import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import type { FC } from 'react';

import styles from './rowActionButton.module.scss';

export interface RowActionButtonProps extends ButtonProps {
  buttonText: string;
  id: string;
}

const RowActionButton: FC<RowActionButtonProps> = ({
  buttonText,
  id,
  loading,
  onClick,
}: RowActionButtonProps) => {
  return (
    <Button
      onClick={onClick}
      type="text"
      loading={loading}
      id={id}
      className={styles.rowActionButton}
    >
      {buttonText}
    </Button>
  );
};

export default RowActionButton;
