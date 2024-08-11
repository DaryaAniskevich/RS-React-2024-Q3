import { ResultProvider } from '../context/resultContext';
import Search from '../components/main/Search';
import Results from '../components/main/Results';
import { apiUrlSearch, defaultPage, defaultPageSize } from '../helpers/constants';
import style from '../styles/main.module.css';
import { fetchSearchData } from '../api/api';

export async function generateStaticParams() {
  const response = await fetch(
    `${apiUrlSearch}?pageNumber=${defaultPage - 1}&pageSize=${defaultPageSize}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        title: '',
      }),
    },
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();

  const arr = Array.from({ length: data.page.totalPages }, (_, i) => i + 1);

  return arr.map((page) => ({ page: page.toString() }));
}

export default async function Page({ params }: { params: { page: string; search: string } }) {
  const { page, search } = params;

  await fetchSearchData(+page || 1, search || '');

  return (
    <main>
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.content}>
            <ResultProvider page={page}>
              <Search />
              <Results />
            </ResultProvider>
          </div>
        </div>
      </div>
    </main>
  );
}
