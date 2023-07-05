import type { UploadProps as AntUploadProps } from 'antd';
import { Upload as AntUpload } from 'antd';

export interface UploadProps extends AntUploadProps {}

export const Upload = AntUpload;
