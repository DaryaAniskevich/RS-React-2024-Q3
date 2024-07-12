import { apiUrl, apiUrlSearch, defaultPageSize } from '../helpers/constants';

const api = {
  getAllList: (page: number) =>
    fetch(`${apiUrlSearch}?pageNumber=${page}&pageSize=${defaultPageSize}`).then((result) =>
      result.json(),
    ),
  getSearchResult: (search: string, page: number) =>
    fetch(`${apiUrlSearch}?pageNumber=${page}&pageSize=${defaultPageSize}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        title: search,
      }),
    }).then((result) => result.json()),

  getOneProduct: (uid: string) => fetch(`${apiUrl}?uid=${uid}`).then((result) => result.json()),
};

export default api;
