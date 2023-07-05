declare namespace ITableWorkShifts {
  export interface IData {
    key: string;
    workShiftDescription: string;
    startTime: string;
    endTime: string;
    workDays: string;
    status: boolean;
  }
  export interface IProps {
    loading: boolean;
    dataUser: IData[];
  }
}

export { ITableWorkShifts };
