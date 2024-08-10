import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { apiUrl } from '../../helpers/constants';
import { OneProductResponse } from '../../helpers/types';

export const oneProductApi = createApi({
  reducerPath: 'oneProductApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    getOneProduct: builder.query<OneProductResponse, string>({
      query: (id) => ({
        url: `?uid=${id}`,
      }),
    }),
  }),
});

export const { useGetOneProductQuery } = oneProductApi;
