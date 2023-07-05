import type { FormInstance } from 'antd';
import { useEffect } from 'react';

import { useAppSelector } from '@/components/hooks/storeHooks';
import { levels } from '@/consts';
/**
 * Custom hook that handles the form logic for creating users
 *
 * @param form - Ant Design form instance (`FormInstance`).
 * @param possibleBuyers - List of possible buyers. Can be an array of objects, an array of strings, or any other type.
 * @returns `null`.
 *
 * @remarks
 * When creating a buyer-level user, the default buyer should be the first option of the list of possible buyers
 */
const useFormUser = (
  form: FormInstance,
  onSelectBuyer: Function,
  possibleBuyers: object[] | string[] | any
) => {
  const { userLevel } = useAppSelector((state) => state.role);
  useEffect(() => {
    if (
      userLevel === levels.buyer &&
      Object.keys(possibleBuyers[0]).length !== 0
    ) {
      form.setFieldValue('buyer', possibleBuyers[0].value);
      onSelectBuyer(possibleBuyers[0].value);
    }
  }, [possibleBuyers]);
  return null;
};
export default useFormUser;
