import { Form } from 'antd';
import type { Store } from 'rc-field-form/es/interface';
import { useEffect, useState } from 'react';

import {
  setDataBuyer,
  setStepBuyer,
} from '@/application/buyersSlice/buyersSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import RequestService from '@/infrastructure/services';
import locales from '@/locales/en/en.json';

const {
  consts: { catchError },
} = locales;

/**
 * Hook for managing the approval information form.
 *
 * @returns Object with the properties and functions of the form.
 *
 * @remarks
 * The contractApproverId field is only visible if requireContractApproval is true
 */
const useApprovalInformationForm = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const { dataBuyer } = useAppSelector((state) => state.buyers);

  const [errors, setErrors] = useState<string[]>([]);
  const [showError, setShowError] = useState<boolean>(false);
  const [approversForContractsList, setApproversForContractsList] = useState<
    { value: string; label: string }[]
  >([]);

  const getUsersData = async () => {
    try {
      const response = await RequestService.getUsers(
        '',
        'MSP Administrator&user_role=Program Manager'
      );
      const approversList: any = response.data.data.users.map(
        ({ id, first_name, last_name }: any) => ({
          label: `${first_name} ${last_name}`,
          value: id,
        })
      );
      setApproversForContractsList(approversList);
    } catch (error) {
      setErrors([catchError]);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  useEffect(() => {
    form.setFieldsValue(dataBuyer);
  }, []);

  const handleRequireContractApprovalChange = (value: boolean): void => {
    dispatch(setDataBuyer({ requireContractApproval: value } as any));
    if (!value) {
      dispatch(setDataBuyer({ contractApproverId: null } as any));
    }
  };

  const handleContractApproverChange = (value: string): void => {
    const selectedApprover = approversForContractsList.find(
      (approver) => approver.value === value
    );
    if (selectedApprover) {
      form.setFieldsValue({ contractApproverId: selectedApprover });
    }
  };

  const handleContinue = (values: any): void => {
    dispatch(setDataBuyer(values));
    dispatch(setStepBuyer(3));
  };

  const onFinishFailed = (errorInfo: Store): void => {
    const { errorFields } = errorInfo;
    const newErrors: string[] = [];
    errorFields.forEach((item: any) => {
      if (item.name && item.errors) newErrors.push(item.errors[0]);
    });
    setErrors(newErrors);
    setShowError(true);
  };

  const onBack = () => {
    dispatch(setStepBuyer(1));
    dispatch(setDataBuyer(form.getFieldsValue()));
  };

  return {
    form,
    onBack,
    errors,
    showError,
    setShowError,
    handleContinue,
    onFinishFailed,
    approversForContractsList,
    handleContractApproverChange,
    handleRequireContractApprovalChange,
  };
};

export default useApprovalInformationForm;
