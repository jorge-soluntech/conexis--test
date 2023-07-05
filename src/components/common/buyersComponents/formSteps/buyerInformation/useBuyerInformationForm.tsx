/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable prefer-destructuring */
import { Form } from 'antd';
import router from 'next/router';
import type { Store } from 'rc-field-form/es/interface';
import { useEffect, useState } from 'react';

import {
  setDataBuyer,
  setStepBuyer,
} from '@/application/buyersSlice/buyersSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import useValidateFields from '@/components/hooks/useValidateFields';
import { FORM_FIELDS } from '@/consts/buyers';
import RequestService from '@/infrastructure/services';
import { BuyerServices } from '@/infrastructure/services/BuyerServices';
import isValidEmail from '@/utils/isValidEmail';

const useBuyerInformationForm = (formType: string) => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const buyerServices = new BuyerServices(router);
  const { dataBuyer } = useAppSelector((state) => state.buyers);

  const [errors, setErrors] = useState<string[]>([]);
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [optionsAccountOwner, setOptionsAccountOwner] = useState<any>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const { validateMandatoryEmptyFields } = useValidateFields();

  useEffect(() => {
    form.setFieldsValue(dataBuyer);
    function getUsersData() {
      RequestService.getUsers(
        '',
        'MSP Administrator&user_role=Program Manager'
      ).then((response: any) => {
        const result: any = response.data.data.users.map(
          ({ id, first_name, last_name }: any) => ({
            value: id,
            label: `${first_name} ${last_name}`,
          })
        );
        setOptionsAccountOwner(result);
      });
    }

    getUsersData();
  }, []);

  const handleSelfServeChange = (value: boolean): void => {
    dispatch(setDataBuyer({ isSelfServed: value } as any));
    if (value) {
      dispatch(
        setDataBuyer({
          bypassJobApproval: false,
          bypassSubmissionApproval: false,
          requireContractApproval: false,
          accessToApplicantTracker: false,
          contractApproverId: null,
        } as any)
      );
    }
  };

  const clearOwnerFields = () => {
    const { currency, workWeekDefinition } = form.getFieldsValue();
    /* It must be validated if it is being edited to prevent the currency and
    workWeekDefinition fields from being removed when cleaning the form */
    form.setFieldsValue({
      clientCompanyName: null,
      legalNameForInvoicing: null,
      streetAddressLine1: null,
      country: null,
      city: null,
      provinceRegion: null,
      postalCode: null,
      primaryContactName: null,
      primaryContactEmail: null,
      primaryContactPhone: null,
      accountsPayableContactName: null,
      accountsPayableContactEmail: null,
      accountOwnerId: null,
      workWeekDefinition: formType === 'create' ? null : workWeekDefinition,
      currency: formType === 'create' ? null : currency,
      paymentTerms: null,
      contractExpiryDate: null,
      isSelfServed: null,
    });
  };

  const handleContinue = (values: any): void => {
    setShowError(false);
    let validateNameBuyerInputs: [string, string | undefined] = [
      values.clientCompanyName,
      undefined,
    ];

    if (formType !== 'create') {
      validateNameBuyerInputs = [values.clientCompanyName, dataBuyer?.id];
    }
    setLoading(true);
    buyerServices
      .validateNameBuyer(...validateNameBuyerInputs)
      .then((response) => {
        const { valid } = response.data;
        if (valid) {
          dispatch(setDataBuyer(values));
          dispatch(setStepBuyer(1));
          setLoading(false);
        } else {
          setErrors([
            'This buyer already exists. Please use a different name.',
          ]);
          setShowError(true);
          setLoading(false);
        }
      });
  };

  const validateField = async (
    value: string,
    type: 'required' | 'email' | 'phone',
    error: string
  ): Promise<void> => {
    if (type === 'required' && !value) {
      return Promise.reject(error);
    }
    if (type === 'email' && value && isValidEmail(value)) {
      return Promise.reject(error);
    }
    if (type === 'phone') {
      if (value && value.length < 10) {
        setPhoneError(true);
        return Promise.reject(error);
      }
      setPhoneError(false);
    }
    return Promise.resolve();
  };

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
    phoneError,
    showError,
    setShowError,
    clearOwnerFields,
    handleContinue,
    onFinishFailed,
    optionsAccountOwner,
    validateField,
    isLoading,
    handleSelfServeChange,
  };
};

export default useBuyerInformationForm;
