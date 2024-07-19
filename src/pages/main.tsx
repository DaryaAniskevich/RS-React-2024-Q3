import { useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import Search from '../components/main/Search';
import Results from '../components/main/Results';
import { ResultProvider } from '../context/resultContext';

function Main() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get('page')) {
      setSearchParams({ page: '1' });
    }
  }, [searchParams]);

  return (
    <main className="container">
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
