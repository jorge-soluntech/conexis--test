import Image from 'next/image';

import { Alert } from '@/components/designSystem';

import styles from './AlertMessage.module.scss';
import type { IAlertMessage } from './IAlertMessage';

/**
 * A component that displays an error message with an icon.
 * @param {Object} props - The component props.
 * @param {string} props.message - The error message to be displayed.
 * @param {Function} props.afterClose - The function to be called after the alert is closed.
 * @param {number} props.widthIcon - The width of the icon to be displayed.
 * @param {number} props.heightIcon - The height of the icon to be displayed.
 * @param {string} props.srcIcon - The source of the icon to be displayed.
 * @param {success} props.success- The boolean that defines if the alert is a success or or a warning alert.
 * @returns {JSX.Element} - A component that displays an error message with an icon.
 */
const AlertMessage = ({
  message,
  afterClose,
  widthIcon = 24,
  heightICon = 24,
  srcIcon = '/assets/icons/alert_error.svg',
  success = false,
}: IAlertMessage.IProps): JSX.Element => {
  return (
    <Alert
      showIcon
      closable
      type="error"
      message={message}
      className={success ? styles.success : styles.alert}
      afterClose={() => afterClose()}
      icon={
        <Image
          alt="Alert"
          src={srcIcon}
          width={widthIcon}
          height={heightICon}
        />
      }
    />
  );
};

export default AlertMessage;
