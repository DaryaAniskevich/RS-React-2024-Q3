import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/main';
import NotFound from '../pages/notFound';
import ErrorBoundaryLayout from '../components/common/ErrorBoundaryLayout';
import Details from '../pages/details';
import { PATHS } from './constants';

const router = createBrowserRouter([
  {
    element: <ErrorBoundaryLayout />,
    children: [
      {
        path: PATHS.MAIN,
        element: <Main />,
        children: [
          {
            path: PATHS.DETAILS,
            element: <Details />,
          },
        ],
      },
      {
        path: PATHS.NOT_FOUND,
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
