import { useContext } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';
import ErrorMessage from '../common/ErrorMessage';
import Loader from '../common/Loader';
import DetailsData from './DetailsData';
import { getCurrentPage } from '../../helpers/utils';
import { PATHS } from '../../helpers/constants';
import { DetailsCardProps } from '../../helpers/types';
import { ThemeContext } from '../../context/themeContext';

function DetailsCard({ data, isLoading, isError }: DetailsCardProps) {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const [searchParams] = useSearchParams();
  const currentPage = getCurrentPage(searchParams);

  const closeDetails = () => {
    navigate(`${PATHS.MAIN}?page=${currentPage}`);
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
    <div className="content details">
      <button type="button" className={`${theme} button-close`} onClick={closeDetails}>
        Close
      </button>
      {content}
    </div>
  );
}

export default DetailsCard;
