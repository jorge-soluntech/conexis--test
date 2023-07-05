import { render } from '@testing-library/react';

import Page from '@/pages/home/business-units';
import Provider from '@/utils/reduxProvider';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Business Units page', () => {
  describe('Render method', () => {
    it('renders business-units unchanged', () => {
      const { container } = render(
        <Provider>
          <Page />
        </Provider>
      );

      expect(container).toBeInTheDocument();
    });
  });
});
