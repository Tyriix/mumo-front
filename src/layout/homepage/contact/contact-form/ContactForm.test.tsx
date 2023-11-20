import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../../../utils/testUtils';
import ContactForm from './ContactForm';

describe('Contact', async () => {
  it('Should render correctly', async () => {
    renderWithProviders(<ContactForm />);
    const emailLabel = screen.getByLabelText('Email');
    expect(emailLabel).toBeInTheDocument();

    const nameLabel = screen.getByLabelText('Imię');
    expect(nameLabel).toBeInTheDocument();

    const messageLabel = screen.getByLabelText('Wiadomość');
    expect(messageLabel).toBeInTheDocument();

    const agreeTermsLabel = screen.getByLabelText('Wyrażam zgodę na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi na składaną wiadomość.');
    expect(agreeTermsLabel).toBeInTheDocument();

    const submitButton = screen.getByText('Wyślij');
    expect(submitButton).toBeInTheDocument();
  });
});
