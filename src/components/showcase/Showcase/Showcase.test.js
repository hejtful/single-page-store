import React from 'react';
import { render } from '@testing-library/react';

import { Showcase } from './Showcase';

const initialShowcaseItem = {
  id: '1',
  title: 'Test product title',
  price: 0.25,
  image: 'https://test.image.jpg',
  description: 'Test product description quite long',
};

const additionalShowcaseItem = {
  id: '2',
  title: 'Additional item title',
  price: 1000,
  image: 'https://additional.image.jpg',
  description: 'Shorter description',
};

const methods = {
  onAddItemToCart: jest.fn(),
};

it('renders a message indicating no products are available if items prop is undefined', () => {
  const props = {};

  const { container } = render(<Showcase {...props} {...methods} />);

  expect(container).toMatchSnapshot();
});

it('renders a message indicating no products are available if items prop is an empty array', () => {
  const props = {
    items: [],
  };

  const { container } = render(<Showcase {...props} {...methods} />);

  expect(container).toMatchSnapshot();
});

it('renders a single product', () => {
  const props = {
    items: [initialShowcaseItem],
  };

  const { container } = render(<Showcase {...props} {...methods} />);

  expect(container).toMatchSnapshot();
});

it('renders multiple products', () => {
  const props = {
    items: [initialShowcaseItem, additionalShowcaseItem],
  };

  const { container } = render(<Showcase {...props} {...methods} />);

  expect(container).toMatchSnapshot();
});
