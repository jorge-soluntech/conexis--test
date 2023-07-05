import { useContext, useMemo } from 'react';

import { AuthContext } from '@/application/authContext';
import { levels } from '@/consts';

import { useAppSelector } from './storeHooks';

const useRenderTitleLoggedAs = () => {
  const { currentUserRoleName } = useAppSelector((state) => state.dashboard);

  const { dataUser } = useContext(AuthContext);
  const { userLevel } = useAppSelector((state) => state.role);

  const renderTitleLoggedAs = useMemo(() => {
    if (userLevel === levels.supplier) {
      return dataUser?.supplier_supplier_company_name;
    }
    return currentUserRoleName;
  }, [userLevel, currentUserRoleName]);

  return { renderTitleLoggedAs };
};

export default useRenderTitleLoggedAs;
