import React from 'react';
import { render } from '@testing-library/react';
import { Column } from './Column';

it('renders column element and all children', () => {
  const { container } = render(
    <Column>
      <div>Test child 1</div>
      <div>Test child 2</div>
    </Column>
  );

  expect(container).toMatchSnapshot();
});
