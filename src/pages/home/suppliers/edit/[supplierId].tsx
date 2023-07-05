import dynamic from 'next/dynamic';

import FallbackComponent from '@/components/common/fallbackComponent/FallbackComponent';
import { FormPageLoader } from '@/components/common/loaders';
import type { TSupplierForm } from '@/components/common/supplierComponents/suppliersForm/SupplierForm';
import { useSupplierForm } from '@/components/common/supplierComponents/suppliersForm/useSupplierForm';
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
const EditSupplier = () => {
  return (
    <FormPageLoader<Omit<TSupplierForm, 'action' | 'dashboard'>>
      {...{
        useGetData: useSupplierForm,
        withFormSteps: true,
      }}
    >
      <FormCreateSupplier
        action={ACTIONS.edit}
        dashboard={DASHBOARDTYPES.supplier}
      />
    </FormPageLoader>
  );
};

export default EditSupplier;
