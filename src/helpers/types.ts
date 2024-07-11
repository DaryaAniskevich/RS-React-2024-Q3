import React from 'react';

export type FoodItem = {
  alcoholicBeverage: boolean;
  beverage: boolean;
  dessert: boolean;
  earthlyOrigin: boolean;
  fruit: boolean;
  herbOrSpice: boolean;
  juice: boolean;
  name: string;
  sauce: boolean;
  soup: boolean;
  tea: boolean;
  uid: string;
};

export type FoodKeyTranslation = {
  [key: string]: string;
};

export type ResultsContext = {
  isLoading: boolean;
  isError: boolean;
  pages: number;
  items: FoodItem[];
  fetchData: ({ search, page }: { search?: string; page: number }) => void;
};

export type ErrorBoundaryProps = { fallback: React.ReactNode; children: React.ReactNode };

export type ResultsProps = {
  data: FoodItem[];
  isLoading: boolean;
  isError: boolean;
};
