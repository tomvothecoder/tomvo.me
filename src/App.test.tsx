import React from 'react';
import { render } from '@testing-library/react';
import { vi } from 'vitest';
import App from './App';

vi.mock('react-player', () => ({
  default: () => <div data-testid="react-player" />,
}));

test('renders app', () => {
  render(<App />);
  expect(document.querySelector('.App')).toBeInTheDocument();
});
