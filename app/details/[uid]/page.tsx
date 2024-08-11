import { fetchSearchData, getDetailsData } from '../../../api/api';
import DetailsCard from '../../../components/details/DetailsCard';
import Results from '../../../components/main/Results';
import Search from '../../../components/main/Search';
import { ResultProvider } from '../../../context/resultContext';
import { apiUrlSearch, defaultPage } from '../../../helpers/constants';
import { MagazineListResponse } from '../../../helpers/types';
import style from '../../../styles/main.module.css';

export async function generateStaticParams() {
  const response = await fetch(`${apiUrlSearch}?pageNumber=${defaultPage - 1}&pageSize=1000`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      title: '',
    }),
  });
  const data = (await response.json()) as MagazineListResponse;

  return data?.magazines.map((item) => ({ uid: item.uid }));
}

export default async function Details({
  params,
}: {
  params: { page: string; search: string; uid: string };
}) {
  const { page, search, uid } = params;

  await fetchSearchData(+page || 0, search || '');

  const dataDetails = await getDetailsData(uid as string);

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
          <DetailsCard
            data={dataDetails?.magazine || null}
            isLoading={!dataDetails}
            isError={false}
          />
        </div>
      </div>
    </main>
  );
}
