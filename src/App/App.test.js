import { render, screen } from '@testing-library/react';
import App from '.';

test('renders header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Rubeun's Website/i);
  expect(headerElement).toBeInTheDocument();
});
