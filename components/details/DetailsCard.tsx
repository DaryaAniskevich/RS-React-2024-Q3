import { useRouter } from 'next/router';

import ErrorMessage from '../common/ErrorMessage';
import Loader from '../common/Loader';
import DetailsData from './DetailsData';
import getCurrentPage from '../../helpers/utils';
import { PATHS } from '../../helpers/constants';
import { DetailsCardProps } from '../../helpers/types';
import style from './style.module.css';
import ButtonWhite from '../common/ButtonWhite';

function DetailsCard({ data, isLoading, isError }: DetailsCardProps) {
  const router = useRouter();
  const { query } = router;

  const currentPage = getCurrentPage(query.page);

  const closeDetails = () => {
    router.push({
      pathname: PATHS.MAIN,
      query: { search: query.search, page: currentPage.toString() },
    });
  };

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (isError) {
    content = <ErrorMessage />;
  } else {
    content = <div>{data ? <DetailsData data={data} /> : 'No data found'}</div>;
  }

  return (
    <div className={style.details}>
      <ButtonWhite onClick={closeDetails}>Close</ButtonWhite>
      {content}
    </div>
  );
}

export default DetailsCard;
