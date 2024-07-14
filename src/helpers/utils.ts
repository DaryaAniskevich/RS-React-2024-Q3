import { defaultPage } from './constants';

const getCurrentPage = (searchParams: URLSearchParams) => {
  const page = searchParams.get('page');
  return page ? +page : defaultPage;
};

export default getCurrentPage;
