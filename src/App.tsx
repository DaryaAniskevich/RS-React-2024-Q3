import React from 'react';
import './App.css';
import Main from './pages/main';
import ErrorBoundary from './components/common/ErrorBoundary';

export default class App extends React.Component {
  render() {
    return (
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Main />
      </ErrorBoundary>
    );
  }
}
