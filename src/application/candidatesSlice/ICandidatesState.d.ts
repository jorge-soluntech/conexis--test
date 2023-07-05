declare namespace ICandidates {
  export interface IState {
    id_tenant: number;
    first_name: string | null;
    last_name: string | null;
    email: string | null;
    worker_status: string | null;
  }

  export interface IAllCandidates {
    key: string;
    fullName: string;
    email?: string;
    workerStatus: string;
  }
  export interface IUpdateCandidate {
    worker_status: string;
  }
}

export { ICandidates };
