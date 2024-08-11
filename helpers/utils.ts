import { defaultPage } from './constants';

export const getCurrentPage = (queryPage: string | string[]) => {
  const page = typeof queryPage === 'string' ? queryPage : queryPage?.[0];
  return page ? +page : defaultPage;
};

export function convertToCSV<T>(data: T[]) {
  const firstItem = data[0];
  const headers = firstItem ? Object.keys(firstItem) : [];
  const rows = data.map((item) => headers.map((header) => item[header as keyof T]).join(','));
  return [headers.join(','), ...rows].join('\n');
}
