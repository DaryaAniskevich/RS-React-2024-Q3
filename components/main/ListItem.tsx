import Link from 'next/link';

import { MagazineItem } from '../../helpers/types';
import { magazineKeyTranslation, PATHS } from '../../helpers/constants';
import style from './style.module.css';

function ListItem({ magazine, currentPage }: { magazine: MagazineItem; currentPage: number }) {
  const { title, publishedYear, numberOfPages, uid } = magazine;

  return (
    <li className={style.list_item}>
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
