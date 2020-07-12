import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ShowcaseItem } from './ShowcaseItem';

const props = {
  id: '1',
  title: 'Test title',
  price: '1.25',
  image: 'http://test.image.com',
  description: 'A bit shorter description',
};

const methods = {
  onAdd: jest.fn(),
};

it('renders with props and add button', () => {
  const { container } = render(<ShowcaseItem {...props} {...methods} />);

  expect(container).toMatchSnapshot();
});

it('should call onAdd method with item ID when add button is clicked', () => {
  const { getByRole } = render(<ShowcaseItem {...props} {...methods} />);

  userEvent.click(getByRole('button'));

  expect(methods.onAdd).toBeCalledWith(props.id);
});
