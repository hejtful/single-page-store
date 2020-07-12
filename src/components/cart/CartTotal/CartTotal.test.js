import React from 'react';
import { render } from '@testing-library/react';
import { CartTotal } from './CartTotal';

it('renders the total amount and currency sign', () => {
  const { container } = render(<CartTotal amount={1000} />);

  expect(container).toMatchSnapshot();
});
