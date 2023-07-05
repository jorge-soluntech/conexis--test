import type ReactNode from 'react';

declare namespace ISuccessComponent {
  export interface IProps {
    title: ReactNode;
    subtitle?: ReactNode;
    textButton: string;
    route: string;
  }
}

export { ISuccessComponent };
