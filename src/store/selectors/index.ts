import { createSelector } from '@reduxjs/toolkit';

import { MagazineListResponse } from '../../helpers/types';
import { RootState } from '../store';

export const selectSearchResultData = createSelector(
  (state) => state.magazinesSearchApi,
  (api) => {
    const mutations = api.mutations as { data: MagazineListResponse | undefined }[];
    return Object.values(mutations)[1]?.data;
  },
);

export const selectedItemsSelector = (state: RootState) => state.selectedItems;
