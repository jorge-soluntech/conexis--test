/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, render, screen } from '@testing-library/react';

import locales from '@/locales/en/en.json';
import Provider from '@/utils/reduxProvider';

import BuyerInformation from './BuyerInformation';

const {
  formsCommon: { errors },
} = locales;

beforeEach(() => {
  render(
    <Provider>
      <BuyerInformation />
    </Provider>
  );
});

describe('BuyerInformation', () => {
  it('renders the form', () => {
    expect(screen.getByText('Client company name')).toBeInTheDocument();
    expect(screen.getByText('Legal name for invoicing')).toBeInTheDocument();
    expect(screen.getByText('Client mailing address')).toBeInTheDocument();
    expect(screen.getByText('Country')).toBeInTheDocument();
    expect(screen.getByText('City')).toBeInTheDocument();
    expect(screen.getByText('State')).toBeInTheDocument();
    expect(screen.getByText('Zip code')).toBeInTheDocument();
    expect(screen.getByText('Client contact name')).toBeInTheDocument();
    expect(screen.getByText('Client contact email')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Continue' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Clear fields' })
    ).toBeInTheDocument();
  });

  test('displays an error message when the form is submitted with missing required fields', async () => {
    const continueButton = screen.getByRole('button', { name: 'Continue' });

    fireEvent.click(continueButton);
    const errorMessage = await screen.findByText(
      errors.textErrorMandatoryEmptyFields
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it('clears the form fields when the clear button is clicked', () => {
    const companyInput: any = screen.getByLabelText('Client company name');
    const legalNameInput: any = screen.getByLabelText(
      'Legal name for invoicing'
    );
    fireEvent.change(companyInput, { target: { value: 'Conexis' } });
    fireEvent.change(legalNameInput, { target: { value: 'Conexis' } });
    expect(companyInput.value).toBe('Conexis');
    expect(legalNameInput.value).toBe('Conexis');
    fireEvent.click(screen.getByRole('button', { name: 'Clear fields' }));
    expect(companyInput.value).toBe('');
    expect(legalNameInput.value).toBe('');
  });

  it('If a client contact email is entered, it must be validated that it is a valid email', async () => {
    const companyInput = screen.getByLabelText('Client company name');
    const legalNameInput: any = screen.getByLabelText(
      'Legal name for invoicing'
    );
    const clientContactEmail: any = screen.getByLabelText(
      'Client contact email'
    );
    fireEvent.change(companyInput, { target: { value: 'Conexis' } });
    fireEvent.change(legalNameInput, { target: { value: 'Conexis' } });
    fireEvent.change(clientContactEmail, { target: { value: 'john' } });
    fireEvent.click(screen.getByRole('button', { name: 'Continue' }));
    const errorMessage = await screen.findByText(
      'Client contact email should be a valid email address.'
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
