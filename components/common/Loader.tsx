import { useContext } from 'react';
import style from './style.module.css';
import ThemeContext from '../../context/themeContext';

function Loader() {
  const { theme } = useContext(ThemeContext);

  return <div className={`${style[theme]} ${style.loader}`} data-testid="loader" />;
}

export default Loader;
