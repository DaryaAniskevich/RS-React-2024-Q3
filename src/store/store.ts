import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { oneProductApi } from './services/oneProductApi';
import { magazinesSearchApi } from './services/magazinesSearchApi';

const store = configureStore({
  reducer: {
    [magazinesSearchApi.reducerPath]: magazinesSearchApi.reducer,
    [oneProductApi.reducerPath]: oneProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(magazinesSearchApi.middleware, oneProductApi.middleware),
});

setupListeners(store.dispatch);

export default store;
