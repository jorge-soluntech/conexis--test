import { useMemo } from 'react';

import {
  clearDataStateSupplier,
  setStepSupplier,
} from '@/application/supplierSlice/supplierSlice';
import { useAppSelector } from '@/components/hooks/storeHooks';
import {
  type CreateEditActions,
  ACTIONS,
  DASHBOARDTYPES,
} from '@/consts/permissions';
import { STEPS_CREATE_SUPPLIER } from '@/consts/suppliers';
import locales from '@/locales/en/en.json';

import CreateAttachments from '../../attachmentsComponent/CreateAttachments';
import ListAndEditAttachments from '../../attachmentsComponent/editAttachments/ListAndEditAttachments';
import MultiStepComponent from '../../multiStepComponent/MultiStepComponent';
import AditionalSupplierContacts from '../formSteps/AditionalSupplierContacts/AditionalSupplierContacts';
import BuyerInformation from '../formSteps/BuyerInformation/BuyerInformation';
import SupplierInformation from '../formSteps/supplierInformation/SupplierInformation';

const { suppliers } = locales;

export type ActionsProps = {
  action: CreateEditActions;
};
export type TSupplierForm = {
  action: CreateEditActions;
  dashboard: 'suppliers';
};
const SupplierForm = ({ action, dashboard }: TSupplierForm) => {
  const { currentStepSupplier } = useAppSelector((state) => state.suppliers);

  const stepsComponents = useMemo(
    () => [
      {
        step: 0,
        component: <SupplierInformation action={action} />,
      },
      {
        step: 1,
        component: <AditionalSupplierContacts />,
      },
      {
        step: 2,
        component: <BuyerInformation />,
      },
      {
        step: 3,
        component:
          action === ACTIONS.create ? (
            <CreateAttachments dashboard={DASHBOARDTYPES.supplier} />
          ) : (
            <ListAndEditAttachments dashboard={DASHBOARDTYPES.supplier} />
          ),
      },
    ],
    [action]
  );

  return (
    <MultiStepComponent
      dashboard={dashboard}
      setStep={setStepSupplier}
      clearDataState={clearDataStateSupplier}
      stepProgressComponent={STEPS_CREATE_SUPPLIER}
      titleForm={suppliers[action].title}
      stepsComponents={stepsComponents}
      currentStep={currentStepSupplier}
    />
  );
};
export default SupplierForm;
