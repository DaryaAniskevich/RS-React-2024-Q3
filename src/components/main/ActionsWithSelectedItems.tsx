import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from '../../context/themeContext';
import { selectedItemsSelector } from '../../store/selectors';
import { removeAllSelected } from '../../store/slices/selectedItemsSlice';
import { convertToCSV } from '../../helpers/utils';

function ActionsWithSelectedItems() {
  const { theme } = useContext(ThemeContext);

  const dispatch = useDispatch();
  const { selectedItems } = useSelector(selectedItemsSelector);

  const numberOfSelectedItems = selectedItems.length;

  const unselectAll = () => {
    dispatch(removeAllSelected());
  };

  const csvData = numberOfSelectedItems > 0 ? convertToCSV(selectedItems) : '';
  const csvFile = URL.createObjectURL(new Blob([csvData], { type: 'text/csv;charset=utf-8;' }));

  return (
    <div className={`${theme} actions`}>
      <span>
        {numberOfSelectedItems} {numberOfSelectedItems === 1 ? 'item' : 'items'} selected{' '}
      </span>
      <button type="button" className={`${theme} button-actions`} onClick={unselectAll}>
        Unselect all
      </button>
      <a
        href={csvFile}
        download={`${numberOfSelectedItems}_magazines.csv`}
        className={`${theme} button-actions button-actions-csv`}>
        Download
      </a>
    </div>
  );
}

export default ActionsWithSelectedItems;
