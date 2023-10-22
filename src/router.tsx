import { createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/homepage';
import Error from './pages/error';
import Login from './pages/login';

export const NOT_FOUND_PATH = '/404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
