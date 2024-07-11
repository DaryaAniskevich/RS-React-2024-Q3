import { apiUrl } from '../helpers/constants';

const api = {
  getAllList: () => fetch(apiUrl).then((result) => result.json()),
  getSearchResult: (search: string) =>
    fetch(apiUrl, {
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
