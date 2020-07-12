import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { InventoryItem } from './InventoryItem';

const initialInventoryItem = {
  id: '1',
  title: 'Test product title',
  price: 0.25,
  image: 'https://test.image.jpg',
  description: 'Test product description quite long',
};

const methods = {
  onChange: jest.fn(),
  onRemove: jest.fn(),
};

it('renders with initial values set', () => {
  const props = initialInventoryItem;

  const { container } = render(<InventoryItem {...props} {...methods} />);

  expect(container).toMatchSnapshot();
});

it('should call onChange method when an input value is changed', () => {
  const props = initialInventoryItem;

  const { getAllByRole } = render(<InventoryItem {...props} {...methods} />);

  userEvent.type(getAllByRole('textbox')[0], ' new');

  expect(methods.onChange).toBeCalledTimes(4);
});

it('should call onRemove method when remove button is clicked', () => {
  const props = initialInventoryItem;

  const { getByRole } = render(<InventoryItem {...props} {...methods} />);

  userEvent.click(getByRole('button'));

  expect(methods.onRemove).toBeCalled();
});
