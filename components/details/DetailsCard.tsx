'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import ErrorMessage from '../common/ErrorMessage';
import Loader from '../common/Loader';
import DetailsData from './DetailsData';
import { PATHS } from '../../helpers/constants';
import { DetailsCardProps } from '../../helpers/types';
import style from './style.module.css';
import ButtonWhite from '../common/ButtonWhite';

function DetailsCard({ data, isLoading, isError }: DetailsCardProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const search = searchParams.get('search');

  const closeDetails = () => {
    router.push(`${PATHS.MAIN}?page=${page}&search=${search}`);
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
