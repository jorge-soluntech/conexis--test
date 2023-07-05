import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { readCandidates } from '@/application/candidatesSlice/candidatesSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import useSearchColumns from '@/components/hooks/useSearchColumns';
import { workers } from '@/consts';

const useCandidates = () => {
  const [inputSearch, setInputSearch] = useState<string>('');

  const dispatch = useAppDispatch();
  const { allCandidates, infoCandidate, loading } = useAppSelector(
    (state) => state.candidates
  );

  const { currentUserRoleName } = useAppSelector((state) => state.dashboard);

  const router = useRouter();

  const { filteredData, handleSearchChange, searchText } = useSearchColumns({
    excludeColumns: [workers.EXCLUDE_COLUMNS.workerStatus],
  });

  const handleSearch = (input: string) => {
    setInputSearch(input);
    handleSearchChange(input, allCandidates);
  };

  useEffect(() => {
    if (inputSearch) {
      handleSearchChange(inputSearch, allCandidates);
    }
  }, [allCandidates]);

  useEffect(() => {
    let ignore = false;
    if (!ignore) dispatch(readCandidates({ router }));

    return () => {
      ignore = true;
    };
  }, [currentUserRoleName]);

  return {
    allCandidates,
    currentUserRoleName,
    filteredData,
    handleSearch,
    infoCandidate,
    loading,
    searchText,
  };
};

export default useCandidates;
