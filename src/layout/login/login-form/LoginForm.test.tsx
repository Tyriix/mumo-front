import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import LoginForm from './LoginForm';
import { renderWithProviders } from '../../../test/utils';
import { vi } from 'vitest';

const mockUserLogin = vi.fn();

vi.mock('../../../api/auth/authApi', async () => ({
  ...(await vi.importActual<Record<string, unknown>>(
    '../../../api/auth/authApi'
  )),
  useLoginUserMutation: () => [mockUserLogin],
}));

describe('LoginForm', () => {
  beforeEach(() => {
    mockUserLogin.mockReset().mockResolvedValue({
      data: { success: true, message: 'Logowanie pomyślne.' },
    });
  });

  afterAll(() => {
    vi.restoreAllMocks();
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
      expect(mockUserLogin).toHaveBeenCalledTimes(1);
    });

    const cookies = document.cookie.split(';').map((cookie) => cookie.trim());
    console.log('Cookies:', cookies); 

    const authCookie = cookies.find((cookie) =>
      cookie.startsWith('accessToken=')
    );
    console.log('Auth Cookie:', authCookie);

    // expect(authCookie).toBeDefined();
  });
});
