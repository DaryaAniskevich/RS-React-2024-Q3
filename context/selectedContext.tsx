import { createContext, useCallback, useMemo, useState } from 'react';
import { MagazineItem } from '../helpers/types';

export const SelectedContext = createContext({
  selectedItems: [] as MagazineItem[],
  addSelectedItems: (magazine: MagazineItem) => console.log(magazine),
  removeSelectedItem: (magazine: MagazineItem) => console.log(magazine),
  removeAllSelected: () => {},
});

export function SelectedProvider({ children }: { children: React.ReactNode }) {
  const [selectedItems, setSelectedItems] = useState<MagazineItem[]>([]);

  const addSelectedItems = useCallback(
    (magazine: MagazineItem) => {
      setSelectedItems([...selectedItems, magazine]);
    },
    [selectedItems],
  );

  const removeSelectedItem = useCallback(
    (magazine: MagazineItem) => {
      setSelectedItems(selectedItems.filter((item) => item.uid !== magazine.uid));
    },
    [selectedItems],
  );

  const removeAllSelected = useCallback(() => {
    setSelectedItems([]);
  }, []);

  const value = useMemo(
    () => ({ selectedItems, addSelectedItems, removeSelectedItem, removeAllSelected }),
    [selectedItems, addSelectedItems, removeSelectedItem, removeAllSelected],
  );

  return <SelectedContext.Provider value={value}>{children}</SelectedContext.Provider>;
}
