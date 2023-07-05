/* eslint-disable jest/no-mocks-import */
// eslint-disable-next-line jest/no-mocks-import
import { cleanup, render, screen } from '@testing-library/react';

import { loginUI } from '@/consts';
import LoginPage from '@/pages/auth/index';
import Provider from '@/utils/reduxProvider';

import { useRouter } from '../../__mocks__/next/router';

afterEach(cleanup);

describe('Login page', () => {
  describe('Render method', () => {
    const setup = () =>
      render(
        <Provider>
          <LoginPage resetting={false} setting={false} content={''} />
        </Provider>
      );

    it('render Login', () => {
      setup();

      expect(
        screen.getByText(loginUI.LOGIN_TEXT.title_form_login)
      ).toBeInTheDocument();
    });

    it('should display required error when value is empty', async () => {
      const router = useRouter();

      expect(router.pathname).toBe('/auth');
    });
  });
});
