import { createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/homepage';
import Error from './pages/error';

export const NOT_FOUND_PATH = '/404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <Error />,
  },
  {
    path: NOT_FOUND_PATH,
    element: <Error />,
  },
]);

export default router;
