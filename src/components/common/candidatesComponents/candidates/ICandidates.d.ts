import type { ICandidates as ICandidatesState } from '@/application/candidatesSlice/ICandidatesState';

declare namespace ICandidates {
  export interface IProps {
    currentUserRoleName: string | null;
    allCandidates: ICandidatesState.IAllCandidates[];
    filteredData: ICandidatesState.IAllCandidates[];
    handleSearch: (input: string) => void;
    infoCandidate: ICandidatesState.IAllCandidates;
    loading: boolean;
    searchText: boolean;
  }
}

export { ICandidates };
