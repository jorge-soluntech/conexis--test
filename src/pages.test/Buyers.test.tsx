import { render } from '@testing-library/react';

import Buyers from '@/pages/home/buyers';
import Provider from '@/utils/reduxProvider';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Buyers page', () => {
  describe('Render method', () => {
    it('renders buyers unchanged', () => {
      const { container } = render(
        <Provider>
          <Buyers />
        </Provider>
      );

      expect(container).toBeInTheDocument();
    });
  });
});
