import React from 'react';
import { render } from '@testing-library/react';
import { Title } from './Title';

it('renders title text', () => {
  const testTitleText = 'Test title text';

  const { getByText } = render(<Title>{testTitleText}</Title>);

  const titleText = getByText(testTitleText);
  expect(titleText).toBeInTheDocument();
});
