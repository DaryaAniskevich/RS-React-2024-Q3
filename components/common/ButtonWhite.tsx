import { useContext } from 'react';
import { ButtonGreenProps } from '../../helpers/types';
import style from './style.module.css';
import { ThemeContext } from '../../context/themeContext';

function ButtonWhite({ children, onClick, className = '', disabled = false }: ButtonGreenProps) {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      className={`${style.button} ${style.button_white}  ${style[theme]} ${className}`}
      type="button"
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
}

export default ButtonWhite;
