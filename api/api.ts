import { apiUrlSearch, defaultPageSize } from '../helpers/constants';

async function fetchSearchData(page: number, search: string) {
  const response = await fetch(
    `${apiUrlSearch}?pageNumber=${page ? page - 1 : 0}&pageSize=${defaultPageSize}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        title: search || '',
      }),
    },
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

export default fetchSearchData;
