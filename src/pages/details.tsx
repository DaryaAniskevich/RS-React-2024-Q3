import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api';
import { MagazineDetailsItem } from '../helpers/types';
import DetailsCard from '../components/details/DetailsCard';

function Details() {
  const { uid } = useParams();

  const [data, setData] = useState<MagazineDetailsItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async (id: string) => {
      try {
        setIsError(false);
        setIsLoading(true);

        const result = await api.getOneProduct(id as string);

        setData(result?.magazine || null);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (uid) {
      fetchData(uid);
    }
  }, [uid]);

  return <DetailsCard data={data} isLoading={isLoading} isError={isError} />;
}

export default Details;
