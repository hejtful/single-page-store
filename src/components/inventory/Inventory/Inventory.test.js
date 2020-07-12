import React from 'react';
import { render } from '@testing-library/react';

import { Inventory } from './Inventory';

const initialInventoryItem = {
  id: '1',
  title: 'Test product title',
  price: 0.25,
  image: 'https://test.image.jpg',
  description: 'Test product description quite long',
};

const additionalInventoryItem = {
  id: '2',
  title: 'Additional item title',
  price: 1000,
  image: 'https://additional.image.jpg',
  description: 'Shorter description',
};

const methods = {
  onInventoryItemChange: jest.fn(),
  onInventoryItemRemove: jest.fn(),
  onNewInventoryItemSubmit: jest.fn(),
};

it('renders only a new product form if items prop undefined', () => {
  const props = {};

  const { container } = render(<Inventory {...props} {...methods} />);

  expect(container).toMatchSnapshot();
});

it('renders only a new product form if items prop is an empty array', () => {
  const props = {
    items: [],
  };

  const { container } = render(<Inventory {...props} {...methods} />);

  expect(container).toMatchSnapshot();
});

it('renders a single product and new product form', () => {
  const props = {
    items: [initialInventoryItem],
  };

  const { container } = render(<Inventory {...props} {...methods} />);

  expect(container).toMatchSnapshot();
});

it('renders multiple products and new product form', () => {
  const props = {
    items: [initialInventoryItem, additionalInventoryItem],
  };

  const { container } = render(<Inventory {...props} {...methods} />);

  expect(container).toMatchSnapshot();
});
