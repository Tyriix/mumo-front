import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';
import { Provider } from 'react-redux';
import { store } from '../../../../app/store';
  
describe("Renders a blank contact form", async () => {
    
    it("Should render a blank contact form", async () => {
        render(
            <Provider store={store}>
                <ContactForm/>
            </Provider>
            );
        const email = await screen.queryByText('Email');

        expect(email).not.toBeNull();
    })
  });
  