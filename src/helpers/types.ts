import React from 'react';

type MagazineItemKeyValue = number | null;

export type MagazineItem = {
  uid: string;
  title: string;
  publishedYear: MagazineItemKeyValue;
  publishedMonth: MagazineItemKeyValue;
  publishedDay: MagazineItemKeyValue;
  coverYear: MagazineItemKeyValue;
  coverMonth: MagazineItemKeyValue;
  coverDay: MagazineItemKeyValue;
  numberOfPages: MagazineItemKeyValue;
  issueNumber: string | null;
};

export type MagazineListResponse = {
  page: {
    pageNumber: number;
    pageSize: number;
    numberOfElements: number;
    totalElements: number;
    totalPages: number;
    firstPage: boolean;
    lastPage: boolean;
  };
  sort: {
    clauses: [];
  };
  magazines: MagazineItem[];
};

type PublisherItem = {
  broadcaster: boolean;
  collectibleCompany: boolean;
  conglomerate: boolean;
  digitalVisualEffectsCompany: boolean;
  distributor: boolean;
  filmEquipmentCompany: boolean;
  gameCompany: boolean;
  makeUpEffectsStudio: boolean;
  mattePaintingCompany: boolean;
  modelAndMiniatureEffectsCompany: boolean;
  name: string;
  postProductionCompany: boolean;
  productionCompany: boolean;
  propCompany: boolean;
  recordLabel: boolean;
  specialEffectsCompany: boolean;
  tvAndFilmProductionCompany: boolean;
  uid: string;
  videoGameCompany: boolean;
};

type MagazineSeriesItem = {
  uid: string;
  title: string;
  publishedYearFrom: MagazineItemKeyValue;
  publishedMonthFrom: MagazineItemKeyValue;
  publishedYearTo: MagazineItemKeyValue;
  publishedMonthTo: MagazineItemKeyValue;
  numberOfIssues: string | null;
};

export type MagazineDetailsItem = MagazineItem & {
  magazineSeries: MagazineSeriesItem[];
  editors: unknown[];
  publishers: PublisherItem[];
};

export type ResultsContext = {
  isLoading: boolean;
  isError: boolean;
  pages: number;
  currentPage: number;
  fetchData: ({ search, page }: { search?: string; page: number }) => void;
};

export type ErrorBoundaryProps = { fallback: React.ReactNode; children: React.ReactNode };

export type ResultsProps = {
  data: MagazineItem[];
  isLoading: boolean;
  isError: boolean;
};

export type DetailsCardProps = {
  data: MagazineDetailsItem | null;
  isLoading: boolean;
  isError: boolean;
};

export type ErrorBoundaryLayoutProps = { children?: React.ReactNode };
