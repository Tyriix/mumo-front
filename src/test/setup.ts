import '@testing-library/jest-dom';
import createFetchMock from 'vitest-fetch-mock';
import { vi } from 'vitest';
import { setupServer } from 'msw/node';
import handlers from './mocks/handlers';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const fetchMocker = createFetchMock(vi);

fetchMocker.enableMocks();
