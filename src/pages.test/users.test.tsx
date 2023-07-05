import { render } from '@testing-library/react';

import Users from '@/pages/home/users';
import Provider from '@/utils/reduxProvider';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Users page', () => {
  describe('Render method', () => {
    it('renders users table unchanged', () => {
      const { container } = render(
        <Provider>
          <Users />
        </Provider>
      );

      expect(container).toBeInTheDocument();
    });
  });
});
