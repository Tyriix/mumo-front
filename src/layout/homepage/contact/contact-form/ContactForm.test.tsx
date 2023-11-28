import { describe, expect, it } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../../../test/utils.test';
import ContactForm from './ContactForm';

describe('Contact', async () => {
  it('Should render correctly', async () => {
    renderWithProviders(<ContactForm />);
    const emailNode = screen.getByLabelText('Email');
    expect(emailNode).toBeInTheDocument();

    const nameNode = screen.getByLabelText('Imię');
    expect(nameNode).toBeInTheDocument();

    const messageNode = screen.getByLabelText('Wiadomość');
    expect(messageNode).toBeInTheDocument();

    const agreeTermsNode = screen.getByLabelText(
      'Wyrażam zgodę na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi na składaną wiadomość.'
    );
    expect(agreeTermsNode).toBeInTheDocument();

    const submitButton = screen.getByRole('button', {
      name: /Wyślij/i,
    });
    expect(submitButton).toBeInTheDocument();
  });

  it('Should display error messages on all empty imputs', async () => {
    renderWithProviders(<ContactForm />);
    const submitButton = screen.getByRole('button', {
      name: /Wyślij/i,
    });
    await waitFor(() => fireEvent.click(submitButton)).then(async () => {
      expect(
        screen.getByText('Proszę podać swój adres email.')
      ).toBeInTheDocument();
      expect(
        screen.getByText('Proszę podać swoją wiadomość.')
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          'Proszę zaakceptować zgodę na przetwarzanie danych osobowych.'
        )
      ).toBeInTheDocument();
    });
  });

  it('Should submit the form successfully', async () => {
    const { getByTestId } = renderWithProviders(<ContactForm />);

    fireEvent.input(getByTestId('contact-form_email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.input(getByTestId('contact-form_name'), {
      target: { value: 'John Doe' },
    });
    fireEvent.input(getByTestId('contact-form_message'), {
      target: { value: 'This is a test message' },
    });
    fireEvent.click(getByTestId('contact-form_agreeTerms'));

    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      const successMessage = screen.getByText('Wiadomość wysłana');
      expect(successMessage).toBeDefined();
    });
  });

  it('Should display input error messages', async () => {
    const { getByTestId } = renderWithProviders(<ContactForm />);

    fireEvent.input(getByTestId('contact-form_email'), {
      target: { value: 'testexample.com' },
    });
    fireEvent.input(getByTestId('contact-form_name'), {
      target: { value: 'John1 Doe' },
    });
    fireEvent.input(getByTestId('contact-form_message'), {
      target: { value: '' },
    });

    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      const emailErrorMessage = screen.getByText('Proszę podać poprawny adres email.');
      const nameErrorMessage = screen.getByText('Pole zawiera niedozwolone znaki.');
      const messageErrorMessage = screen.getByText('Proszę podać swoją wiadomość.');
      const termsErrorMessage = screen.getByText('Proszę zaakceptować zgodę na przetwarzanie danych osobowych.');
      expect(emailErrorMessage).toBeDefined();
      expect(nameErrorMessage).toBeDefined();
      expect(messageErrorMessage).toBeDefined();
      expect(termsErrorMessage).toBeDefined();
    });
  });
});
