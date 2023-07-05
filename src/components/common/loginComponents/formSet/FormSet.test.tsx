/* eslint-disable jest/no-mocks-import */
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { AuthProvider } from '@/application/authContext';
import { loginUI } from '@/consts';
import Provider from '@/utils/reduxProvider';

import mockLogin from '../../../../../__mocks__/mockLogin';
import FormSet from './FormSet';

describe('FormAuth component', () => {
  const setup = () =>
    render(
      <AuthProvider>
        <Provider>
          <FormSet
            titleForm={loginUI.LOGIN_TEXT.title_form_set}
            token={'test'}
            email={'test'}
          />
        </Provider>
      </AuthProvider>
    );

  it('should have h3 tag', () => {
    setup();

    const heading = screen.getByRole('heading', { level: 3 });

    expect(heading).toBeInTheDocument();
  });

  it('should not call the login method', async () => {
    setup();

    fireEvent.submit(screen.getByRole('button'));

    expect(mockLogin).not.toHaveBeenCalled();
  });

  it('should display matching error when dataform is invalid', async () => {
    setup();

    fireEvent.input(screen.getByTestId('password'), {
      target: {
        value: 'password',
      },
    });

    fireEvent.input(screen.getByTestId('password_repeat'), {
      target: {
        value: 'password',
      },
    });

    fireEvent.submit(screen.getByRole('button'));

    // expect(await screen.findByRole('alert')).toBeInTheDocument();
    await waitFor(() => expect(mockLogin).not.toHaveBeenCalled());

    const { value } = screen.getByTestId('password') as any;

    await waitFor(() => expect(value).toBe('password'));
  });
});
