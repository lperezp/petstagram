import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { getByText } = render(<App />);
});
