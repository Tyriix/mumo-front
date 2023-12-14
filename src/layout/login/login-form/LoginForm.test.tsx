import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import LoginForm from './LoginForm';
import { renderWithProviders } from '../../../__test__/utils';
import { vi } from 'vitest';
import { testValidConstants } from '../../../models/constants/test.constant';

const mockUserLogin = vi.fn();
const mockUseNavigate = vi.fn();

vi.mock('react-router-dom', async () => ({
  ...(await vi.importActual<Record<string, unknown>>('react-router-dom')),
  useNavigate: () => mockUseNavigate,
}));

vi.mock('../../../api/auth/authApi', async () => ({
  ...(await vi.importActual<Record<string, unknown>>(
    '../../../api/auth/authApi'
  )),
  useLoginUserMutation: () => [mockUserLogin],
}));

describe('LoginForm', () => {
  beforeEach(() => {
    mockUserLogin.mockReset();
  });

  afterEach(() => {
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

    mockUserLogin.mockResolvedValue({
      data: { success: true, message: 'Logowanie pomyślne.' },
    });

    const emailInput = screen.getByTestId('login__form-input-email');
    const passwordInput = screen.getByTestId('login__form-input-password');
    const loginButton = screen.getByRole('button', { name: /Zaloguj się/i });

    fireEvent.change(emailInput, {
      target: { value: testValidConstants.TEST_VALID_EMAIL },
    });
    fireEvent.change(passwordInput, {
      target: { value: testValidConstants.TEST_VALID_PASS },
    });

    await act(async () => {
      fireEvent.click(loginButton);
    });

    await waitFor(() => {
      expect(mockUserLogin).toHaveBeenCalledTimes(1);
      expect(mockUseNavigate).toHaveBeenCalledWith('/');
    });
  });

  it('Logs in unsuccessfully', async () => {
    renderWithProviders(<LoginForm />);

    mockUserLogin.mockReturnValue({
      error: { status: 400, data: 'Błędny email lub hasło.' },
    });

    const emailInput = screen.getByTestId('login__form-input-email');
    const passwordInput = screen.getByTestId('login__form-input-password');
    const loginButton = screen.getByRole('button', { name: /Zaloguj się/i });

    fireEvent.change(emailInput, {
      target: { value: testValidConstants.TEST_VALID_EMAIL },
    });
    fireEvent.change(passwordInput, {
      target: { value: testValidConstants.TEST_VALID_PASS },
    });

    await waitFor(() => fireEvent.click(loginButton)).then(async () => {
      expect(mockUserLogin).toHaveBeenCalledTimes(1);
      expect(mockUseNavigate).not.toHaveBeenCalledWith('/');
      expect(screen.getByText('Błędny email lub hasło.')).toBeInTheDocument();
    });
  });

  it('Error while logging in', async () => {
    renderWithProviders(<LoginForm />);

    mockUserLogin.mockReturnValue({
      error: { status: 400, data: 'Wystąpił błąd podczas logowania.' },
    });

    const emailInput = screen.getByTestId('login__form-input-email');
    const passwordInput = screen.getByTestId('login__form-input-password');
    const loginButton = screen.getByRole('button', { name: /Zaloguj się/i });

    fireEvent.change(emailInput, {
      target: { value: testValidConstants.TEST_VALID_EMAIL },
    });
    fireEvent.change(passwordInput, {
      target: { value: testValidConstants.TEST_VALID_PASS },
    });

    await waitFor(() => fireEvent.click(loginButton)).then(async () => {
      expect(mockUserLogin).toHaveBeenCalledTimes(1);
      expect(mockUseNavigate).not.toHaveBeenCalledWith('/');
      expect(
        screen.getByText('Wystąpił błąd podczas logowania.')
      ).toBeInTheDocument();
    });
  });

  it('Displays error messages for empty form submission', async () => {
    renderWithProviders(<LoginForm />);

    const loginButton = screen.getByRole('button', { name: /Zaloguj się/i });

    await act(async () => {
      fireEvent.click(loginButton);
    });

    await waitFor(() => {
      const emailErrorMessage = screen.getByText('Proszę wpisać swój email.');
      const passwordErrorMessage = screen.getByText(
        'Proszę podać swoje hasło.'
      );

      expect(emailErrorMessage).toBeInTheDocument();
      expect(passwordErrorMessage).toBeInTheDocument();
    });
  });
});
