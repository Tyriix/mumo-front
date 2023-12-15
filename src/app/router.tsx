import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../pages/homepage';
import Error from '../pages/error';
import Register from '../pages/register';
import Login from '../pages/login';
import Calendar from '../pages/calendar';
import Profile from '../pages/profile';
import Clients from '../pages/clients';
import ProtectedRoutes from './privateRoute';

export const NOT_FOUND_PATH = '/404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <Error />,
  },
  {
    element: <ProtectedRoutes />,
    children: [
            {
                path: "/calendar",
                element: <Calendar />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
              path: '/clients',
              element: <Clients />
            }
    ],
      },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: NOT_FOUND_PATH,
    element: <Error />,
  },
]);

export default router;
