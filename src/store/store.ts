import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { oneProductApi } from './services/oneProductApi';
import { magazinesSearchApi } from './services/magazinesSearchApi';
import selectedItemsReducer from './slices/selectedItemsSlice';

const store = configureStore({
  reducer: {
    [magazinesSearchApi.reducerPath]: magazinesSearchApi.reducer,
    [oneProductApi.reducerPath]: oneProductApi.reducer,
    selectedItems: selectedItemsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(magazinesSearchApi.middleware, oneProductApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export default store;
