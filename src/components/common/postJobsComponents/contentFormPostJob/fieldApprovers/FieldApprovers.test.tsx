import { render, screen } from '@testing-library/react';
import React from 'react';

import locales from '@/locales/en/en.json';
import Provider from '@/utils/reduxProvider';

import FieldApprovers from './FieldApprovers';

const {
  postNewJob: { formCreate },
} = locales;

describe('FieldApprovers', () => {
  beforeEach(() => {
    render(
      <Provider>
        <FieldApprovers name="approvers" />
      </Provider>
    );
  });

  test('render field', () => {
    const labelApprovers = screen.getByLabelText(formCreate.labelApprovers);
    const placeholderInput = screen.getByText(formCreate.placeholderApprovers);

    expect(placeholderInput).toBeInTheDocument();
    expect(labelApprovers).toBeInTheDocument();
  });
});
