import { useContext } from 'react';
import { MagazineItem } from '../../helpers/types';
import ListItem from './ListItem';
import style from './style.module.css';
import { SelectedContext } from '../../context/selectedContext';

function CardList({ items, currentPage }: { items: MagazineItem[]; currentPage: number }) {
  const { addSelectedItems, removeSelectedItem } = useContext(SelectedContext);

  const selectItem = (e: React.ChangeEvent<HTMLInputElement>, magazine: MagazineItem) => {
    const isChecked = e.target.checked;

    if (isChecked) {
      addSelectedItems(magazine);
    } else {
      removeSelectedItem(magazine);
    }
  };

  return items.length > 0 ? (
    <ul className={style.list}>
      {items.map((item) => (
        <ListItem
          key={item.uid}
          magazine={item}
          currentPage={currentPage}
          selectItem={selectItem}
        />
      ))}
    </ul>
  ) : (
    <div>No results</div>
  );
}

export default CardList;
