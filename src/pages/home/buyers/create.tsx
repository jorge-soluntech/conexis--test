import dynamic from 'next/dynamic';

import FallbackComponent from '@/components/common/fallbackComponent/FallbackComponent';
import { FormPageLoader } from '@/components/common/loaders';
import useCreateFormLoader from '@/components/common/loaders/FormPageLoader/useCreateFormLoader';
import { ACTIONS, DASHBOARDTYPES } from '@/consts/permissions';

const BuyerForm = dynamic(
  () => import('@/components/common/buyersComponents/BuyerForm/BuyerForm'),
  {
    loading: () => <FallbackComponent />,
  }
);

/**
 * A page component that allows users to create a new buyer.
 * Uses the BuyerForm component as the main content of the page.
 */
const CreateBuyers = () => {
  return (
    <FormPageLoader
      {...{ useGetData: useCreateFormLoader, withFormSteps: true }}
    >
      <BuyerForm action={ACTIONS.create} dashboard={DASHBOARDTYPES.buyer} />
    </FormPageLoader>
  );
};

export default CreateBuyers;
