import { fireEvent, render, screen } from '@testing-library/react';
import { it, vi } from 'vitest';
import * as reduxHooks from 'react-redux';
import ActionsWithSelectedItems from '../components/main/ActionsWithSelectedItems';
import * as actions from '../store/slices/selectedItemsSlice';

const selectedItems = {
  selectedItems: [
    {
      uid: '1',
    },
    {
      uid: '2',
    },
  ],
};

vi.mock('react-redux');

const mockedUseSelector = vi.spyOn(reduxHooks, 'useSelector');
const mockedDispatch = vi.spyOn(reduxHooks, 'useDispatch');

mockedUseSelector.mockReturnValue(selectedItems);

describe('Action buttons with selected render', () => {
  it('should render actionsWithSelected', () => {
    const component = render(<ActionsWithSelectedItems />);

    expect(component).toMatchSnapshot();
  });

  it('should uselect all items after click', () => {
    const dispatch = vi.fn();
    mockedDispatch.mockReturnValue(dispatch);

    const mockedRemoveAll = vi.spyOn(actions, 'removeAllSelected');

    render(<ActionsWithSelectedItems />);

    const unselectAllButton = screen.getByRole('button', { name: 'Unselect all' });
    expect(unselectAllButton).toBeInTheDocument();

    fireEvent.click(unselectAllButton);

    expect(dispatch).toHaveBeenCalledTimes(1);

    expect(mockedRemoveAll).toHaveBeenCalledTimes(1);
  });
});
