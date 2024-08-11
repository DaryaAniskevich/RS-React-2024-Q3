'use client';

import ErrorBoundaryLayout from '../components/common/ErrorBoundaryLayout';
import './index.css';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return <ErrorBoundaryLayout>{children}</ErrorBoundaryLayout>;
}
