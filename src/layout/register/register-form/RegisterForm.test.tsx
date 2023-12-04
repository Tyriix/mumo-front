import { describe, expect, it, vi } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../../test/utils';
import RegisterForm from './RegisterForm';
import { createMemoryHistory } from 'history';
import * as Navigation from 'react-router-dom';

describe('Register', async () => {


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

        const submitButton = screen.getByRole('button', {
          name: /Zarejestruj się/i,
        });

        await waitFor(() => fireEvent.click(submitButton)).then(async () => {
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
        const spy = vi.spyOn(Navigation, 'useNavigation')
        const history = createMemoryHistory();
        const { getByTestId } = renderWithProviders(<RegisterForm />);
        history.push('/register');
        fireEvent.input(getByTestId('register-form__input-first-name'), {
            target: { value: 'Tescik' },
          });
        fireEvent.input(getByTestId('register-form__input-last-name'), {
            target: { value: 'Tescikowy' },
          });
        fireEvent.input(getByTestId('register-form__input-email'), {
            target: { value: 'test@test.com' },
          });
        fireEvent.input(getByTestId('register-form__input-phone'), {
            target: { value: '132244132' },
          });
        fireEvent.input(getByTestId('register-form__input-password'), {
            target: { value: 'Teścik123' },
          });
        fireEvent.input(getByTestId('register-form__input-repeat-password'), {
            target: { value: 'Teścik123' },
          });

        fireEvent.submit(screen.getByRole('form'));

        await waitFor(() => {
            console.log(spy);
          });
      });
})