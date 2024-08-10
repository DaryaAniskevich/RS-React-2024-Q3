// import selectedItemsReducer, {
//   addSelectedItems,
//   removeAllSelected,
//   removeSelectedItem,
// } from '../store/slices/selectedItemsSlice';

// const items = [
//   {
//     uid: '1',
//     title: 'Test Magazine 1',
//     publishedYear: 1999,
//     publishedMonth: null,
//     publishedDay: null,
//     coverYear: null,
//     coverMonth: null,
//     coverDay: null,
//     numberOfPages: 70,
//     issueNumber: null,
//   },
// ];

// describe('selectedItemsSlice', () => {
//   it('should return default state when passed an empty action', () => {
//     const result = selectedItemsReducer(undefined, { type: '' });
//     expect(result).toEqual({ selectedItems: [] });
//   });

//   it('should add selected item with addSelectedItems action', () => {
//     const action = { type: addSelectedItems.type, payload: items[0] };
//     const result = selectedItemsReducer({ selectedItems: [] }, action);
//     if (result.selectedItems && result.selectedItems[0]) {
//       expect(result.selectedItems[0].uid).toBe('1');
//     }
//   });

//   it('should remove selected item with removeSelectedItem action', () => {
//     const action = { type: removeSelectedItem.type, payload: items[0] };
//     const result = selectedItemsReducer({ selectedItems: items }, action);
//     expect(result).toEqual({ selectedItems: [] });
//   });

//   it('should remove all selected items with removeAllSelected action', () => {
//     const action = { type: removeAllSelected.type };
//     const result = selectedItemsReducer({ selectedItems: items }, action);
//     expect(result).toEqual({ selectedItems: [] });
//   });
// });
