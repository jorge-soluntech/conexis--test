import { render } from '@testing-library/react';

import Provider from '@/utils/reduxProvider';

import BuyerComponent from '../../buyersComponents/BuyerComponent';
import type { IBuyerComponent } from '../../buyersComponents/IBuyerComponent';
import TablePageLoader from './TablePageLoader';

jest.mock('./TablePageLoader', () => 'TablePageLoader');

jest.mock(
  '@/components/common/buyersComponents/BuyerComponent',
  () => 'BuyerComponent'
);

const mockProps: IBuyerComponent.IProps = {
  loading: false,
  dataTable: [],
  showError: false,
  setShowError: jest.fn(),
  messageError: '',
};

describe('TablePageLoader Skeleton Loader', () => {
  it('Should render the BuyerComponent table component correctly', () => {
    const { container } = render(
      <Provider>
        <TablePageLoader<IBuyerComponent.IProps>
          {...{
            useGetData: () => {
              return { ...mockProps };
            },
          }}
        >
          {({ ...mockProps }) => {
            return <BuyerComponent {...mockProps} />;
          }}
        </TablePageLoader>
      </Provider>
    );

    expect(container).toBeInTheDocument();
  });
});
