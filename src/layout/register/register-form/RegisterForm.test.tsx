import { describe, expect, it, vi } from 'vitest';
import { screen, fireEvent, waitFor, act } from '@testing-library/react';
import { renderWithProviders } from '../../../__test__/utils';
import RegisterForm from './RegisterForm';
import {
  testInvalidConstants,
  testValidConstants,
} from '../../../models/constants/test.constant';

const mockUserRegister = vi.fn();
const mockUseNavigate = vi.fn();

vi.mock('react-router-dom', async () => ({
  ...(await vi.importActual<Record<string, unknown>>('react-router-dom')),
  useNavigate: () => mockUseNavigate,
}));

vi.mock('../../../api/auth/authApi', async () => ({
  ...(await vi.importActual<Record<string, unknown>>(
    '../../../api/auth/authApi'
  )),
  useRegisterUserMutation: () => [mockUserRegister],
}));

describe('Register', async () => {
  beforeEach(() => {
    mockUserRegister.mockReset();
    mockUseNavigate.mockReset();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('Should render correctly', async () => {
    renderWithProviders(<RegisterForm />);
    const firstNameNode = screen.getByTestId('register-form__input-first-name');
    expect(firstNameNode).toBeInTheDocument();

    const lastNameNode = screen.getByTestId('register-form__input-last-name');
    expect(lastNameNode).toBeInTheDocument();

    const emailNode = screen.getByTestId('register-form__input-email');
    expect(emailNode).toBeInTheDocument();

    const phoneNode = screen.getByTestId('register-form__input-phone');
    expect(phoneNode).toBeInTheDocument();

    const passwordNode = screen.getByTestId('register-form__input-password');
    expect(passwordNode).toBeInTheDocument();

    const repeatPasswordNode = screen.getByTestId(
      'register-form__input-repeat-password'
    );
    expect(repeatPasswordNode).toBeInTheDocument();

    const agreeTermsNode = screen.getByTestId('register-form__input-checkbox');
    expect(agreeTermsNode).toBeInTheDocument();

    const submitButton = screen.getByRole('button', {
      name: /Zarejestruj się/i,
    });
    expect(submitButton).toBeInTheDocument();
  });

  it('Should display error messages on all empty inputs', async () => {
    renderWithProviders(<RegisterForm />);

    const registerButton = screen.getByRole('button', {
      name: /Zarejestruj się/i,
    });

    await waitFor(() => fireEvent.click(registerButton)).then(async () => {
      expect(
        screen.getByTestId('register-form__error-first-name')
      ).toHaveTextContent('Proszę podać swoje imię.');

      expect(
        screen.getByTestId('register-form__error-last-name')
      ).toHaveTextContent('Proszę podać swoje nazwisko.');

      expect(
        screen.getByTestId('register-form__error-email')
      ).toHaveTextContent('Proszę podać swój adres email.');

      expect(
        screen.getByTestId('register-form__error-phone')
      ).toHaveTextContent('Proszę podać swój numer telefonu.');

      expect(
        screen.getByTestId('register-form__error-password')
      ).toHaveTextContent('Proszę podać swoje hasło.');

      expect(
        screen.getByTestId('register-form__error-repeat-password')
      ).toHaveTextContent('Proszę potwierdzić swoje hasło.');

      expect(
        screen.getByTestId('register-form__error-agree-terms')
      ).toHaveTextContent(
        'Proszę zaakceptować zgodę na przetwarzanie danych osobowych.'
      );
    });
  });

  it('Should submit the form successfully', async () => {
    renderWithProviders(<RegisterForm />);

    mockUserRegister.mockResolvedValue({
      data: { success: true, message: 'Rejestracja pomyślna.', error: null },
    });

    const firstNameInput = screen.getByTestId(
      'register-form__input-first-name'
    );
    const lastNameInput = screen.getByTestId('register-form__input-last-name');
    const emailInput = screen.getByTestId('register-form__input-email');
    const phoneInput = screen.getByTestId('register-form__input-phone');
    const passwordInput = screen.getByTestId('register-form__input-password');
    const repeatPasswordInput = screen.getByTestId(
      'register-form__input-repeat-password'
    );
    const agreeTermsCheckbox = screen.getByTestId(
      'register-form__input-checkbox'
    );
    const registerButton = screen.getByRole('button', {
      name: /Zarejestruj się/i,
    });

    fireEvent.change(firstNameInput, {
      target: { value: testValidConstants.TEST_VALID_FIRST_NAME },
    });
    fireEvent.change(lastNameInput, {
      target: { value: testValidConstants.TEST_VALID_LAST_NAME },
    });
    fireEvent.change(emailInput, {
      target: { value: testValidConstants.TEST_VALID_EMAIL },
    });
    fireEvent.change(phoneInput, {
      target: { value: testValidConstants.TEST_VALID_PHONE },
    });
    fireEvent.change(passwordInput, {
      target: { value: testValidConstants.TEST_VALID_PASS },
    });
    fireEvent.change(repeatPasswordInput, {
      target: { value: testValidConstants.TEST_VALID_PASS },
    });
    fireEvent.click(agreeTermsCheckbox);

    await act(async () => {
      fireEvent.click(registerButton);
    });

    await waitFor(() => {
      expect(mockUserRegister).toHaveBeenCalledTimes(1);
      expect(mockUseNavigate).toHaveBeenCalledWith('/login');
    });
  });
  it('Should show unexpected error occured', async () => {
    renderWithProviders(<RegisterForm />);

    mockUserRegister.mockResolvedValue({
      error: {
        status: 500,
        data: 'Wystąpił nieoczekiwany problem podczas procesu rejestracji.',
      },
    });

    const firstNameInput = screen.getByTestId(
      'register-form__input-first-name'
    );
    const lastNameInput = screen.getByTestId('register-form__input-last-name');
    const emailInput = screen.getByTestId('register-form__input-email');
    const phoneInput = screen.getByTestId('register-form__input-phone');
    const passwordInput = screen.getByTestId('register-form__input-password');
    const repeatPasswordInput = screen.getByTestId(
      'register-form__input-repeat-password'
    );
    const agreeTermsCheckbox = screen.getByTestId(
      'register-form__input-checkbox'
    );
    const registerButton = screen.getByRole('button', {
      name: /Zarejestruj się/i,
    });

    fireEvent.change(firstNameInput, {
      target: { value: testValidConstants.TEST_VALID_FIRST_NAME },
    });
    fireEvent.change(lastNameInput, {
      target: { value: testValidConstants.TEST_VALID_LAST_NAME },
    });
    fireEvent.change(emailInput, {
      target: { value: testValidConstants.TEST_VALID_EMAIL },
    });
    fireEvent.change(phoneInput, {
      target: { value: testValidConstants.TEST_VALID_PHONE },
    });
    fireEvent.change(passwordInput, {
      target: { value: testValidConstants.TEST_VALID_PASS },
    });
    fireEvent.change(repeatPasswordInput, {
      target: { value: testValidConstants.TEST_VALID_PASS },
    });
    fireEvent.click(agreeTermsCheckbox);

    await act(async () => {
      fireEvent.click(registerButton);
    });

    await waitFor(() => {
      expect(mockUserRegister).toHaveBeenCalledTimes(1);
      expect(mockUseNavigate).not.toHaveBeenCalledWith('/login');
      expect(
        screen.getByText(
          'Wystąpił nieoczekiwany problem podczas procesu rejestracji.'
        )
      ).toBeInTheDocument();
    });
  });
  it('Should show email taken error', async () => {
    renderWithProviders(<RegisterForm />);

    mockUserRegister.mockResolvedValue({
      error: { status: 400, data: 'Użytkownik o podanej nazwie już istnieje.' },
    });

    const firstNameInput = screen.getByTestId(
      'register-form__input-first-name'
    );
    const lastNameInput = screen.getByTestId('register-form__input-last-name');
    const emailInput = screen.getByTestId('register-form__input-email');
    const phoneInput = screen.getByTestId('register-form__input-phone');
    const passwordInput = screen.getByTestId('register-form__input-password');
    const repeatPasswordInput = screen.getByTestId(
      'register-form__input-repeat-password'
    );
    const agreeTermsCheckbox = screen.getByTestId(
      'register-form__input-checkbox'
    );
    const registerButton = screen.getByRole('button', {
      name: /Zarejestruj się/i,
    });

    fireEvent.change(firstNameInput, {
      target: { value: testValidConstants.TEST_VALID_FIRST_NAME },
    });
    fireEvent.change(lastNameInput, {
      target: { value: testValidConstants.TEST_VALID_LAST_NAME },
    });
    fireEvent.change(emailInput, {
      target: { value: testValidConstants.TEST_VALID_EMAIL },
    });
    fireEvent.change(phoneInput, {
      target: { value: testValidConstants.TEST_VALID_PHONE },
    });
    fireEvent.change(passwordInput, {
      target: { value: testValidConstants.TEST_VALID_PASS },
    });
    fireEvent.change(repeatPasswordInput, {
      target: { value: testValidConstants.TEST_VALID_PASS },
    });
    fireEvent.click(agreeTermsCheckbox);

    await act(async () => {
      fireEvent.click(registerButton);
    });

    await waitFor(() => {
      expect(mockUserRegister).toHaveBeenCalledTimes(1);
      expect(mockUseNavigate).not.toHaveBeenCalledWith('/login');
      expect(
        screen.getByText('Użytkownik o tym mailu już istnieje.')
      ).toBeInTheDocument();
    });
  });

  it('Should show validation errors', async () => {
    const { getByTestId } = renderWithProviders(<RegisterForm />);

    fireEvent.input(getByTestId('register-form__input-first-name'), {
      target: { value: testInvalidConstants.TEST_INVALID_FIRST_NAME },
    });
    fireEvent.input(getByTestId('register-form__input-last-name'), {
      target: { value: testInvalidConstants.TEST_INVALID_LAST_NAME },
    });
    fireEvent.input(getByTestId('register-form__input-email'), {
      target: { value: testInvalidConstants.TEST_INVALID_EMAIL },
    });
    fireEvent.input(getByTestId('register-form__input-phone'), {
      target: { value: testInvalidConstants.TEST_INVALID_PHONE },
    });
    fireEvent.input(getByTestId('register-form__input-password'), {
      target: { value: testInvalidConstants.TEST_INVALID_PASS },
    });
    fireEvent.input(getByTestId('register-form__input-repeat-password'), {
      target: { value: testInvalidConstants.TEST_INVALID_REPEAT_PASS },
    });
    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      expect(
        screen.getByTestId('register-form__error-first-name')
      ).toHaveTextContent('Niepoprawny format imienia.');

      expect(
        screen.getByTestId('register-form__error-last-name')
      ).toHaveTextContent('Niepoprawny format nazwiska.');

      expect(
        screen.getByTestId('register-form__error-email')
      ).toHaveTextContent('Proszę podać poprawny adres email.');

      expect(
        screen.getByTestId('register-form__error-phone')
      ).toHaveTextContent('Numer telefonu musi składać się z 9 cyfr.');

      expect(
        screen.getByTestId('register-form__error-password')
      ).toHaveTextContent(
        'Wymagane: 8 znaków, duża i mała litera, cyfra, znak specjalny.'
      );

      expect(
        screen.getByTestId('register-form__error-repeat-password')
      ).toHaveTextContent('Hasła muszą się zgadzać.');

      expect(
        screen.getByTestId('register-form__error-agree-terms')
      ).toHaveTextContent(
        'Proszę zaakceptować zgodę na przetwarzanie danych osobowych.'
      );
    });
  });
});
