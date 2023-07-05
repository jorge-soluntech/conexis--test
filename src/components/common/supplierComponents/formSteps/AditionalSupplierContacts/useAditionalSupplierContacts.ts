import { Form } from 'antd';
import type { Store } from 'rc-field-form/es/interface';
import { useEffect, useState } from 'react';

import {
  setDataSupplier,
  setStepSupplier,
} from '@/application/supplierSlice/supplierSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';

/**
 * Custom hook to handle supplier information form logic.
 *
 * @returns Object containing form, error messages, and functions to handle form submission.
 */

const useAditionalSupplierContacts = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const { dataSupplier } = useAppSelector((state) => state.suppliers);

  const [errors, setErrors] = useState<string[]>([]);
  const [showError, setShowError] = useState<boolean>(false);

  useEffect(() => {
    form.setFieldsValue(dataSupplier);
  }, []);

  /**
   * Handles the form submission when the user clicks on the continue button.
   *
   * @param values - The form values submitted by the user.
   *
   */
  const handleContinue = (values: Store): void => {
    dispatch(setDataSupplier(values as any));
    dispatch(setStepSupplier(2));
  };
  const onBack = () => {
    dispatch(setStepSupplier(0));
  };
  /** Clears the form fields to an initial value */
  const clearFormFields = () => {
    form.resetFields();
  };

  /**
   * This function is called when the form fails to submit.
   * It retrieves the error fields and updates the state with
   * the new errors and sets the showError state to true.
   *
   * @param {Store} errorInfo - Object containing the error information returned by the form.
   */
  const onFinishFailed = (errorInfo: Store): void => {
    const { errorFields } = errorInfo;
    const newErrors: string[] = [];
    errorFields.forEach((item: Store) => {
      if (item.name && item.errors) {
        newErrors.push(item.errors[0]);
      }
    });
    setErrors(newErrors);
    setShowError(true);
  };

  return {
    form,
    errors,
    showError,
    clearFormFields,
    onFinishFailed,
    onBack,
    setShowError,
    handleContinue,
  };
};

export default useAditionalSupplierContacts;
