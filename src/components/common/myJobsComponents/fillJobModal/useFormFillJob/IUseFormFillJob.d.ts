declare namespace IUseFormFillJob {
  export interface Props {
    rejectFailedSubmissions: boolean;
    setRejectFailedSubmissions: (value: boolean) => void;
    reasonCancelation: string;
    setReasonCancelation: (e: string) => void;
  }
}

export { IUseFormFillJob };
