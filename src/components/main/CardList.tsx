import { useDispatch } from 'react-redux';
import { MagazineItem } from '../../helpers/types';
import ListItem from './ListItem';
import { addSelectedItems, removeSelectedItem } from '../../store/slices/selectedItemsSlice';

function CardList({ items, currentPage }: { items: MagazineItem[]; currentPage: number }) {
  const dispatch = useDispatch();
  const selectItem = (e: React.ChangeEvent<HTMLInputElement>, magazine: MagazineItem) => {
    const isChecked = e.target.checked;

    if (isChecked) {
      dispatch(addSelectedItems(magazine));
    } else {
      dispatch(removeSelectedItem(magazine));
    }
  };

  return items.length > 0 ? (
    <ul className="list">
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
