import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api';
import Loader from '../components/common/Loader';
import ErrorMessage from '../components/common/ErrorMessage';
import { FoodItem } from '../helpers/types';

function Details() {
  const { uid } = useParams();

  const [data, setData] = useState<FoodItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async (id: string) => {
      try {
        setIsError(false);
        setIsLoading(true);

        const result = await api.getOneProduct(id as string);

        setData(result?.food || null);
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

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (isError) {
    content = <ErrorMessage />;
  } else {
    content = <div>{data ? 'result' : 'No data found'}</div>;
  }

  return <div className="content details">{content}</div>;
}

export default Details;
