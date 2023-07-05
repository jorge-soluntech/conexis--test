import type { ModalProps as AntModalProps } from 'antd';
import { Modal as AntModal } from 'antd';

export interface ModalProps extends AntModalProps {}

export const Modal = AntModal;
