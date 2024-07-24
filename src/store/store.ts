import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { magazinesApi } from './services/magazinesApi';

const store = configureStore({
  reducer: {
    [magazinesApi.reducerPath]: magazinesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(magazinesApi.middleware),
});

setupListeners(store.dispatch);

export default store;
