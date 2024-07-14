import { defaultPage } from '../helpers/constants';

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
