import { Form } from 'antd';
import type { AxiosError } from 'axios';
import router from 'next/router';
import { useState } from 'react';

import {
  USER_ROLE_BUYER,
  USER_ROLE_MSP,
  USER_ROLE_MSP_EXCEPTIONS,
  USER_ROLE_SUPPLIER,
} from '@/consts/user_create_ui';
import { UserServices } from '@/infrastructure/services/UserServices';

// fetching user data
const userServices = new UserServices(router);

const useSetUserForm = () => {
  const [form] = Form.useForm();

  const [showError, setShowError] = useState<boolean>(false);
  const [multipleBuyer, setMultipleBuyer] = useState<boolean>(false);
  const [showBuyer, setShowBuyer] = useState<boolean>(false);
  const [showUserData, setShowUserData] = useState<boolean>(false);
  const [showSupplier, setShowSupplier] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string>(
    'This field is required'
  );
  const [possibleSupplier, setPossibleSupplier] = useState([{}]);
  const [possibleBuyers, setpossibleBuyers] = useState([{}]);
  const [userRole, setUserRole] = useState('');

  const onSelectRole = async (userRole: string) => {
    form.setFieldsValue({ buyer: undefined });
    form.setFieldsValue({ supplier: undefined });
    setShowUserData(false);
    setShowBuyer(false);
    setShowSupplier(false);

    if (USER_ROLE_SUPPLIER.includes(userRole)) {
      setShowSupplier(true);
      setShowBuyer(false);
      setMultipleBuyer(true);
      userServices
        .getPosibleSelectionsCreateUsersSuppliers(userRole, undefined)
        .then((res: any) => {
          const supplierOptions: any = [];
          // eslint-disable-next-line array-callback-return
          res.data.posibleSuppliers.map((fields: any) => {
            supplierOptions.push({
              label: fields.supplier_company_name,
              value: fields.id,
            });
          });
          setPossibleSupplier(supplierOptions);
        })
        .catch((err: AxiosError<any>) => {
          if (err.request.status === 400) {
            setMessageError(err.response?.data?.message);
            setShowError(true);
          }
          if (err.request.status === 500) {
            setMessageError("There's been an error. Please try again later.");
            setShowError(true);
          }
        });
    } else if (USER_ROLE_MSP.includes(userRole)) {
      setShowSupplier(false);
      setShowBuyer(true);
      setMultipleBuyer(true);

      userServices
        .getPosibleSelectionsCreateUsersBuyers(userRole, undefined, undefined)
        .then((res: any) => {
          const buyerOptions: any = [];
          // eslint-disable-next-line array-callback-return
          res.data.posibleBuyers.map((fields: any) => {
            buyerOptions.push({
              label: fields.client_company_name,
              value: fields.id,
            });
          });
          setpossibleBuyers(buyerOptions);
        })
        .catch((err: AxiosError<any>) => {
          if (err.request.status === 400) {
            setMessageError(err.response?.data?.message);
            setShowError(true);
          }
          if (err.request.status === 500) {
            setMessageError("There's been an error. Please try again later.");
            setShowError(true);
          }
        });
    } else if (USER_ROLE_MSP_EXCEPTIONS.includes(userRole)) {
      setShowSupplier(false);
      setShowBuyer(false);
      setMultipleBuyer(false);
      setShowUserData(true);
    } else if (USER_ROLE_BUYER.includes(userRole)) {
      setShowSupplier(false);
      setShowBuyer(true);
      setMultipleBuyer(false);
      userServices
        .getPosibleSelectionsCreateUsersBuyers(userRole, undefined, undefined)
        .then((res: any) => {
          const buyerOptions: any = [];
          // eslint-disable-next-line array-callback-return
          res.data.posibleBuyers.map((fields: any) => {
            buyerOptions.push({
              label: fields.client_company_name,
              value: fields.id,
            });
          });
          setpossibleBuyers(buyerOptions);
        })
        .catch((err: AxiosError<any>) => {
          if (err.request.status === 400) {
            setMessageError(err.response?.data?.message);
            setShowError(true);
          }
          if (err.request.status === 500) {
            setMessageError("There's been an error. Please try again later.");
            setShowError(true);
          }
        });
    }

    setUserRole(userRole);
  };
  const onSelectSupplier = async (selectedSupplier: string) => {
    await userServices
      .getPosibleSelectionsCreateUsersBuyers(
        userRole,
        undefined,
        selectedSupplier
      )
      .then((res: any) => {
        // setData(res);
        const buyerOptions: any = [];
        // eslint-disable-next-line array-callback-return
        res.data.posibleBuyers.map((fields: any) => {
          buyerOptions.push({
            label: fields.client_company_name,
            value: fields.id,
          });
        });
        setpossibleBuyers(buyerOptions);
        setShowBuyer(true);
      })
      .catch((err: AxiosError<any>) => {
        if (err.request.status === 400) {
          setMessageError(err.response?.data?.message);
          setShowError(true);
        }
        if (err.request.status === 500) {
          setMessageError("There's been an error. Please try again later.");
          setShowError(true);
        }
      });
  };
  const onSelectBuyer = async (selectedBuyer: string) => {
    setShowUserData(!!selectedBuyer);
  };
  return {
    onSelectRole,
    onSelectSupplier,
    onSelectBuyer,
    setShowError,
    setMessageError,
    showError,
    multipleBuyer,
    showBuyer,
    showSupplier,
    showUserData,
    messageError,
    possibleSupplier,
    possibleBuyers,
  };
};

export default useSetUserForm;
