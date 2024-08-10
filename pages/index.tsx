// import { Outlet } from "react-router-dom";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ResultProvider } from '../context/resultContext';
import Search from '../components/main/Search';
import Results from '../components/main/Results';
import { apiUrlSearch, defaultPageSize } from '../helpers/constants';
import ErrorBoundaryLayout from '../components/common/ErrorBoundaryLayout';
import style from '../styles/main.module.css';
import { MagazineListResponse } from '../helpers/types';

export default function Page({ data }: { data: MagazineListResponse | undefined }) {
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    if (!query.page) {
      router.replace({ query: { ...query, page: '1' } });
    }
  }, [router, query]);

  return (
    <ErrorBoundaryLayout>
      <main>
        <div className={style.container}>
          <div className={style.main}>
            <div className={style.content}>
              <ResultProvider>
                <Search />
                <Results data={data} />
              </ResultProvider>
            </div>
          </div>
        </div>
      </main>
    </ErrorBoundaryLayout>
  );
}

export async function getServerSideProps(context) {
  const { page, search } = context.query;

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

  const data = await response.json();

  const pages = Array.from({ length: data.page.totalPages }, (_, i) => i + 1).map((_page) => ({
    params: { page: _page },
  }));

  return {
    props: {
      data,
      pages,
    },
  };
}
