import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { App } from './App';
import { serializeFormData } from 'utility/form/serializeFormData';

jest.mock('utility/form/serializeFormData');

it('renders column titles', () => {
  const { getByText } = render(<App />);

  const showcaseTitle = getByText(/List of Products/i);
  expect(showcaseTitle).toBeInTheDocument();

  const cartTitle = getByText(/Shopping Cart/i);
  expect(cartTitle).toBeInTheDocument();

  const inventoryTitle = getByText(/Inventory/i);
  expect(inventoryTitle).toBeInTheDocument();
});
