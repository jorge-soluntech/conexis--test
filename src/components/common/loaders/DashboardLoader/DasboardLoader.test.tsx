import { render } from '@testing-library/react';

import Provider from '@/utils/reduxProvider';

import MSPDashboard from '../../homeComponents/mspDashboard/MSPDashboard';
import DashboardLoader from '.';

jest.mock(
  '@/components/common/homeComponents/mspDashboard/MSPDashboard',
  () => 'MSPDashboard'
);

describe('Dashboard Skeleton Loader', () => {
  it('Should render the MSPDashboard dashboard component correctly', () => {
    const { container } = render(
      <Provider>
        <DashboardLoader>
          <MSPDashboard />
        </DashboardLoader>
      </Provider>
    );

    expect(container).toBeInTheDocument();
  });
});
