import { MagazineItem } from '../../helpers/types';
import ListItem from './ListItem';
import style from './style.module.css';

function CardList({ items, currentPage }: { items: MagazineItem[]; currentPage: number }) {
  return items.length > 0 ? (
    <ul className={style.list}>
      {items.map((item) => (
        <ListItem key={item.uid} magazine={item} currentPage={currentPage} />
      ))}
    </ul>
  ) : (
    <div>No results</div>
  );
}

export default CardList;
