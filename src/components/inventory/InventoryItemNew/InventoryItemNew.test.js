import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { InventoryItemNew } from './InventoryItemNew';
import { serializeFormData } from 'utility/form/serializeFormData';

jest.mock('utility/form/serializeFormData');

const methods = {
  onSubmit: jest.fn(),
};

it('renders with empty values', () => {
  const { container } = render(<InventoryItemNew {...methods} />);

  expect(container).toMatchSnapshot();
});

it('should call onSubmit method with form object when submit button is clicked', () => {
  const expectedFormObject = {
    title: 'Test title',
    price: '1.25',
    image: 'http://test.image.com',
    description: 'A bit shorter description',
  };

  serializeFormData.mockReturnValue(expectedFormObject);

  const { getByRole } = render(<InventoryItemNew {...methods} />);

  userEvent.click(getByRole('button'));

  expect(methods.onSubmit).toBeCalledWith(expectedFormObject);
});
