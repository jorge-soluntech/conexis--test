import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

import type { IEditBusinessUnit } from '@/components/common/businessUnitsComponents/editBusinessUnit/IEditBusinessUnit';
import useEditFormData from '@/components/common/businessUnitsComponents/editBusinessUnit/useEditFormData';
import FallbackComponent from '@/components/common/fallbackComponent/FallbackComponent';
import { FormPageLoader } from '@/components/common/loaders';

const FormEditBusinessUnit = dynamic(
  () =>
    import(
      '@/components/common/businessUnitsComponents/editBusinessUnit/EditBusinessUnit'
    ),
  {
    loading: () => <FallbackComponent />,
  }
);
/**
 * The MyJobs page, will see Main as a template, use the same template for other pages
 * @returns The MyJobs page ./
 */

const EditBusinessUnit = () => {
  return (
    <FormPageLoader<IEditBusinessUnit.IProps>
      {...{ useGetData: useEditFormData, hasFormDetailsHeader: true }}
    >
      {({
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
      }) => {
        return (
          <FormEditBusinessUnit
            {...{
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

export default EditBusinessUnit;
