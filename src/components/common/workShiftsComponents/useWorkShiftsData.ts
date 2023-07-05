import router from 'next/router';
import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '@/application/authContext';
import {
  getAllWorkShift,
  setErrorWorkShifts,
} from '@/application/workShiftsSlice/workShiftsSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';

const useWorkShifts = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { allWorkShifts } = useAppSelector((state) => state.workShifts);
  const { dataUser } = useContext(AuthContext);

  const dispatch = useAppDispatch();

  const getWorkShifts = async (): Promise<void> => {
    dispatch(setErrorWorkShifts(false));
    setLoading(true);
    await dispatch(
      getAllWorkShift({
        router,
        id: dataUser?.logged_buyer,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    getWorkShifts();
  }, [dataUser?.logged_buyer]);

  return { allWorkShifts, loading };
};

export default useWorkShifts;
