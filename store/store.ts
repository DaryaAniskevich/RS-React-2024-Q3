import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { oneProductApi } from './services/oneProductApi';
import { magazinesSearchApi } from './services/magazinesSearchApi';
import selectedItemsReducer from './slices/selectedItemsSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      [magazinesSearchApi.reducerPath]: magazinesSearchApi.reducer,
      [oneProductApi.reducerPath]: oneProductApi.reducer,
      selectedItems: selectedItemsReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(magazinesSearchApi.middleware, oneProductApi.middleware),
  });

export const store = makeStore();

setupListeners(store.dispatch);

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
