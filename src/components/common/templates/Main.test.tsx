import { render } from '@testing-library/react';

import { Main } from './Main';

describe('Main template', () => {
  describe('Render method', () => {
    // eslint-disable-next-line jest/expect-expect
    it('should render Main', () => {
      render(<Main meta={null}>{null}</Main>);
    });
  });
});
