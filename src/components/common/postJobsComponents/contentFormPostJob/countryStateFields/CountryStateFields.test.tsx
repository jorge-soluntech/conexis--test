import { render, screen } from '@testing-library/react';
import React from 'react';

import locales from '@/locales/en/en.json';
import Provider from '@/utils/reduxProvider';

import CountryStateFields from './CountryStateFields';

const {
  postNewJob: { formCreate },
} = locales;

describe('CountryStateFields', () => {
  beforeEach(() => {
    render(
      <Provider>
        <CountryStateFields name="country" />
      </Provider>
    );
  });

  test('render field', () => {
    const labelCountry = screen.getByLabelText(formCreate.labelCountry);
    const placeholderInput = screen.getByText(formCreate.placeholderCountry);

    expect(placeholderInput).toBeInTheDocument();
    expect(labelCountry).toBeInTheDocument();
  });
});
