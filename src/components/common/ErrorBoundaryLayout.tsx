import { Outlet } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import { ErrorBoundaryLayoutProps } from '../../helpers/types';

function ErrorBoundaryLayout({ children = null }: ErrorBoundaryLayoutProps) {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Outlet />
      {children && children}
    </ErrorBoundary>
  );
}

export default ErrorBoundaryLayout;
