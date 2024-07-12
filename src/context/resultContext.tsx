import { createContext, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MagazineItem, ResultsContext } from '../helpers/types';
import useLocalStorageSearchValue from '../helpers/hooks';
import api from '../api/api';
import getCurrentPage from '../helpers/utils';
import { defaultPage } from '../helpers/constants';

export const ResultContext = createContext<ResultsContext>({
  isLoading: false,
  isError: false,
  pages: 0,
  currentPage: defaultPage,
  items: [],
  fetchData: () => {},
});

export function ResultProvider({ children }: { children: React.ReactNode }) {
  const { searchValue } = useLocalStorageSearchValue();
  const [searchParams] = useSearchParams();

  const currentPage = getCurrentPage(searchParams);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [allPages, setAllPages] = useState(0);
  const [items, setItems] = useState<MagazineItem[]>([]);

  const setRequestResult = (data: MagazineItem[], pages: number) => {
    setIsLoading(false);
    setItems(data);
    setAllPages(pages);
  };

  const fetchData = ({ search, page }: { search?: string; page: number }) => {
    const pageForApi = page - 1 >= 0 ? page - 1 : 0;
    try {
      setIsLoading(true);
      setIsError(false);
      if (search) {
        api.getSearchResult(search, pageForApi).then((result) => {
          setRequestResult(result.magazines, result.page.totalPages);
        });
      } else {
        api.getAllList(pageForApi).then((result) => {
          setRequestResult(result.magazines, result.page.totalPages);
        });
      }
    } catch (e) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData({ search: searchValue, page: currentPage });
  }, []);

  const value = useMemo(
    () => ({ isLoading, isError, currentPage, pages: allPages, items, fetchData }),
    [isLoading, isError, currentPage, items, fetchData],
  );

  return <ResultContext.Provider value={value}>{children}</ResultContext.Provider>;
}
