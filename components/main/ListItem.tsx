import Link from 'next/link';

import { MagazineItem } from '../../helpers/types';
import { magazineKeyTranslation, PATHS } from '../../helpers/constants';

function ListItem({ magazine, currentPage }: { magazine: MagazineItem; currentPage: number }) {
  const { title, publishedYear, numberOfPages, uid } = magazine;

  return (
    <li className="list-item">
      <Link href={`${PATHS.DETAILS_PAGE}${uid}?page=${currentPage}`}>
        <span className="list-item__name">Name: {title}</span>
        <span className="list-item__type">
          {magazineKeyTranslation.publishedYear}: {publishedYear ?? 'No data'},{' '}
          {magazineKeyTranslation.numberOfPages}: {numberOfPages ?? 'No data'}
        </span>
      </Link>
    </li>
  );
}

export default ListItem;
