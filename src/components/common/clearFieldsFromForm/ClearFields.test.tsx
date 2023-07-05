import { fireEvent, render, screen } from '@testing-library/react';

import { ClearFields } from './ClearFields';

describe('Clear fields component', () => {
  const form = {
    resetFields: jest.fn(),
  } as any;

  it('there must be a buyers page', () => {
    render(<ClearFields title={'MockTittle'} form={form} />);
    expect(screen.getByText('MockTittle')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Clear fields' }));

    expect(form.resetFields).toHaveBeenCalledTimes(1);
  });
});
