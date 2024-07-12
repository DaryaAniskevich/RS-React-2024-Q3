import { Outlet } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

function ErrorBoundaryLayout({ children }: { children?: React.ReactNode }) {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Outlet />
      {children && children}
    </ErrorBoundary>
  );
}

ErrorBoundaryLayout.defaultProps = {
  children: null,
};

export default ErrorBoundaryLayout;
