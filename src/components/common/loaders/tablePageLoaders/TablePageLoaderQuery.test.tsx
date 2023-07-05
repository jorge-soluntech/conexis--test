import { render } from '@testing-library/react';

import Provider from '@/utils/reduxProvider';

import { List } from '../../crudElemnts';
import TablePageLoaderQuery from './TablePageLoaderQuery';

jest.mock('./TablePageLoaderQuery', () => 'TablePageLoaderQuery');
jest.mock('@/components/common/crudElemnts', () => 'List');

const mockProps = {
  data: [
    {
      id: 0,
      key: '0',
      firstName: 'mock',
      lastName: 'test',
    },
  ],
  error: null,
  mutate: jest.fn(),
  isValidating: false,
  isLoading: false,
};

describe('TablePageLoaderQuery Skeleton Loader', () => {
  it('Should render the List table component correctly', () => {
    const { container } = render(
      <Provider>
        <TablePageLoaderQuery
          {...{
            fetcher: async () => ({ ...mockProps }),
            queryString: '/mock/endpoint',
          }}
        >
          {({ ...mockProps }) => {
            return (
              <List
                {...mockProps}
                {...{
                  config: {
                    keysToSearchBy: [
                      'idNumberMock',
                      'locationMock',
                      'businessUnitNumberMock',
                      'buOwnerMock',
                    ],
                  },
                  columns: [{ title: 'ID', dataIndex: 'id' }],
                  texts: {},
                }}
              />
            );
          }}
        </TablePageLoaderQuery>
      </Provider>
    );

    expect(container).toBeInTheDocument();
  });
});
