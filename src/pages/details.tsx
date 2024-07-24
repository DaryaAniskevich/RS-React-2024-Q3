import { useParams } from 'react-router-dom';
import DetailsCard from '../components/details/DetailsCard';
import { useGetOneProductQuery } from '../store/services/magazinesApi';

function Details() {
  const { uid } = useParams();

  const { data, isFetching, error } = useGetOneProductQuery(uid as string, {
    refetchOnMountOrArgChange: true,
    skip: !uid,
  });

  return (
    <DetailsCard data={data?.magazine || null} isLoading={isFetching} isError={Boolean(error)} />
  );
}

export default Details;
