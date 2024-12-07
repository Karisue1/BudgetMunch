import { render, screen } from '@testing-library/react';
import App from './App';


//The test to debug code
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
