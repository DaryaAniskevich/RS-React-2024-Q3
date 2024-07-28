import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { apiUrl, defaultPageSize } from '../../helpers/constants';
import { MagazineListResponse } from '../../helpers/types';

export const magazinesSearchApi = createApi({
  reducerPath: 'magazinesSearchApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    getSearchResult: builder.mutation<MagazineListResponse, { search: string; page: string }>({
      query: ({ search, page }) => ({
        url: `/search?pageNumber=${page}&pageSize=${defaultPageSize}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          title: search,
        }),
      }),
    }),
  }),
});

export const { useGetSearchResultMutation } = magazinesSearchApi;
