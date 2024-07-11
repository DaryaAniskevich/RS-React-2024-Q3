import { useState } from 'react';
import Search from '../components/main/Search';
import Results from '../components/main/Results';

function Main() {
  const [isError, setIsError] = useState(false);

  const addError = () => {
    setIsError(true);
  };

  if (isError) {
    throw new Error('Something went wrong');
  }

  return (
    <main className="container">
      <button type="button" onClick={addError} className="button-boundary">
        Check Error Boundary
      </button>
      <Search />
      <Results />
    </main>
  );
}

export default Main;
