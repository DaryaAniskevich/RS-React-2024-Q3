import { useContext } from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../assets/not-found.avif';
import { ThemeContext } from '../context/themeContext';

function NotFound() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`${theme} not-found`}>
      <h1>OOPS! This page is not found...</h1>
      <img src={notFoundImg} alt="Not found" />
      <Link to="/" className={theme}>
        Go to main
      </Link>
    </main>
  );
}

export default NotFound;
