import { render, screen } from '@testing-library/react';

import Provider from '@/utils/reduxProvider';

import AccountManagerDashboard from './AccountManagerDashboard';

describe('AccountManagerDashboard component', () => {
  describe('Render method', () => {
    it('should render row cards', () => {
      render(
        <Provider>
          <AccountManagerDashboard />
        </Provider>
      );

      const heading = screen.getByTestId('test-welcome');

      expect(heading).toBeInTheDocument();
    });
  });
});
