import { FoodItem, FoodKeyTranslation } from '../../helpers/types';
import { foodKeyTranslation } from '../../helpers/constants';

function ListItem({ food }: { food: FoodItem }) {
  const { name } = food;

  const type = Object.entries(food)
    .filter(([key, value]) => {
      if (typeof value === 'boolean' && value) return [key, value];
      return null;
    })
    .map(([key]) => (foodKeyTranslation as FoodKeyTranslation)[key]);

  return (
    <li className="list-item">
      <span className="list-item__name">Name: {name}</span>
      <span className="list-item__type">
        Type:{' '}
        {type.length
          ? type.reduce(
              (acc: string, item, index, arr) => acc + item + (index < arr.length - 1 ? ', ' : ''),
              '',
            )
          : 'No info'}
      </span>
    </li>
  );
}

export default ListItem;
