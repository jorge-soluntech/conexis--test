declare namespace IDots {
  export interface IProps {
    jobId: string;
    status: string;
    dropdownVisible: boolean;
    handleModalDispatch: (key: string, jobId: string) => void;
    handleDropdownVisibleChange: (value: boolean) => void;
  }
}

export { IDots };
