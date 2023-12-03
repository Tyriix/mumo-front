// import { describe, expect, it } from 'vitest';
// import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../../test/utils';
import RegisterForm from './RegisterForm';

describe('Register', async () => {
    it('Should render correctly', async () => {
        renderWithProviders(<RegisterForm />)

    })
})