/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, render, screen } from '@testing-library/react';

import { ACTIONS } from '@/consts/permissions';
import locales from '@/locales/en/en.json';
import Provider from '@/utils/reduxProvider';

import SupplierInformation from './SupplierInformation';

const {
  suppliers: { stepOne },
  formsCommon: { errors },
} = locales;

beforeEach(() => {
  render(
    <Provider>
      <SupplierInformation action={ACTIONS.create} />
    </Provider>
  );
});

describe('SupplierInformation', () => {
  it('renders the form', () => {
    expect(screen.getByText('Supplier company name')).toBeInTheDocument();
    expect(screen.getByText('Legal name for invoicing')).toBeInTheDocument();
    expect(screen.getByText('Supplier contact name')).toBeInTheDocument();
    expect(screen.getByText('Supplier code')).toBeInTheDocument();
    expect(screen.getByText('Supplier contact email')).toBeInTheDocument();
    expect(screen.getByText('Supplier mailing address')).toBeInTheDocument();
    expect(screen.getByText('Supplier contact phone')).toBeInTheDocument();
    expect(screen.getByText('Contract expiration date')).toBeInTheDocument();
    expect(screen.getByText('Country')).toBeInTheDocument();
    expect(screen.getByText('State')).toBeInTheDocument();
    expect(screen.getByText('City')).toBeInTheDocument();
    expect(screen.getByText('Zip code')).toBeInTheDocument();
    expect(screen.getByText('Tax ID number')).toBeInTheDocument();
    expect(screen.getByText('Geographic coverage')).toBeInTheDocument();
    expect(screen.getByText('Work categories covered')).toBeInTheDocument();
    expect(screen.getByText('Dun & bradstreet number')).toBeInTheDocument();
    expect(screen.getByText('Supplier status')).toBeInTheDocument();
    expect(screen.getByText('Non resident supplier')).toBeInTheDocument();
    expect(screen.getByText('Diversity certifications')).toBeInTheDocument();
    expect(screen.getByText('Comments')).toBeInTheDocument();
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

  it('If a supplier contact email is entered, it must be validated that it is a valid email', async () => {
    const companyInput = screen.getByLabelText('Supplier company name');
    const legalNameInput: any = screen.getByLabelText(
      'Legal name for invoicing'
    );
    const supplierContactEmail: any = screen.getByLabelText(
      'Supplier contact email'
    );
    fireEvent.change(companyInput, { target: { value: 'Conexis' } });
    fireEvent.change(legalNameInput, { target: { value: 'Conexis' } });
    fireEvent.change(supplierContactEmail, { target: { value: 'john' } });
    fireEvent.click(screen.getByRole('button', { name: 'Continue' }));
    const errorMessage = await screen.findByText(
      stepOne.supplierContactEmailError
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
