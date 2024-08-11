import Link from 'next/link';
import { useContext } from 'react';

import { MagazineItem } from '../../helpers/types';
import { magazineKeyTranslation, PATHS } from '../../helpers/constants';
import style from './style.module.css';
import { SelectedContext } from '../../context/selectedContext';

function ListItem({
  magazine,
  currentPage,
  selectItem,
}: {
  magazine: MagazineItem;
  currentPage: number;
  selectItem: (e: React.ChangeEvent<HTMLInputElement>, magazine: MagazineItem) => void;
}) {
  const { title, publishedYear, numberOfPages, uid } = magazine;

  const { selectedItems } = useContext(SelectedContext);

  const isSelected = Boolean(selectedItems.find((items) => items.uid === uid));

  return (
    <li className={style.list_item}>
      <input type="checkbox" onChange={(e) => selectItem(e, magazine)} checked={isSelected} />
      <Link href={`${PATHS.DETAILS_PAGE}${uid}?page=${currentPage}`}>
        <span className={style.list_item__name}>Name: {title}</span>
        <span className={style.list_item__type}>
          {magazineKeyTranslation.publishedYear}: {publishedYear ?? 'No data'},{' '}
          {magazineKeyTranslation.numberOfPages}: {numberOfPages ?? 'No data'}
        </span>
      </Link>
    </li>
  );
}

export default ListItem;
