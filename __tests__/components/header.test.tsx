import { screen, render } from '@testing-library/react';
import Header from '../../src/components/header';

describe('Header', () => {
  it('header should have app icon', () => {
    render(<Header />);
    const element = screen.getByTestId('appIcon');
    expect(element).toBeInTheDocument();
  });

  it('header should have app header', () => {
    render(<Header />);
    const element = screen.getByRole('heading');
    expect(element).toHaveTextContent(/todo app/i);
  });
});
