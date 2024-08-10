import { createContext, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import { ResultsContext } from '../helpers/types';
import getCurrentPage from '../helpers/utils';
import { defaultPage } from '../helpers/constants';

export const ResultContext = createContext<ResultsContext>({
  pages: 0,
  currentPage: defaultPage,
  setAllPagesFn: () => {},
});

export function ResultProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { query } = router;

  const currentPage = getCurrentPage(query.page);

  const [allPages, setAllPages] = useState(0);

  const setAllPagesFn = (pages: number) => {
    setAllPages(pages);
  };

  const value = useMemo(
    () => ({
      currentPage,
      pages: allPages,
      setAllPagesFn,
    }),
    [currentPage, allPages],
  );

  return <ResultContext.Provider value={value}>{children}</ResultContext.Provider>;
}
