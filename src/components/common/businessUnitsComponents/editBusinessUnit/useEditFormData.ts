import type { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '@/application/authContext';
import { BusinessUnitServices } from '@/infrastructure/services/BusinessUnitsServices';
import locales from '@/locales/en/en.json';

import type { IEditBusinessUnit } from './IEditBusinessUnit';

const { formsCommon } = locales;

const useEditFormData = () => {
  const router = useRouter();

  const [businessUnitId] = useState<string>(
    router.query.businessUnitId as string
  );
  const [showError, setShowError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [successResult, setSuccessResult] = useState<boolean>(false);
  const { dataUser } = useContext(AuthContext);
  const [messageError, setMessageError] = useState<string>(
    formsCommon.errors.required
  );
  const [detailsBusinessUnit, setDetailBusinessUnit] =
    useState<IEditBusinessUnit.IDetailBusinessUnit>({
      id: '',
      location: '',
      businessUnitNumber: '',
    });
  const [fieldsValue, setFieldsValue] =
    useState<IEditBusinessUnit.FieldsValues>();
  const [loadingFormData, setLoadingFormData] = useState<boolean>(false);

  const businessUnitServices = new BusinessUnitServices(router);

  useEffect(function getEditFormData() {
    setLoadingFormData(true);

    const getBusinessUnitEdit = async () => {
      businessUnitServices
        .getBusinessUnitById(businessUnitId)
        .then((response) => {
          const { data } = response;
          setDetailBusinessUnit({
            id: data.id_number,
            location: data.location,
            businessUnitNumber: data.business_unit_number,
          });
          setFieldsValue({
            firstName: data.first_name,
            lastName: data.last_name,
            primaryEmail: data.primary_email,
            region: data.region,
            address: data.address,
            primaryPhone: data.primary_phone,
          });
          setLoadingFormData(false);
        })
        .catch((err: AxiosError<any>) => {
          if (err.request.status === 400) {
            setMessageError(err.response?.data?.message);
            setShowError(true);
          }

          if (err.request.status === 500) {
            setMessageError(formsCommon.errors.main_error);
            setShowError(true);
          }
        });
    };

    getBusinessUnitEdit();
  }, []);

  return {
    loadingFormData,
    businessUnitId,
    fieldsValue,
    showError,
    phoneError,
    successResult,
    dataUser,
    messageError,
    detailsBusinessUnit,
    setMessageError,
    setShowError,
    setPhoneError,
    setSuccessResult,
  };
};

export default useEditFormData;
