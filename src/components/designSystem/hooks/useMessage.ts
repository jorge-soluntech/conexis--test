import { message as antMessage } from 'antd';
import type { ConfigOptions, MessageInstance } from 'antd/es/message/interface';
import type { JSXElementConstructor, ReactElement } from 'react';

export const message = antMessage;

export type UseMessage = (
  notificationConfig?: ConfigOptions | undefined
) => readonly [
  MessageInstance,
  ReactElement<any, string | JSXElementConstructor<any>>
];
export const { useMessage } = message;
