/* eslint-disable jest/no-mocks-import */
import { cleanup, render, screen } from '@testing-library/react';

import { loginUI } from '@/consts';
import ServerDownPage from '@/pages/auth/server-down';
import Provider from '@/utils/reduxProvider';

afterEach(cleanup);

describe('Server Down page', () => {
  describe('Render method', () => {
    const setup = () =>
      render(
        <Provider>
          <ServerDownPage />
        </Provider>
      );

    it('render Server page', () => {
      setup();

      expect(
        screen.getByText(loginUI.LOGIN_TEXT.title_server_down)
      ).toBeInTheDocument();
    });
  });
});
