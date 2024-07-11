import { NavLink } from 'react-router-dom';
import { FoodItem, FoodKeyTranslation } from '../../helpers/types';
import { foodKeyTranslation, PATHS } from '../../helpers/constants';

function ListItem({ food, currentPage }: { food: FoodItem; currentPage: number }) {
  const { name } = food;

  const type = Object.entries(food)
    .filter(([key, value]) => {
      if (typeof value === 'boolean' && value) return [key, value];
      return null;
    })
    .map(([key]) => (foodKeyTranslation as FoodKeyTranslation)[key]);

  return (
    <li className="list-item">
      <NavLink to={`${PATHS.DETAILS_PAGE}${food.uid}?page=${currentPage}`}>
        <span className="list-item__name">Name: {name}</span>
        <span className="list-item__type">
          Type:{' '}
          {type.length
            ? type.reduce(
                (acc: string, item, index, arr) =>
                  acc + item + (index < arr.length - 1 ? ', ' : ''),
                '',
              )
            : 'No info'}
        </span>
      </NavLink>
    </li>
  );
}

export default ListItem;
