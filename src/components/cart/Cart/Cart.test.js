import React from 'react';
import { render } from '@testing-library/react';

import { Cart } from './Cart';

const initialCartItem = {
  id: '1',
  title: 'Test product title',
  price: 0.25,
  quantity: 1,
};

const additionalCartItem = {
  id: '2',
  title: 'Additional item title',
  price: 1000,
  quantity: 5,
};

const methods = {
  onCartItemRemove: jest.fn(),
};

it('renders a message indicating that the cart is empty if items prop is undefined', () => {
  const props = {};

  const { container } = render(<Cart {...props} {...methods} />);

  expect(container).toMatchSnapshot();
});

it('renders a message indicating that the cart is empty if items prop is an empty array', () => {
  const props = {
    items: [],
  };

  const { container } = render(<Cart {...props} {...methods} />);

  expect(container).toMatchSnapshot();
});

it('renders a single product', () => {
  const props = {
    items: [initialCartItem],
  };

  const { container } = render(<Cart {...props} {...methods} />);

  expect(container).toMatchSnapshot();
});

it('renders multiple products', () => {
  const props = {
    items: [initialCartItem, additionalCartItem],
  };

  const { container } = render(<Cart {...props} {...methods} />);

  expect(container).toMatchSnapshot();
});
