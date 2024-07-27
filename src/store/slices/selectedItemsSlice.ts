import { createSlice } from '@reduxjs/toolkit';
import { MagazineItem } from '../../helpers/types';

const initialState: { selectedItems: MagazineItem[] } = {
  selectedItems: [],
};
const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    addSelectedItems: (state, action) => {
      state.selectedItems.push(action.payload);
    },

    removeSelectedItems: (state, action) => {
      state.selectedItems = state.selectedItems.filter((item) => item.uid !== action.payload.uid);
    },
  },
});

const { actions, reducer: selectedItemsReducer } = selectedItemsSlice;

export const { addSelectedItems, removeSelectedItems } = actions;

export default selectedItemsReducer;
