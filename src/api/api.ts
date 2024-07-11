import { apiUrl, defaultPageSize } from '../helpers/constants';

const api = {
  getAllList: (page: number) =>
    fetch(`${apiUrl}?pageNumber=${page}&pageSize=${defaultPageSize}`).then((result) =>
      result.json(),
    ),
  getSearchResult: (search: string, page: number) =>
    fetch(`${apiUrl}?pageNumber=${page}&pageSize=${defaultPageSize}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        name: search,
      }),
    }).then((result) => result.json()),
};

export default api;
