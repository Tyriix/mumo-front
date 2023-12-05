import { describe, expect, it, vi } from 'vitest';
import { screen, fireEvent, waitFor, act } from '@testing-library/react';
import { renderWithProviders } from '../../../test/utils';
import RegisterForm from './RegisterForm';

const mockUserRegister= vi.fn();
const mockUseNavigate= vi.fn();

vi.mock('react-router-dom', async () => ({
  ...(await vi.importActual<Record<string, unknown>>('react-router-dom')),
  useNavigate: () => mockUseNavigate
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
        renderWithProviders(<RegisterForm />)
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

        const repeatPasswordNode = screen.getByTestId('register-form__input-repeat-password');
        expect(repeatPasswordNode).toBeInTheDocument();

        const agreeTermsNode = screen.getByTestId('register-form__input-checkbox');
        expect(agreeTermsNode).toBeInTheDocument();

        const submitButton = screen.getByRole('button', {
            name: /Zarejestruj się/i,
          });
          expect(submitButton).toBeInTheDocument();
    })

    it('Should display error messages on all empty imputs', async () => {
        renderWithProviders(<RegisterForm />);

        const registerButton = screen.getByRole('button', {
          name: /Zarejestruj się/i,
        });

        await waitFor(() => fireEvent.click(registerButton)).then(async () => {
          expect(
            screen.getByTestId('register-form__error-first-name')).toHaveTextContent('Proszę podać swoje imię.');

          expect(
            screen.getByTestId('register-form__error-last-name')).toHaveTextContent('Proszę podać swoje nazwisko.');

          expect(
            screen.getByTestId('register-form__error-email')).toHaveTextContent('Proszę podać swój adres email.');

          expect(
            screen.getByTestId('register-form__error-phone')).toHaveTextContent('Proszę podać swój numer telefonu.');

          expect(
            screen.getByTestId('register-form__error-password')).toHaveTextContent('Proszę podać swoje hasło.');

          expect(
            screen.getByTestId('register-form__error-repeat-password')).toHaveTextContent('Proszę potwierdzić swoje hasło.');

          expect(
            screen.getByTestId('register-form__error-agree-terms')).toHaveTextContent('Proszę zaakceptować zgodę na przetwarzanie danych osobowych.');
        });

      });

      it('Should submit the form successfully', async () => {
        renderWithProviders(<RegisterForm />);

        mockUserRegister.mockResolvedValue({
          data: {success: true, message: 'Logowanie pomyślne.', error: null}
        })
        
        const firstNameInput = screen.getByTestId('register-form__input-first-name');
        const lastNameInput = screen.getByTestId('register-form__input-last-name');
        const emailInput = screen.getByTestId('register-form__input-email');
        const phoneInput = screen.getByTestId('register-form__input-phone');
        const passwordInput = screen.getByTestId('register-form__input-password');
        const repeatPasswordInput = screen.getByTestId('register-form__input-repeat-password');
        const agreeTermsCheckbox = screen.getByTestId('register-form__input-checkbox');
        const registerButton = screen.getByRole('button', { name: /Zarejestruj się/i });

        fireEvent.change(firstNameInput,  {target: { value: 'Tescik' }})
        fireEvent.change(lastNameInput,  {target: { value: 'Tescikowy' }})
        fireEvent.change(emailInput,  {target: { value: 'test@test.com' }})
        fireEvent.change(phoneInput,  {target: { value: '132244132' }})
        fireEvent.change(passwordInput,  {target: { value: 'ABCabc123@' }})
        fireEvent.change(repeatPasswordInput,  {target: { value: 'ABCabc123@' }})
        fireEvent.click(agreeTermsCheckbox);

        await act(async () => {
          fireEvent.click(registerButton);
        });

        await waitFor(() => {
          expect(mockUserRegister).toHaveBeenCalledTimes(1);
          expect(mockUseNavigate).toHaveBeenCalledWith('/login');
        })
      });

      it('Should show validation errors', async () => {
        renderWithProviders(<RegisterForm />);

        const registerButton = screen.getByRole('button', {
          name: /Zarejestruj się/i,
        });
        
        const firstNameInput = screen.getByTestId('register-form__input-first-name');
        const lastNameInput = screen.getByTestId('register-form__input-last-name');
        const emailInput = screen.getByTestId('register-form__input-email');
        const phoneInput = screen.getByTestId('register-form__input-phone');
        const passwordInput = screen.getByTestId('register-form__input-password');
        const repeatPasswordInput = screen.getByTestId('register-form__input-repeat-password');

        fireEvent.change(firstNameInput,  {target: { value: '@escik' }})
        fireEvent.change(lastNameInput,  {target: { value: 'Tesc1kowy' }})
        fireEvent.change(emailInput,  {target: { value: 'testtest.com' }})
        fireEvent.change(phoneInput,  {target: { value: '13224413' }})
        fireEvent.change(passwordInput,  {target: { value: 'ABCabc123' }})
        fireEvent.change(repeatPasswordInput,  {target: { value: 'ABCabc13@' }})
       
        console.log(`Input value: ${firstNameInput.innerHTML}`)

        await waitFor(() => fireEvent.click(registerButton)).then(async () => {
          expect(
            screen.getByTestId('register-form__error-first-name')).toHaveTextContent('Niepoprawny format imienia.');

          expect(
            screen.getByTestId('register-form__error-last-name')).toHaveTextContent('Niepoprawny format nazwiska.');

          expect(
            screen.getByTestId('register-form__error-email')).toHaveTextContent('Proszę podać poprawny adres email.');

          expect(
            screen.getByTestId('register-form__error-phone')).toHaveTextContent('Numer telefonu musi składać się z 9 cyfr.');

          expect(
            screen.getByTestId('register-form__error-password')).toHaveTextContent('Wymagane: 8 znaków, duża i mała litera, cyfra, znak specjalny.');

          expect(
            screen.getByTestId('register-form__error-repeat-password')).toHaveTextContent('Hasła muszą się zgadzać.');

          expect(
            screen.getByTestId('register-form__error-agree-terms')).toHaveTextContent('Proszę zaakceptować zgodę na przetwarzanie danych osobowych.');
        })
      });
})