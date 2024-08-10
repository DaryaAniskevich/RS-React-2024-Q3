import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

function Loader() {
  const { theme } = useContext(ThemeContext);

  return <div className={`${theme} loader`} data-testid="loader" />;
}

export default Loader;
