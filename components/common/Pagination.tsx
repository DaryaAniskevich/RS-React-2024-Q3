import { useContext } from 'react';
import { defaultPage } from '../../helpers/constants';
import ButtonGreen from './ButtonGreen';
import style from './style.module.css';
import ThemeContext from '../../context/themeContext';

function Pagination({
  pages,
  currentPage,
  changePage,
}: {
  pages: number;
  currentPage: number;
  changePage: (page: number) => void;
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={style.pagination}>
      <ButtonGreen
        className={`${style[theme]} ${style.button_pagination}`}
        disabled={currentPage === defaultPage}
        onClick={() => changePage(currentPage - 1)}>
        Prev
      </ButtonGreen>
      {currentPage} of {pages}
      <ButtonGreen
        className={`${style[theme]} ${style.button_pagination}`}
        disabled={currentPage >= pages}
        onClick={() => changePage(currentPage + 1)}>
        Next
      </ButtonGreen>
    </div>
  );
}

export default Pagination;
