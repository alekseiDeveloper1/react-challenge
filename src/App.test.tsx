import { render, screen } from '@testing-library/react';
import App from './App';

test('renders vite and react logos', () => {
  render(<App />);
  const viteLogo = screen.getByAltText('Vite logo');
  const reactLogo = screen.getByAltText('React logo');
  expect(viteLogo).toBeInTheDocument();
  expect(reactLogo).toBeInTheDocument();
});