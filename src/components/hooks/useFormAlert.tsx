/**
 * // useFormAlert.ts
 * * This hook returns the errors to show in reset and set password pages
 */

import { useState } from 'react';

const useFormAlert = () => {
  const [showError, setShowError] = useState<any>(false);
  const [messageError, setMessageError] = useState<any>(false);

  const renderAlert = (dataForm: any) => {
    if (dataForm.newPassword === '' && dataForm.confirmationPassword === '') {
      setMessageError('Password doesn’t meet the minimum requirements');
      setShowError(true);
      return true;
    }

    if (
      // eslint-disable-next-line no-useless-escape
      !/^(?!.*\s)(?=.*[A-Z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,}$/.test(
        dataForm.newPassword
      )
    ) {
      setMessageError('Password doesn’t meet the minimum requirements');
      setShowError(true);
      return true;
    }

    if (dataForm.confirmationPassword !== dataForm.newPassword) {
      setMessageError('The passwords do not match');
      setShowError(true);
      return true;
    }

    setMessageError(false);
    setShowError(false);
    return false;
  };

  const closeError = () => setShowError(false);

  const errorInvalidUser = (msg: string) => {
    setMessageError(msg);
    setShowError(true);
    return true;
  };

  return { renderAlert, messageError, showError, closeError, errorInvalidUser };
};

export default useFormAlert;
