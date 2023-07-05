import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

import FallbackComponent from '@/components/common/fallbackComponent/FallbackComponent';
import { FormPageLoader } from '@/components/common/loaders';
import type { IFormUserUpdate } from '@/components/common/userCreateComponents/formUserUpdate/IFormUserUpdate';
import useUpdateUserForm from '@/components/common/userCreateComponents/formUserUpdate/useUpdateUserForm';

const FormUserUpdate = dynamic(
  () =>
    import(
      '@/components/common/userCreateComponents/formUserUpdate/FormUserUpdate'
    ),
  {
    loading: () => <FallbackComponent />,
  }
);
/**
 * The FormUserUpdate page, will see Main as a template, use the same template for other pages
 * @returns The FormUserUpdate page ./
 */

const UserUpdate = () => {
  return (
    <FormPageLoader<IFormUserUpdate.IProps>
      {...{ useGetData: useUpdateUserForm }}
    >
      {({
        userInfo,
        userRole,
        possibleBuyers,
        roles,
        showError,
        showBuyer,
        isLoading,
        messageError,
        successResult,
        onSubmit,
        onSelectRole,
        setShowError,
        setMessageError,
      }) => {
        return (
          <FormUserUpdate
            {...{
              userInfo,
              userRole,
              possibleBuyers,
              roles,
              showError,
              showBuyer,
              isLoading,
              messageError,
              successResult,
              onSubmit,
              onSelectRole,
              setShowError,
              setMessageError,
            }}
          />
        );
      }}
    </FormPageLoader>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (req.cookies.token) {
    return {
      props: {},
    };
  }

  return {
    redirect: {
      destination: '/auth',
      permanent: false,
    },
  };
};

export default UserUpdate;
