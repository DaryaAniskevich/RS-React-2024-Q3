import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import Search from '../components/main/Search';
import Results from '../components/main/Results';
import { ResultProvider } from '../context/resultContext';

function Main() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isError, setIsError] = useState(false);

  const addError = () => {
    setIsError(true);
  };

  useEffect(() => {
    if (!searchParams.get('page')) {
      setSearchParams({ page: '1' });
    }
  }, [searchParams]);

  if (isError) {
    throw new Error('Something went wrong');
  }

  return (
    <main className="container">
      <button type="button" onClick={addError} className="button-boundary">
        Check Error Boundary
      </button>
      <div className="main">
        <div className="content">
          <ResultProvider>
            <Search />
            <Results />
          </ResultProvider>
        </div>
        <Outlet />
      </div>
    </main>
  );
}

export default Main;
