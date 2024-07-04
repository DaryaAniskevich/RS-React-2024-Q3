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

export type ResultsState = { isLoading: boolean; isError: boolean; items: FoodItem[] };
