import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

import FallbackComponent from '@/components/common/fallbackComponent/FallbackComponent';
import { FormPageLoader } from '@/components/common/loaders';
import useCreateFormLoader from '@/components/common/loaders/FormPageLoader/useCreateFormLoader';
import { COST_CENTER_TEXT } from '@/consts/cost_centers_ui';

const FormCostCenterCreate = dynamic(
  () => import('@/components/common/costCenterComponents/FormCostCenterCreate'),
  {
    loading: () => <FallbackComponent />,
    ssr: true,
  }
);

/**
 * The CostCenterCreate page, will see Main as a template, use the same template for other pages
 * @returns The CostCenterCreate page ./
 */

const CostCenterCreate = () => {
  return (
    <FormPageLoader {...{ useGetData: useCreateFormLoader }}>
      <FormCostCenterCreate
        titleForm={COST_CENTER_TEXT.title_form_cost_center_creation}
      />
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

export default CostCenterCreate;
