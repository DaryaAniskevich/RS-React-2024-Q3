import './App.css';
import Main from './pages/main';
import ErrorBoundary from './components/common/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Main />
    </ErrorBoundary>
  );
}

export default App;
