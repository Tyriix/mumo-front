// Imports
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';
import { Provider } from 'react-redux';
import { store } from '../../../../app/store';
import 'whatwg-fetch'
import React, { isValidElement } from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import router from '../../../../app/router';
// Tests

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function renderWithRouter(children: React.ReactElement<unknown, string | React.JSXElementConstructor<any>>, routes = []) {
    const options = isValidElement(children)
      ? { element: children, path: "/" }
      : children;
  
    const router = createMemoryRouter([{ ...options }, ...routes], {
      initialEntries: [options.path],
      initialIndex: 1,
    });
  
    return render(<RouterProvider router={router} />);
  }
  
describe("Renders a blank contact form", async () => {
    
    it("Should render a blank contact form", async () => {
        renderWithRouter(
            <Provider store={store}>
                <ContactForm/>
            </Provider>
);
        const email = await screen.queryByText('Email');

        expect(email).not.toBeNull();
    })
  });
  