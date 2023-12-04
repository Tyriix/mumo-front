import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import LoginForm from './LoginForm';
import { renderWithProviders } from '../../../test/utils';
import sinon from 'sinon';
import { vi } from 'vitest';

const useLoginUserMutation = vi.fn().mockResolvedValue({
  success: true,
  message: 'Logowanie pomyślne.',
});

describe('LoginForm', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Renders login form correctly', () => {
    renderWithProviders(<LoginForm />);
    const emailInput = screen.getByTestId('login__form-input-email');
    const passwordInput = screen.getByTestId('login__form-input-password');
    const loginButton = screen.getByRole('button', { name: /Zaloguj się/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it('Logs in successfully', async () => {
    renderWithProviders(<LoginForm />);

    const emailInput = screen.getByTestId('login__form-input-email');
    const passwordInput = screen.getByTestId('login__form-input-password');
    const loginButton = screen.getByRole('button', { name: /Zaloguj się/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'P@ssword123' } });

    await act(async () => {
      fireEvent.click(loginButton);
    });

    await waitFor(() => {
      expect(useLoginUserMutation).toHaveBeenCalledWith(1);
    });
  });
});
