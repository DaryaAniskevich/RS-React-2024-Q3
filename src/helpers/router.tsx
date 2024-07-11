import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/main';
import NotFound from '../pages/notFound';
import ErrorBoundaryLayout from '../components/common/ErrorBoundaryLayout';

const router = createBrowserRouter([
  {
    element: <ErrorBoundaryLayout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
