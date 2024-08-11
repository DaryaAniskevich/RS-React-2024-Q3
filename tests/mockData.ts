import { defaultPage } from '../helpers/constants';
import { MagazineItem, MagazineListResponse, OneProductResponse } from '../helpers/types';

export const currentPage = defaultPage;
export const title = 'Test Magazine 1';
export const publishedYear = 1999;
export const numberOfPages = 70;
export const seriesTitle = 'Test Series Magazine 1';
export const seriesPublishedYear = 1995;
export const publisherName = 'Test Publisher 1';

export const item = {
  uid: '1',
  title,
  publishedYear,
  publishedMonth: null,
  publishedDay: null,
  coverYear: null,
  coverMonth: null,
  coverDay: null,
  numberOfPages,
  issueNumber: null,
  magazineSeries: [
    {
      numberOfIssues: '240',
      publishedMonthFrom: null,
      publishedMonthTo: null,
      publishedYearFrom: seriesPublishedYear,
      publishedYearTo: null,
      title: seriesTitle,
      uid: '2',
    },
  ],
  publishers: [
    {
      broadcaster: false,
      collectibleCompany: false,
      conglomerate: false,
      digitalVisualEffectsCompany: false,
      distributor: false,
      filmEquipmentCompany: false,
      gameCompany: false,
      makeUpEffectsStudio: false,
      mattePaintingCompany: false,
      modelAndMiniatureEffectsCompany: false,
      name: publisherName,
      postProductionCompany: false,
      productionCompany: false,
      propCompany: false,
      recordLabel: false,
      specialEffectsCompany: false,
      tvAndFilmProductionCompany: false,
      uid: '3',
      videoGameCompany: false,
    },
  ],
  editors: [],
};

export const magazineListResponse: MagazineListResponse = {
  page: {
    pageNumber: 0,
    pageSize: 10,
    numberOfElements: 0,
    totalElements: 0,
    totalPages: 1,
    firstPage: true,
    lastPage: true,
  },
  sort: {
    clauses: [],
  },
  magazines: [],
};

export const oneProductResponse: OneProductResponse = {
  magazine: item,
};

export const selectedItems: MagazineItem[] = [
  {
    uid: '1',
    title: 'Test Magazine 1',
    publishedYear: 1999,
    publishedMonth: null,
    publishedDay: null,
    coverYear: null,
    coverMonth: null,
    coverDay: null,
    numberOfPages: 70,
    issueNumber: null,
  },
];

const addSelectedItems = (magazine: MagazineItem) => {
  selectedItems.push(magazine);
};

const removeSelectedItem = (magazine: MagazineItem) => {
  selectedItems.filter((_item) => _item.uid !== magazine.uid);
};
const removeAllSelected = () => {
  selectedItems.length = 0;
};

export const selectedProviderValue = {
  selectedItems,
  addSelectedItems,
  removeSelectedItem,
  removeAllSelected,
};

export const magazineListResponseWithData: MagazineListResponse = {
  page: {
    pageNumber: 1,
    pageSize: 10,
    numberOfElements: 0,
    totalElements: 0,
    totalPages: 1,
    firstPage: true,
    lastPage: true,
  },
  sort: {
    clauses: [],
  },
  magazines: selectedItems,
};
