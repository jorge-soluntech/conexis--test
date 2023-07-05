import { Form } from 'antd';
import router from 'next/router';
import type { Store } from 'rc-field-form/es/interface';
import { useEffect, useState } from 'react';

import {
  setDataSupplier,
  setStepSupplier,
} from '@/application/supplierSlice/supplierSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import useValidateFields from '@/components/hooks/useValidateFields';
import { ACTIONS } from '@/consts/permissions';
import { FORM_FIELDS } from '@/consts/suppliers';
import { SupplierServices } from '@/infrastructure/services/SupplierServices';
import locales from '@/locales/en/en.json';

import type { ActionsProps } from '../../suppliersForm/SupplierForm';

const {
  suppliers: { stepOne },
} = locales;

/**
 * Custom hook to handle supplier information form logic.
 *
 * @param formType - Indicates if the form is for creating or editing a supplier.
 * @returns Object containing form, error messages, and functions to handle form submission.
 */

const useSupplierInformation = ({ action }: ActionsProps) => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const supplierServices = new SupplierServices(router);
  const { dataSupplier, supplierId } = useAppSelector(
    (state) => state.suppliers
  );

  const [errors, setErrors] = useState<string[]>([]);
  const [showError, setShowError] = useState<boolean>(false);

  const { validateMandatoryEmptyFields } = useValidateFields();

  useEffect(() => {
    form.setFieldsValue(dataSupplier);
  }, [dataSupplier, form]);

  /**
   * Handles the form submission when the user clicks on the continue button.
   *
   * @param values - The form values submitted by the user.
   *
   */
  const handleContinue = (values: Store): void => {
    setShowError(false);
    let validateNameSupplier: [string, string] = [
      values.supplier_company_name,
      '',
    ];

    /**
     * Code to validate when editing a supplier.
     */
    if (action !== ACTIONS.create) {
      validateNameSupplier = [values.supplierCompanyName, supplierId];
    }

    /**
     * Before continuing, validate that the supplier company name does not exist
     */
    supplierServices
      .validateSupplierCompanyName(...validateNameSupplier)
      .then((response) => {
        const { valid } = response.data;
        if (valid) {
          dispatch(
            setDataSupplier({
              ...(values as any),
              work_categories_covered: [values.work_categories_covered].flat(),
            })
          );
          dispatch(setStepSupplier(1));
        } else {
          setErrors([stepOne.supplierCompanyNameAlreadyExistsError]);
          setShowError(true);
        }
      });
  };

  /**
   * This function is called when the form fails to submit.
   * It retrieves the error fields and updates the state with
   * the new errors and sets the showError state to true.
   *
   * @param {Store} errorInfo - Object containing the error information returned by the form.
   */
  const onFinishFailed = (errorInfo: Store): void => {
    const mandatoriesFields = Object.keys(FORM_FIELDS.stepOne.mandatories);
    const newErrors = validateMandatoryEmptyFields({
      errorInfo,
      mandatoriesFields,
    });
    setErrors(newErrors);
    setShowError(true);
  };

  return {
    form,
    errors,
    showError,
    setShowError,
    handleContinue,
    onFinishFailed,
  };
};

export default useSupplierInformation;
