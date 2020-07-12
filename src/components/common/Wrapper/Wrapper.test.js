import React from 'react';
import { render } from '@testing-library/react';
import { Wrapper } from './Wrapper';

it('renders wrapper element and all children', () => {
  const { container } = render(
    <Wrapper>
      <div>Test child 1</div>
      <div>Test child 2</div>
    </Wrapper>
  );

  expect(container).toMatchSnapshot();
});
