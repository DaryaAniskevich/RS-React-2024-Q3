import { useContext } from 'react';
import { ButtonGreenProps } from '../../helpers/types';
import style from './style.module.css';
import ThemeContext from '../../context/themeContext';

function ButtonGreen({ children, onClick, className = '', disabled = false }: ButtonGreenProps) {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      className={`${style.button} ${style.button_green}  ${style[theme]} ${className}`}
      type="button"
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
}

export default ButtonGreen;
