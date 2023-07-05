/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';

import { ROLES } from '@/consts/permissions';

import FormEditBusinessUnit from './EditBusinessUnit';

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {},
    pathname: '/home/business-unit/edit/123',
  }),
}));

describe('Edit business unit page', () => {
  const mockUserContextValue = {
    isLoggedIn: false,
    user: {
      _id: 'mock',
      username: 'mock',
      tenant: 0,
      role: ROLES.BuyerAdministrator,
    },
    emailSent: undefined,
    failedAttempts: 0,
    dataUser: undefined,
    idTenant: 9,
    fechtDataUser: jest.fn(),
    loginUser: jest.fn(),
    logout: jest.fn(),
    emailCheckToSend: jest.fn(),
    updateForgotPassword: jest.fn(),
    setNewPassword: jest.fn(),
    currentAttempts: jest.fn(),
    userCreate: jest.fn(),
    getPosibleSelectionsCreateUsers: jest.fn(),
    resendEmail: jest.fn(),
    getUsers: jest.fn(),
  };

  const mockProps = {
    businessUnitId: 'mock ID',
    fieldsValue: undefined,
    showError: false,
    phoneError: false,
    successResult: false,
    dataUser: mockUserContextValue,
    messageError: '',
    detailsBusinessUnit: { id: '', location: '', businessUnitNumber: '' },
    setMessageError: jest.fn(),
    setShowError: jest.fn(),
    setPhoneError: jest.fn(),
    setSuccessResult: jest.fn(),
  };

  beforeEach(() => {
    render(<FormEditBusinessUnit {...mockProps} />);
  });

  it('there must be a edit business unit page', () => {
    expect(
      screen.getByRole('heading', { name: /edit business unit/i })
    ).toBeInTheDocument();
  });

  it('at the top of the page, there should be a section where the business unit details are displayed', () => {
    expect(screen.getByText(/id/i)).toBeInTheDocument();
    expect(screen.getByText(/business unit name/i)).toBeInTheDocument();
    expect(screen.getByText(/business unit #/i)).toBeInTheDocument();
  });

  it('should exists de fields: first name, last name, email, region, address and phone', () => {
    expect(
      screen.getByRole('textbox', { name: /first name/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /last name/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /address/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('spinbutton', { name: /phone number/i })
    ).toBeInTheDocument();
  });
});
