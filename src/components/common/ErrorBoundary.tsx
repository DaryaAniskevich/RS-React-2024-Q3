import React from 'react';
import { ErrorBoundaryProps } from '../../helpers/types';

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  { hasError: boolean }
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  //   componentDidCatch(error, info) {
  //     logErrorToMyService(error, info.componentStack);
  //   }

  render() {
    const { fallback, children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return fallback;
    }

    return children;
  }
}
