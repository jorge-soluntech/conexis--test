import { render } from '@testing-library/react';

import Dashboard from '@/pages/dashboard';
import Provider from '@/utils/reduxProvider';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Dashboard page', () => {
  describe('Render method', () => {
    it('renders homepage unchanged', () => {
      const { container } = render(
        <Provider>
          <Dashboard />
        </Provider>
      );

      expect(container).toBeInTheDocument();
    });
  });
});
