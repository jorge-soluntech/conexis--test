import type { FC } from 'react';
import React from 'react';

import { LeftOutlined } from '@/components/designSystem';

import styles from './backButton.module.scss';
import type { IBackButton } from './IBackButton';

/**
 * A component that displays the BackButton.
 * @param {string} title - The title parameter.
 * @param {Function} onClick - The passed function of the onClick paramenter.
 *
 * @returns {JSX.Element} - A component that displays the BackButton.
 */

const BackButton: FC<IBackButton.IProps> = ({ title, onClick }) => {
  return (
    <div className={styles.back} onClick={onClick}>
      <LeftOutlined />
      &nbsp; {title}
    </div>
  );
};

export default BackButton;
