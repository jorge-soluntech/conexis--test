declare namespace IWorkShifts {
  export interface IState {
    work_shift_description: string | null;
    start_time: string | null;
    end_time: string | null;
    work_days: string[];
    id_tenant: number;
    buyer_id: string;
  }

  export interface IAllWorkShifts {
    key: string;
    workShiftDescription: string;
    startTime: string;
    endTime: string;
    workDays: string;
    status: boolean;
  }

  export interface IUpdateWorkShift {
    status?: string;
  }
}

export { IWorkShifts };
