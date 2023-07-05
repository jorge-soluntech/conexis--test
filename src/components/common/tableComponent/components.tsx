import { Switch } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import type { MouseEvent, ReactNode } from 'react';
import { forwardRef } from 'react';

import Filter from '@/assets/filter';
import styles from '@/components/common/businessUnitsComponents/tableBusinessUnits/TableBusinessUnits.module.scss';

import type { CustomColumn } from '../crudElemnts/Cell/types';
import RowActionButton from './rowActionComponents/RowActionButton';

export type ActionsRenderFunction = (value: any, record: any) => ReactNode;

export type ActionsEditFunction = (href: string) => ActionsRenderFunction;

export type ActionsAcceptRejectFunction = (custom: {
  buttonText: string[];
  onClick: (event: MouseEvent) => void;
}) => ActionsRenderFunction;

type IconImageProps = {
  alt: string;
  src: string;
  width?: number;
  height?: number;
  className?: string | undefined;
};

// TODO:: check if we should move components,
// into their own respective files for all table components

export const IconImage = forwardRef<HTMLImageElement, IconImageProps>(
  ({ alt, className, width = 16, height = 16, src }, ref) => {
    return (
      <Image
        {...{
          alt,
          src,
          ref,
          width,
          height,
          className,
        }}
      />
    );
  }
);
IconImage.displayName = 'IconImage';

// eslint-disable-next-line react/display-name
export const ActionsEdit: ActionsEditFunction = (href) => (_value, record) => {
  return (
    <Link href={`${href}/${record.key}`} passHref>
      <a>
        <IconImage
          alt="edit"
          src="/assets/icons/edit.svg"
          className={styles.wrapperLinkActions}
        />
      </a>
    </Link>
  );
};

export const ActionsShow =
  // eslint-disable-next-line react/display-name
  (href: string, dataIndex: string) => (value: any, record: any) => {
    return (
      <Link href={`${href}/${record[dataIndex]}`} passHref>
        <a className={styles.wrapperLinkActions}>{value}</a>
      </Link>
    );
  };

export const FilterIcon = (filtered: boolean) => {
  return (
    <Filter height={16} width={16} fill={filtered ? '#96bc33' : '#BFBFBF'} />
  );
};

export const RenderSwitch =
  (
    onChange: (key: string) => void,
    trueText = 'Active',
    falseText = 'Inactive'
  ) =>
  // eslint-disable-next-line react/display-name
  (status: boolean, record: any) => {
    return (
      <div style={{ minWidth: '104px' }}>
        <Switch
          style={{
            backgroundColor: status ? '#96BC33' : '#BFBFBF',
          }}
          size="small"
          checked={status}
          onChange={() => {
            onChange(record.key);
          }}
        />
        <span
          className={styles.userStatus}
          style={{ color: status ? '#303336' : '#888E95' }}
        >
          {status ? trueText : falseText}
        </span>
      </div>
    );
  };

export const ExpandIcon = ({
  expanded,
  onExpand,
  record,
}: {
  expanded: boolean;
  onExpand: any;
  record: any;
}) => {
  if (record.details === null) {
    return null;
  }

  return expanded ? (
    <div className={'contracted_row_icon'} onClick={(e) => onExpand(record, e)}>
      ........
    </div>
  ) : (
    <div className={'expanded_row_icon'} onClick={(e) => onExpand(record, e)}>
      ........
    </div>
  );
};

export const ActionAcceptReject: ActionsAcceptRejectFunction =
  function ActionAcceptReject(custom: CustomColumn['actionAcceptReject']) {
    const Component = (record: any) =>
      custom.buttonText.slice(0, 2).map((item: string, index: number) => (
        <RowActionButton
          key={index}
          {...{
            buttonText: item,
            onClick: custom.onClick,
            id: `${record.id}`,
          }}
        />
      ));

    Component.displayName = 'ActionAcceptReject';
    return Component;
  };
