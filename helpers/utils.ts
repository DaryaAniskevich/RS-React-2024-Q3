import { defaultPage } from './constants';

const getCurrentPage = (queryPage: string | string[]) => {
  const page = typeof queryPage === 'string' ? queryPage : queryPage?.[0];
  return page ? +page : defaultPage;
};

export default getCurrentPage;
