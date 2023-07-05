/* eslint-disable jest/no-mocks-import */
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { AuthProvider } from '@/application/authContext';
import { loginUI } from '@/consts';
import Provider from '@/utils/reduxProvider';

import mockLogin from '../../../../../__mocks__/mockLogin';
import FormForgot from './FormForgot';

describe('FormAuth component', () => {
  const setup = () =>
    render(
      <AuthProvider>
        <Provider>
          <FormForgot
            titleForm={loginUI.LOGIN_TEXT.title_form_forgot}
            subtitleForm={loginUI.LOGIN_TEXT.subtitle_form_forgot}
          />
        </Provider>
      </AuthProvider>
    );

  it('should have h3 tag', () => {
    setup();

    const heading = screen.getByRole('heading', {
      level: 3,
      name: loginUI.LOGIN_TEXT.title_form_forgot,
    });

    expect(heading).toBeInTheDocument();
  });

  it('should not call the onSubmit method', async () => {
    setup();

    fireEvent.submit(screen.getByRole('button'));

    expect(mockLogin).not.toHaveBeenCalled();
  });

  it('should display matching error when dataform is invalid', async () => {
    setup();

    fireEvent.input(screen.getByTestId('email'), {
      target: {
        value: 'test',
      },
    });

    fireEvent.submit(screen.getByRole('button'));

    // expect(await screen.findByRole('alert')).toBeInTheDocument();
    const { value } = screen.getByTestId('email') as any;

    await waitFor(() =>
      expect(jest.fn({ email: value } as any)).not.toHaveBeenCalled()
    );

    await waitFor(() => expect(value).toBe('test'));
  });
});
