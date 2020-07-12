import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CartItem } from './CartItem';

const props = {
  id: '1',
  title: 'Test title',
  price: '299.99',
  quantity: 5,
};

const methods = {
  onRemove: jest.fn(),
};

it('renders with props and remove button', () => {
  const { container } = render(<CartItem {...props} {...methods} />);

  expect(container).toMatchSnapshot();
});

it('should call onRemove with item ID when remove button is clicked', () => {
  const { getByRole } = render(<CartItem {...props} {...methods} />);

  userEvent.click(getByRole('button'));

  expect(methods.onRemove).toBeCalledWith(props.id);
});
