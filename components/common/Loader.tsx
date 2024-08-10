import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import style from './style.module.css';

function Loader() {
  const { theme } = useContext(ThemeContext);

  return <div className={`${style[theme]} ${style.loader}`} data-testid="loader" />;
}

export default Loader;
