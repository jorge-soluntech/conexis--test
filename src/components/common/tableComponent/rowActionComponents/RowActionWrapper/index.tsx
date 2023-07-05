import type { ReactNode } from 'react';

import { useMyJobsActions } from '@/components/common/myJobsComponents/myJobs/useMyJobsActions';

type ChildrenRenderProps = {
  dropdownVisible: boolean;
  handleModalDispatch: (key: string, jobId: string) => void;
  handleDropdownVisibleChange: (value: boolean) => void;
};

export type RowActionWrapperProps = {
  children: (item: ChildrenRenderProps) => ReactNode;
};

const RowActionWrapper = ({ children }: RowActionWrapperProps) => {
  const { dropdownVisible, handleModalDispatch, handleDropdownVisibleChange } =
    useMyJobsActions();

  return (
    <>
      {children({
        dropdownVisible,
        handleModalDispatch,
        handleDropdownVisibleChange,
      })}
    </>
  );
};

export default RowActionWrapper;
