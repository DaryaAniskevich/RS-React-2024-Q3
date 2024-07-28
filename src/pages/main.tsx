import { useContext, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import Search from '../components/main/Search';
import Results from '../components/main/Results';
import { ResultProvider } from '../context/resultContext';
import { ThemeContext } from '../context/themeContext';

function Main() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (!searchParams.get('page')) {
      setSearchParams({ page: '1' });
    }
  }, [searchParams]);

  return (
    <main className={theme}>
      <div className="container">
        <div className="main">
          <div className="content">
            <ResultProvider>
              <Search />
              <Results />
            </ResultProvider>
          </div>
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default Main;
