import type { AlertProps as AntAlertProps } from 'antd';
import { Alert as AntAlert } from 'antd';

export interface AlertProps extends AntAlertProps {}

export const Alert = AntAlert;
