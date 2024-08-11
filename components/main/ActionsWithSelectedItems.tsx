'use client';

import { useContext } from 'react';
import { convertToCSV } from '../../helpers/utils';
import ThemeContext from '../../context/themeContext';
import { SelectedContext } from '../../context/selectedContext';
import style from './style.module.css';
import ButtonGreen from '../common/ButtonGreen';

function ActionsWithSelectedItems() {
  const { theme } = useContext(ThemeContext);

  const { selectedItems, removeAllSelected } = useContext(SelectedContext);

  const numberOfSelectedItems = selectedItems.length;

  const unselectAll = () => {
    removeAllSelected();
  };

  const csvData = numberOfSelectedItems > 0 ? convertToCSV(selectedItems) : '';
  const csvFile =
    typeof URL.createObjectURL === 'function'
      ? URL.createObjectURL(new Blob([csvData], { type: 'text/csv;charset=utf-8;' }))
      : '';

  return (
    <div className={`${style[theme]} ${style.actions}`}>
      <span>
        {`${numberOfSelectedItems} ${numberOfSelectedItems === 1 ? 'item' : 'items'} selected`}{' '}
      </span>
      <ButtonGreen className={`${style[theme]} ${style.button_actions}`} onClick={unselectAll}>
        Unselect all
      </ButtonGreen>
      <a
        href={csvFile}
        download={`${numberOfSelectedItems}_magazines.csv`}
        className={`${style[theme]} ${style.button_actions} ${style.button_actions_csv}`}>
        Download
      </a>
    </div>
  );
}

export default ActionsWithSelectedItems;
