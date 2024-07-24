import { createContext, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ResultsContext } from '../helpers/types';
import useLocalStorageSearchValue from '../helpers/hooks';
import getCurrentPage from '../helpers/utils';
import { defaultPage } from '../helpers/constants';
import { useGetSearchResultMutation } from '../store/services/magazinesSearchApi';

export const ResultContext = createContext<ResultsContext>({
  isLoading: false,
  isError: false,
  pages: 0,
  currentPage: defaultPage,
  fetchData: () => {},
});

export function ResultProvider({ children }: { children: React.ReactNode }) {
  const { searchValue } = useLocalStorageSearchValue();
  const [searchParams] = useSearchParams();

  const currentPage = getCurrentPage(searchParams);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [allPages, setAllPages] = useState(0);

  const [getSearchResult] = useGetSearchResultMutation();

  const fetchData = async ({ search, page }: { search?: string; page: number }) => {
    const pageForApi = page - 1 >= 0 ? page - 1 : 0;

    try {
      setIsLoading(true);
      setIsError(false);

      const result = await getSearchResult({ search: search || '', page: String(pageForApi) });

      setAllPages(result.data?.page.totalPages || 0);

      setIsLoading(false);
    } catch (e) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData({ search: searchValue, page: currentPage });
  }, []);

  const value = useMemo(
    () => ({
      isLoading,
      isError,
      currentPage,
      pages: allPages,
      fetchData,
    }),
    [isLoading, isError, currentPage, fetchData],
  );

  return <ResultContext.Provider value={value}>{children}</ResultContext.Provider>;
}
