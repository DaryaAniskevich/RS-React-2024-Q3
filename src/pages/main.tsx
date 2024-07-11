import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
      <ResultProvider>
        <Search />
        <Results />
      </ResultProvider>
    </main>
  );
}

export default Main;
