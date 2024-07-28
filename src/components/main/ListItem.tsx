import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MagazineItem } from '../../helpers/types';
import { magazineKeyTranslation, PATHS } from '../../helpers/constants';
import { selectedItemsSelector } from '../../store/selectors';

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
  const { selectedItems } = useSelector(selectedItemsSelector);

  const isSelected = Boolean(selectedItems.find((items) => items.uid === uid));

  return (
    <li className="list-item">
      <input type="checkbox" onChange={(e) => selectItem(e, magazine)} checked={isSelected} />
      <NavLink to={`${PATHS.DETAILS_PAGE}${uid}?page=${currentPage}`}>
        <span className="list-item__name">Name: {title}</span>
        <span className="list-item__type">
          {magazineKeyTranslation.publishedYear}: {publishedYear ?? 'No data'},{' '}
          {magazineKeyTranslation.numberOfPages}: {numberOfPages ?? 'No data'}
        </span>
      </NavLink>
    </li>
  );
}

export default ListItem;
