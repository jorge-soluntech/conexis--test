import type { Rule } from 'antd/es/form';
import type { FieldError, RuleType, Store } from 'rc-field-form/es/interface';
import { useState } from 'react';

import locales from '@/locales/en/en.json';
import isValidEmail from '@/utils/isValidEmail';

/**
 * Custom hook to validate form fields.
 *
 * @returns an object containing the following properties:
 * - showError a boolean to indicate whether the error message should be displayed.
 * - setShowError a function to set the showError state.
 * - messageError a string that represents the error message.
 * - emptyFieldValidator a function that receives a string value and a text error and validates if the value is empty.
 * - emailFieldValidator a function that receives a string value and a text error and validates if the value is a valid email.
 * - phoneFieldValidator a function that receives a string value and a text error and validates if the value has a length of at least 10.
 */

const useValidateFields = () => {
  const [showError, setShowError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string>('');

  const { formsCommon } = locales;

  /**
   * Validates if the value is empty.
   *
   * @param value - The value to validate.
   * @param textError - The error message to display if the value is empty.
   * @returns A promise that resolves if the value is not empty, or rejects with the error message if the value is empty.
   */
  const emptyFieldValidator = (value: string, textError: string) => {
    if (!value) {
      setMessageError(textError);
      setShowError(true);
      return Promise.reject(textError);
    }
    return Promise.resolve();
  };

  /**
   * Validates if the multi select value is empty.
   *
   * @param value - The Array of values to validate.
   * @param textError - The error message to display if the value length is 0.
   * @returns A promise that resolves if the value is not empty, or rejects with the error message if the value is empty.
   */
  const multiSelectValidator = (value: string[], textError: string) => {
    if (!value || value.length === 0) {
      setMessageError(textError);
      setShowError(true);
      return Promise.reject(textError);
    }
    return Promise.resolve();
  };

  /**
   * Validates if the value is a valid email.
   *
   * @param value - The value to validate.
   * @param textError - The error message to display if the value is not a valid email.
   * @returns A promise that resolves if the value is a valid email,
   * or rejects with the error message if the value is not a valid email.
   */
  const emailFieldValidator = (value: string, textError: string) => {
    if (value && isValidEmail(value)) {
      return Promise.reject(textError);
    }
    return Promise.resolve();
  };

  /**
   * Validates if the email is empty.
   *
   * @param email - The value of email.
   * @returns null if email is empty otherwise return email,
   */
  const checkEmptyEmailField = (email: string) => {
    if (email === '' || email === null) return null;
    return email;
  };

  /**
   * Validates if the value has a length of at least 10.
   *
   * @param value - The value to validate.
   * @param textError - The error message to display if the value has a length less than 10.
   * @returns A promise that resolves if the value has a length of at least 10,
   * or rejects with the error message if the value has a length less than 10.
   */
  const phoneFieldValidator = (value: string, textError: string) => {
    if (value && value.toString().length < 14) {
      return Promise.reject(textError);
    }
    return Promise.resolve();
  };

  /**
   *This function creates and returns an Ant Design form validation rule object.

   *@param {boolean} required - Flag indicating whether the field is required.
   *@param {string} type - The type of validation rule to use.
   *@param {Function} validator - A validation function to be called when the rule is checked.
   *@param {string} errorMessage - The error message to display if the rule fails.
   *@returns {object} - An Ant Design form validation rule object.
   */
  const ruleValidator = (
    required: boolean,
    type: RuleType,
    validator: Function,
    errorMessage: string
  ): Rule => ({
    type,
    required,
    validator: async (_rule: any, value: any) => validator(value, errorMessage),
  });

  const activateErrorAlert = (state: boolean, textError?: string) => {
    setMessageError(textError as string);
    setShowError(state);
  };

  /**
   * Validates if the value has a length of at least 10.
   *
   * @param value - The value to validate.
   * @param textError - The error message to display if the value has a length less than 10.
   * @param emptyFields - The array with the key of mandatory fields.
   * @returns A promise that rejects if the fields are all empty,
   * or if some fields are empty greater than one.
   * or if just one field is empty.
   * or resolves if all is filled correctly.
   */
  const validatorEmptyAllFields = (
    value: string,
    textError: string,
    emptyFields?: any[]
  ) => {
    const hasAllEmptyFields = emptyFields?.every(
      (field) => !field || field?.length === 0
    );

    if (hasAllEmptyFields) {
      activateErrorAlert(true, formsCommon.errors.textErrorEmptyFields);
      return Promise.reject();
    }

    const someEmptyFields = (field: any) => !field || field?.length === 0;

    const hasSomeEmptyFields =
      !value && emptyFields!.filter(someEmptyFields).length > 1;

    if (hasSomeEmptyFields) {
      activateErrorAlert(true, formsCommon.errors.textErrorEmptyFields);
      return Promise.reject();
    }

    // Verified if some (individual) field is empty
    if (!value) {
      activateErrorAlert(true, textError);
      return Promise.reject();
    }
    return Promise.resolve();
  };

  /**
   * Validates if the mandatories Fields are the same missing when the
   * onFinishFailed functions is executed after a form fails due to required fields
   *
   * @param errorInfo - The param from the onFinishFailed.
   * @param mandatoriesFields - The string array of mandatories fields 

   * @returns an array with the errors messages, the firstone wil be:

   * The fields are mandatory. Please make sure to fill out all mandatory fields before submitting the form.
   */
  const validateMandatoryEmptyFields = ({
    errorInfo,
    mandatoriesFields,
  }: {
    errorInfo: Store;
    mandatoriesFields: string[];
  }) => {
    const errorFields = errorInfo.errorFields as FieldError[];
    const newErrors: string[] = [];

    /** Show the mandatoryEmptyfields error when the number of errors and the errors are equal to the missing inputs */
    const numberOfMandatoryFields = mandatoriesFields.length;

    if (numberOfMandatoryFields === errorFields.length) {
      const errorFieldNames = errorFields.map((item: Store) => item.name[0]);
      if (
        JSON.stringify(mandatoriesFields) === JSON.stringify(errorFieldNames)
      ) {
        newErrors.push(formsCommon.errors.textErrorMandatoryEmptyFields);
      }
    }
    errorFields.forEach(({ name, errors }) => {
      if (name && errors?.[0]) {
        newErrors.push(errors[0]);
      }
    });
    return newErrors;
  };

  return {
    showError,
    setShowError,
    messageError,
    ruleValidator,
    multiSelectValidator,
    emptyFieldValidator,
    emailFieldValidator,
    phoneFieldValidator,
    validatorEmptyAllFields,
    checkEmptyEmailField,
    activateErrorAlert,
    validateMandatoryEmptyFields,
  };
};

export default useValidateFields;
