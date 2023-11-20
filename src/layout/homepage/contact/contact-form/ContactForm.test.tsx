import { describe, it } from 'vitest';
import { renderWithProviders } from '../../../../__tests__/utils/_test-utils';
import ContactForm from './ContactForm';

describe('Contact', async () => {
  it('renders without errors', async () => {
    renderWithProviders(<ContactForm />);
  });
});
