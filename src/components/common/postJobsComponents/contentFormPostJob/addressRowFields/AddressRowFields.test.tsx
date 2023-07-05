import { render, screen } from '@testing-library/react';
import React from 'react';

import locales from '@/locales/en/en.json';
import Provider from '@/utils/reduxProvider';

import AddressRowFields from './AddressRowFields';

const {
  postNewJob: { formCreate },
} = locales;

describe('AddressRowFields', () => {
  beforeEach(() => {
    render(
      <Provider>
        <AddressRowFields name="address" />
      </Provider>
    );
  });

  test('render field', () => {
    const labelAddress = screen.getByLabelText(formCreate.labelAddressLine1);
    const placeholderInput = screen.getByPlaceholderText(
      formCreate.placeholderAddressLine1
    );

    expect(placeholderInput).toBeInTheDocument();
    expect(labelAddress).toBeInTheDocument();
  });
});
