import { screen } from '@testing-library/react';
import LoginForm from './LoginForm';
import { renderWithProviders } from '../../../test/utils';

describe('LoginForm', () => {
  it('Renders login form correctly', () => {
    renderWithProviders(<LoginForm />);

    expect(screen.getByLabelText(/Adres email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Hasło/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Zaloguj się/i })
    ).toBeInTheDocument();
  });
});
