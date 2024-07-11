import { Outlet } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

function ErrorBoundaryLayout() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Outlet />
    </ErrorBoundary>
  );
}

export default ErrorBoundaryLayout;
