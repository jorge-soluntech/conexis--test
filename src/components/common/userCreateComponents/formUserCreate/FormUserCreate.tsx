/* eslint-disable array-callback-return */

import type { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useState } from 'react';

import useSetUserForm from '@/components/hooks/useSetUserForm';
import useSetUserRole from '@/components/hooks/useSetUserRole';
import { UserServices } from '@/infrastructure/services/UserServices';

import TagRender from '../../TagRender/TagRender';
import FormUser from '../formUser/formUser';
import type { IFormUserCreate } from './IFormUserCreate';
/**
 * Returns the Alert, Title and Form component
 *
 * @param titleForm - The string of title form
 * @returns The form of login page
 */

const FormUserCreate: FC<IFormUserCreate.IProps> = ({ titleForm }) => {
  const router = useRouter();
  const [isLoading, setLoading] = useState<boolean>(false);

  // %%%%%%%%%%  data fetching
  const userServices = new UserServices(router);

  const { roles } = useSetUserRole();

  // changes in role, get the posssible buyers and or buyers depending on the role and chang the ui
  const {
    onSelectRole,
    onSelectSupplier,
    setShowError,
    onSelectBuyer,
    setMessageError,
    showError,
    multipleBuyer,
    showBuyer,
    showSupplier,
    showUserData,
    messageError,
    possibleSupplier,
    possibleBuyers,
  } = useSetUserForm();

  const onSubmit = async (data: IFormUserCreate.IFormValues) => {
    const { typeUser, buyer, firstName, lastName, email, supplier } = data;
    const dataFormBuyer = {
      first_name: firstName,
      last_name: lastName,
      user_roles: [typeUser],
      email,
      permissioned_buyers: buyer ? buyer.toString().split(',') : [],
      logged_buyer: buyer ? buyer?.toString().split(',')[0] : null,
    };
    const dataFormSupplier = {
      permissioned_suppliers: supplier ? [supplier.toString()] : '',
      supplier: supplier ? supplier.toString() : null,
    };
    const dataForm = {
      ...(supplier && showSupplier ? dataFormSupplier : ''),
      ...dataFormBuyer,
    };
    setLoading(true);
    await userServices
      .userCreate(dataForm)
      .then((res: any) => {
        router.push(
          res.errors && res.errors.length
            ? `/home/users/create/error-mail?email=${encodeURIComponent(
                dataForm.email
              )}
               `
            : '/home/users/create/success-form',
          undefined,
          {
            shallow: true,
          }
        );
      })
      .catch((err: AxiosError<any>) => {
        if (err.request.status === 400) {
          setMessageError(err.response?.data?.message);
          setShowError(true);

          if (
            err.response?.data?.message &&
            err.response?.data?.message.length &&
            err.response?.data?.message[0] &&
            err.response?.data?.message[0].includes('email must be an ema')
          ) {
            setMessageError('Please enter a valid email address');
            setShowError(true);
          }
        } else {
          setMessageError("There's been an error. Please try again later.");
          setShowError(true);
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <FormUser
        titleForm={titleForm}
        showError={showError}
        messageError={messageError}
        setShowError={setShowError}
        onSubmit={onSubmit}
        setMessageError={setMessageError}
        onSelectRole={onSelectRole}
        roles={roles}
        showSupplier={showSupplier}
        onSelectSupplier={onSelectSupplier}
        possibleSupplier={possibleSupplier}
        showBuyer={showBuyer}
        multipleBuyer={multipleBuyer}
        tagRender={TagRender}
        onSelectBuyer={onSelectBuyer}
        possibleBuyers={possibleBuyers}
        showUserData={showUserData}
        isLoading={isLoading}
      />
    </>
  );
};

export default FormUserCreate;
