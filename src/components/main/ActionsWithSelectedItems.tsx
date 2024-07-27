import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from '../../context/themeContext';
import { selectedItemsSelector } from '../../store/selectors';
import { removeAllSelected } from '../../store/slices/selectedItemsSlice';

function ActionsWithSelectedItems() {
  const { theme } = useContext(ThemeContext);

  const dispatch = useDispatch();
  const { selectedItems } = useSelector(selectedItemsSelector);

  const unselectAll = () => {
    dispatch(removeAllSelected());
  };

  const numberOfSelectedItems = selectedItems.length;
  return numberOfSelectedItems > 0 ? (
    <div className="actions">
      <span>
        {numberOfSelectedItems} {numberOfSelectedItems === 1 ? 'item' : 'items'} selected{' '}
      </span>
      <button type="button" className={`${theme} button-actions`} onClick={unselectAll}>
        Unselect all
      </button>
      <button type="button" className={`${theme} button-actions`}>
        Download
      </button>
    </div>
  ) : null;
}

export default ActionsWithSelectedItems;
