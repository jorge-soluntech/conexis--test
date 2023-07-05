import { Form } from 'antd';
import { useEffect, useState } from 'react';

import {
  setDataBuyer,
  setStepBuyer,
} from '@/application/buyersSlice/buyersSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';

const useTaxInformationForm = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const { dataBuyer } = useAppSelector((state) => state.buyers);

  const [showError, setShowError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string>('');

  useEffect(() => {
    form.setFieldsValue(dataBuyer);
  }, []);

  const onChange = (value: string, field: string): void => {
    form.setFieldValue(field, parseInt(value, 10));
  };

  const clearOwnerFields = () => {
    form.setFieldsValue({
      vatAmount: null,
      salesTaxAmount: null,
      otherTaxAmount: null,
    });
  };

  const isWithinRange = (value: number): boolean => {
    if (value >= 0 && value <= 100) {
      return true;
    }
    return false;
  };

  const validateFields = (values: any) => {
    if (values.vatAmount && !isWithinRange(values.vatAmount)) {
      setMessageError('The VAT/Federal field must be between 0 and 100');
    } else if (values.salesTaxAmount && !isWithinRange(values.salesTaxAmount)) {
      setMessageError(
        'The Provincial/State sales tax field must be between 0 and 100'
      );
    } else if (values.otherTaxAmount && !isWithinRange(values.otherTaxAmount)) {
      setMessageError('The Other field must be between 0 and 100');
    }
    setShowError(true);
  };

  const onBack = () => {
    dispatch(setStepBuyer(0));
    dispatch(setDataBuyer(form.getFieldsValue()));
  };

  const handleContinue = (values: any): void => {
    setShowError(false);
    dispatch(setDataBuyer(values));
    dispatch(setStepBuyer(2));
  };

  const onFinishFailed = (values: any): void => {
    validateFields(values.values);
  };

  return {
    form,
    onChange,
    showError,
    setShowError,
    messageError,
    clearOwnerFields,
    handleContinue,
    onFinishFailed,
    isWithinRange,
    onBack,
  };
};

export default useTaxInformationForm;
