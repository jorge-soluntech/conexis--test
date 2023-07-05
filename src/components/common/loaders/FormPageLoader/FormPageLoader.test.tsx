import { render } from '@testing-library/react';

import BuyerForm from '@/components/common/buyersComponents/BuyerForm/BuyerForm';
import { ACTIONS, DASHBOARDTYPES } from '@/consts/permissions';
import Provider from '@/utils/reduxProvider';

import FormPageLoader from '.';
import useCreateFormLoader from './useCreateFormLoader';

jest.mock(
  '@/components/common/buyersComponents/BuyerForm/BuyerForm',
  () => 'BuyerForm'
);

describe('FormPageLoader Skeleton Loader', () => {
  it('Should render the BuyerForm form component correctly', () => {
    const { container } = render(
      <Provider>
        <FormPageLoader {...{ useGetData: useCreateFormLoader }}>
          <BuyerForm action={ACTIONS.create} dashboard={DASHBOARDTYPES.buyer} />
        </FormPageLoader>
      </Provider>
    );

    expect(container).toBeInTheDocument();
  });
});
