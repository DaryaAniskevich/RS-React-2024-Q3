import { fireEvent, render, screen } from '@testing-library/react';
import { it } from 'vitest';
import ActionsWithSelectedItems from '../components/main/ActionsWithSelectedItems';
import { SelectedContext, SelectedProvider } from '../context/selectedContext';
import { selectedItems, selectedProviderValue } from './mockData';

describe('Action buttons with selected render', () => {
  it('should render actionsWithSelected', () => {
    render(
      <SelectedContext.Provider value={selectedProviderValue}>
        <ActionsWithSelectedItems />
      </SelectedContext.Provider>,
    );

    expect(screen.getByText(`${selectedItems.length} item selected`)).toBeInTheDocument();
  });

  it('should unselect all items after click', () => {
    render(
      <SelectedProvider>
        <ActionsWithSelectedItems />
      </SelectedProvider>,
    );

    const unselectAllButton = screen.getByRole('button', { name: 'Unselect all' });
    expect(unselectAllButton).toBeInTheDocument();

    fireEvent.click(unselectAllButton);

    expect(screen.queryByText(`${selectedItems.length} item selected`)).not.toBeInTheDocument();
  });
});
