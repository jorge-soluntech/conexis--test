import dynamic from 'next/dynamic';

import type { TBuyerForm } from '@/components/common/buyersComponents/BuyerForm/BuyerForm';
import { useBuyerForm } from '@/components/common/buyersComponents/BuyerForm/useBuyerForm';
import FallbackComponent from '@/components/common/fallbackComponent/FallbackComponent';
import { FormPageLoader } from '@/components/common/loaders';
import { ACTIONS, DASHBOARDTYPES } from '@/consts/permissions';

const BuyerForm = dynamic(
  () => import('@/components/common/buyersComponents/BuyerForm/BuyerForm'),
  {
    loading: () => <FallbackComponent />,
  }
);

/**
 * Page component to edit buyer information
 *
 * @returns the forms to edit a buyer
 */
const EditBuyer = () => {
  return (
    <FormPageLoader<Omit<TBuyerForm, 'action' | 'dashboard'>>
      {...{
        useGetData: useBuyerForm,
        withFormSteps: true,
      }}
    >
      <BuyerForm
        {...{
          action: ACTIONS.edit,
          dashboard: DASHBOARDTYPES.buyer,
        }}
      />
    </FormPageLoader>
  );
};

export default EditBuyer;
