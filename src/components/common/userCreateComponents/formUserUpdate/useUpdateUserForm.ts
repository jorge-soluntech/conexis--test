import type { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { userCretaeUI } from '@/consts';
import { UserServices } from '@/infrastructure/services/UserServices';

import { renderItem, renderTitle } from './helpers';
import type { IFormUserUpdate } from './IFormUserUpdate';

const useUpdateUserForm = () => {
  const router = useRouter();
  const [idToUpdate] = useState<any>(router.query.id);

  const [dataRoles, setDataRoles] = useState<any>({}); // mapped data
  const [userInfo, setUserInfo] = useState<any>({}); // raw data from backend

  const [possibleBuyers, setpossibleBuyers] = useState([{}]);
  const [roles, setRoles] = useState([{}]);
  const [showError, setShowError] = useState<boolean>(false);
  const [showBuyer, setShowBuyer] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [loadingFormData, setLoadingFormData] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string>(
    'This field is required'
  );
  const [successResult, setSuccessResult] = useState<boolean>(false);
  const [userRole, setUserRole] = useState('');

  const userServices = new UserServices(router);

  // %%%%%%%%%%  data fetching
  useEffect(() => {
    setLoadingFormData(true);
    userServices
      .getUser(idToUpdate?.toString())
      .then((res) => {
        if (!res) {
          setMessageError("There's been an error. Please try again later.");
          setShowError(true);
        }
        if (res.user_roles?.length) {
          userServices.userRolesToUpdate(res.user_roles[0]).then((response) => {
            setDataRoles(response);
          });

          setUserRole(res.user_roles[0]);
        }

        setUserInfo(res);
        setLoadingFormData(false);
      })
      .catch((_error) => {
        setMessageError("There's been an error. Please try again later.");
        setShowError(true);
      });
  }, []);

  // get the roles to create a user and set the data to the select
  useEffect(() => {
    if (userInfo.user_roles?.length) {
      userServices.userRolesToUpdate(userInfo.user_roles[0]).then((res) => {
        setDataRoles(res);
      });

      setUserRole(userInfo.user_roles[0]);
    }
  }, [userInfo]);

  const onSelectRole = async (userRole: string) => {
    setUserRole(userRole);
  };

  // map data to the select of userRole
  // map data to the select of userRole
  useEffect(() => {
    if (dataRoles) {
      if (dataRoles['BUYER USER']) {
        const options = dataRoles['BUYER USER'].map((roleItem: string) => {
          return renderItem(roleItem, roleItem);
        });
        setRoles((prevState) => [
          ...prevState,
          { label: renderTitle('BUYER USER'), options },
        ]);
      }
      if (dataRoles['MSP USER']) {
        const options = dataRoles['MSP USER'].map((roleItem: string) => {
          return renderItem(roleItem, roleItem);
        });
        setRoles((prevState) => [
          ...prevState,
          { label: renderTitle('MSP USER'), options },
        ]);
      }
      if (dataRoles['SUPPLIER USER']) {
        const options = dataRoles['SUPPLIER USER'].map((roleItem: string) => {
          return renderItem(roleItem, roleItem);
        });
        setRoles((prevState) => [
          ...prevState,
          { label: renderTitle('SUPPLIER USER'), options },
        ]);
      }

      if (dataRoles['GLOBAL USER']) {
        const options = dataRoles['GLOBAL USER'].map((roleItem: string) => {
          return renderItem(roleItem, roleItem);
        });
        setRoles((prevState) => [
          ...prevState,
          { label: renderTitle('GLOBAL USER'), options },
        ]);
      }
    }
  }, [dataRoles]);

  // get the posible buyers to create a user and set the data to the select
  useEffect(() => {
    if (userRole) {
      // select menu options that will be shown
      if (
        [
          'Supplier Administrator',
          'Account Manager',
          'Supplier Finance',
        ].includes(userRole)
      ) {
        setShowBuyer(true);
        userServices
          .getPosibleSelectionsUpdateUsersBuyers(
            userRole,
            undefined,
            userInfo.supplier,
            idToUpdate?.toString()
          )
          .then((res: any) => {
            const buyerOptions: any = [];
            res.data.posibleBuyers.forEach((fields: any) => {
              buyerOptions.push({
                label: fields.client_company_name,
                value: fields.id,
              });
            });
            setpossibleBuyers(buyerOptions);
            setShowBuyer(true);
          })
          .catch(() => {
            setMessageError("There's been an error. Please try again later.");
            setShowError(true);
          });
      } else if (
        [
          'MSP Administrator',
          'Program Manager',
          'Program Representative',
          'MSP Finance',
          'Super Administrator',
          'Product Support',
        ].includes(userRole)
      ) {
        setShowBuyer(true);

        userServices
          .getPosibleSelectionsUpdateUsersBuyers(
            userRole,
            undefined,
            undefined,
            idToUpdate?.toString()
          )
          .then((res: any) => {
            const buyerOptions: any = [];
            res.data.posibleBuyers.forEach((fields: any) => {
              buyerOptions.push({
                label: fields.client_company_name,
                value: fields.id,
              });
            });
            setpossibleBuyers(buyerOptions);
          })
          .catch(() => {
            setMessageError("There's been an error. Please try again later.");
            setShowError(true);
          });
      } else if (
        [
          'Buyer Administrator',
          'Approver',
          'Hiring Manager',
          'Buyer Finance',
          'Delegate',
        ].includes(userRole)
      ) {
        setShowBuyer(false);
      }
    }
  }, [userRole]);

  const onSubmit = async (data: IFormUserUpdate.IFormValues) => {
    const { typeUser, buyer, firstName, lastName, email } = data;
    const dataForm: any = {
      first_name: firstName,
      last_name: lastName,
      user_roles: [typeUser],
      email,
    };

    if (buyer) {
      dataForm.legacy_permissioned_buyers = buyer.toString().split(',');
    }
    setLoading(true);
    await userServices
      .userUpdate(idToUpdate?.toString(), dataForm)
      .then(() => {
        setSuccessResult(true);
      })
      .catch((err: AxiosError<any>) => {
        if (err.request.status === 400) {
          if (
            err.response?.data?.message &&
            typeof err.response?.data?.message === 'string' &&
            err.response?.data?.message.includes('already being used')
          ) {
            setMessageError(
              'Email address is already being used by another user.'
            );
            setShowError(true);
          } else {
            setMessageError(err.response?.data?.message?.toString());
            setShowError(true);
          }
        } else {
          setMessageError("There's been an error. Please try again later.");
          setShowError(true);
        }
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (userCretaeUI.USER_ROLE_MSP_EXCEPTIONS.includes(userRole)) {
      setShowBuyer(false);
    }
  }, [userRole]);

  return {
    userInfo,
    userRole,
    possibleBuyers,
    roles,
    showError,
    showBuyer,
    isLoading,
    messageError,
    successResult,
    loadingFormData,
    onSubmit,
    onSelectRole,
    setShowError,
    setMessageError,
  };
};

export default useUpdateUserForm;
