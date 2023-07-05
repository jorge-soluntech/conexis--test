import dynamic from 'next/dynamic';

import FallbackComponent from '@/components/common/fallbackComponent/FallbackComponent';
import { FormPageLoader } from '@/components/common/loaders';
import useCreateFormLoader from '@/components/common/loaders/FormPageLoader/useCreateFormLoader';
import { ACTIONS, DASHBOARDTYPES } from '@/consts/permissions';

const FormCreateSupplier = dynamic(
  () =>
    import('@/components/common/supplierComponents/suppliersForm/SupplierForm'),
  {
    loading: () => <FallbackComponent />,
    ssr: true,
  }
);

/**
 * A page component that allows users to create a new supplier.
 * Uses the FormCreateSupplier component as the main content of the page.
 */
const CreateSupplier = () => {
  return (
    <FormPageLoader
      {...{ useGetData: useCreateFormLoader, withFormSteps: true }}
    >
      <FormCreateSupplier
        dashboard={DASHBOARDTYPES.supplier}
        action={ACTIONS.create}
      />
    </FormPageLoader>
  );
};

export default CreateSupplier;
