import ErrorBoundaryLayout from '../../components/common/ErrorBoundaryLayout';
import DetailsCard from '../../components/details/DetailsCard';
import Results from '../../components/main/Results';
import Search from '../../components/main/Search';
import { ResultProvider } from '../../context/resultContext';
import { apiUrl, apiUrlSearch, defaultPageSize } from '../../helpers/constants';
import { MagazineListResponse, OneProductResponse } from '../../helpers/types';
import style from '../../styles/main.module.css';

export default function Details({
  dataAll,
  dataDetails,
}: {
  dataAll: MagazineListResponse | undefined;
  dataDetails: OneProductResponse | undefined;
}) {
  return (
    <ErrorBoundaryLayout>
      <main>
        <div className={style.container}>
          <div className={style.main}>
            <div className={style.content}>
              <ResultProvider>
                <Search />
                <Results data={dataAll} />
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
    </ErrorBoundaryLayout>
  );
}

export async function getServerSideProps(context) {
  const { uid } = context.params;
  const { page, search } = context.query;

  const responseAll = await fetch(
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
  const dataAll = await responseAll.json();

  const responseDetails = await fetch(`${apiUrl}?uid=${uid}`);

  const dataDetails = await responseDetails.json();

  return {
    props: {
      dataAll,
      dataDetails,
    },
  };
}
