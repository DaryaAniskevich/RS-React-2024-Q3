import React from 'react';

export type MagazineItem = {
  uid: string;
  title: string;
  publishedYear: number | null;
  publishedMonth: number | null;
  publishedDay: number | null;
  coverYear: number | null;
  coverMonth: number | null;
  coverDay: number | null;
  numberOfPages: number | null;
  issueNumber: string | null;
};

export type ResultsContext = {
  isLoading: boolean;
  isError: boolean;
  pages: number;
  items: MagazineItem[];
  fetchData: ({ search, page }: { search?: string; page: number }) => void;
};

export type ErrorBoundaryProps = { fallback: React.ReactNode; children: React.ReactNode };

export type ResultsProps = {
  data: MagazineItem[];
  isLoading: boolean;
  isError: boolean;
};
