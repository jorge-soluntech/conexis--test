import { useMemo } from 'react';

import {
  clearDataStateBuyer,
  setStepBuyer,
} from '@/application/buyersSlice/buyersSlice';
import { useAppSelector } from '@/components/hooks/storeHooks';
import { STEPS_CREATE_BUYER } from '@/consts';
import {
  type CreateEditActions,
  ACTIONS,
  DASHBOARDTYPES,
} from '@/consts/permissions';
import locales from '@/locales/en/en.json';

import CreateAttachments from '../../attachmentsComponent/CreateAttachments';
import ListAndEditAttachments from '../../attachmentsComponent/editAttachments/ListAndEditAttachments';
import MultiStepComponent from '../../multiStepComponent/MultiStepComponent';
import ApprovalInformation from '../formSteps/approvalInformation/ApprovalInformation';
import BuyerInformation from '../formSteps/buyerInformation/BuyerInformation';
import TaxInformation from '../formSteps/taxInformation/TaxInformation';

const { buyers } = locales;

export type TBuyerForm = {
  action: CreateEditActions;
  dashboard: 'buyers';
};

const BuyerForm = ({ action, dashboard }: TBuyerForm) => {
  const { stepCreateBuyer } = useAppSelector((state) => state.buyers);

  const stepsComponents = useMemo(
    () => [
      {
        step: 0,
        component: <BuyerInformation formType={action} />,
      },
      {
        step: 1,
        component: <TaxInformation />,
      },
      {
        step: 2,
        component: <ApprovalInformation />,
      },
      {
        step: 3,
        component:
          action === ACTIONS.create ? (
            <CreateAttachments dashboard={DASHBOARDTYPES.buyer} />
          ) : (
            <ListAndEditAttachments dashboard={DASHBOARDTYPES.buyer} />
          ),
      },
    ],
    [action]
  );

  return (
    <MultiStepComponent
      dashboard={dashboard}
      setStep={setStepBuyer}
      clearDataState={clearDataStateBuyer}
      stepProgressComponent={STEPS_CREATE_BUYER}
      titleForm={buyers[action].title}
      currentStep={stepCreateBuyer}
      stepsComponents={stepsComponents}
    />
  );
};
export default BuyerForm;
