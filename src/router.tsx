import { createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/homepage';
import Error from './pages/error';
import Registerpage from './pages/register';

export const NOT_FOUND_PATH = '/404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Registerpage />,
  },
  {
    path: NOT_FOUND_PATH,
    element: <Error />,
  },
]);

export default router;
