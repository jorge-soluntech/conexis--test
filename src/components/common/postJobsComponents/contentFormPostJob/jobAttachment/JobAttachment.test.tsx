import { render, screen } from '@testing-library/react';
import React from 'react';

import locales from '@/locales/en/en.json';
import Provider from '@/utils/reduxProvider';

import JobAttachment from './JobAttachment';

const {
  postNewJob: { formCreate },
} = locales;

describe('JobAttachment', () => {
  beforeEach(() => {
    render(
      <Provider>
        <JobAttachment name="attachment" />
      </Provider>
    );
  });

  test('render field', () => {
    const labelHiringManager = screen.getByText(formCreate.labelJobAttachments);
    expect(labelHiringManager).toBeInTheDocument();
  });
});
