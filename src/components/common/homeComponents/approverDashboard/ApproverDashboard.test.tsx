import { render, screen } from '@testing-library/react';

import Provider from '@/utils/reduxProvider';

import ApproverDashboard from './ApproverDashboard';

describe('ApproverDashboard component', () => {
  it('should render row cards', () => {
    render(
      <Provider>
        <ApproverDashboard />
      </Provider>
    );

    const heading = screen.getByTestId('test-welcome');

    expect(heading).toBeInTheDocument();
  });
});
