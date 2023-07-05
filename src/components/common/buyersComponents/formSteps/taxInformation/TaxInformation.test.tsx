/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Provider from '@/utils/reduxProvider';

import BuyerInformation from './TaxInformation';

describe('BuyerInformation', () => {
  beforeEach(() => {
    render(
      <Provider>
        <BuyerInformation />
      </Provider>
    );
  });

  it('renders the component', () => {
    expect(screen.getByText('Tax information')).toBeInTheDocument();
  });

  it('displays an error message when a value outside of the range is entered', async () => {
    const vatAmountInput = screen.getByLabelText('VAT/Federal');
    fireEvent.change(vatAmountInput, { target: { value: 200 } });
    fireEvent.submit(screen.getByRole('button', { name: 'Continue' }));
    expect(
      await screen.findByText('The VAT/Federal field must be between 0 and 100')
    ).toBeInTheDocument();
  });

  it('clears input fields when the clear button is clicked', () => {
    const vatAmountInput: any = screen.getByLabelText('VAT/Federal');
    const salesTaxAmountInput: any = screen.getByLabelText(
      'Provincial/State sales tax'
    );
    const otherTaxAmountInput: any = screen.getByLabelText('Other');
    fireEvent.change(vatAmountInput, { target: { value: 5 } });
    fireEvent.change(salesTaxAmountInput, { target: { value: 10 } });
    fireEvent.change(otherTaxAmountInput, { target: { value: 15 } });
    fireEvent.click(screen.getByRole('button', { name: 'Clear fields' }));
    expect(vatAmountInput.value).toBe('');
    expect(salesTaxAmountInput.value).toBe('');
    expect(otherTaxAmountInput.value).toBe('');
  });
});
