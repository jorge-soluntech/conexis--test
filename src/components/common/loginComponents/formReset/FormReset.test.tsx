/* eslint-disable jest/no-mocks-import */
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { AuthProvider } from '@/application/authContext';
import { loginUI } from '@/consts';
import Provider from '@/utils/reduxProvider';

import mockLogin from '../../../../../__mocks__/mockLogin';
import FormReset from './FormReset';

describe('FormAuth component', () => {
  const setup = () =>
    render(
      <AuthProvider>
        <Provider>
          <FormReset
            titleForm={loginUI.LOGIN_TEXT.title_form_reset}
            token="token123"
            email="test@email.com"
          />
        </Provider>
      </AuthProvider>
    );

  it('should have h3 tag', () => {
    setup();

    const heading = screen.getByRole('heading', {
      level: 3,
      name: loginUI.LOGIN_TEXT.title_form_reset,
    });

    expect(heading).toBeInTheDocument();
  });

  it('should not call the onSubmit method reset', async () => {
    setup();

    fireEvent.submit(screen.getByRole('button'));

    expect(mockLogin).not.toHaveBeenCalled();
  });

  it('should display matching error when dataform is invalid', async () => {
    setup();

    fireEvent.input(screen.getByTestId('password'), {
      target: {
        value: 'test',
      },
    });

    fireEvent.submit(screen.getByRole('button'));

    expect(await screen.findByRole('alert')).toBeInTheDocument();
    const { value } = screen.getByTestId('password') as any;

    await waitFor(() =>
      expect(jest.fn({ password: value } as any)).not.toHaveBeenCalled()
    );

    await waitFor(() => expect(value).toBe('test'));
  });
});
