// import { fireEvent, render, screen } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
// import { PATHS } from '../helpers/constants';
// import DetailsCard from '../components/details/DetailsCard';
// import DetailsData from '../components/details/DetailsData';
// import {
//   currentPage,
//   item,
//   numberOfPages,
//   publishedYear,
//   publisherName,
//   seriesTitle,
//   title,
// } from './mockData';

// describe('Details card render', () => {
//   it('should render relevant details card data', () => {
//     render(
//       <BrowserRouter>
//         <DetailsCard data={item} isLoading={false} isError={false} />
//       </BrowserRouter>,
//     );

//     const titleElement = screen.getByText(`${title}, ${numberOfPages} pages (${publishedYear})`);

//     expect(titleElement).toBeInTheDocument();
//   });

//   it('should show loader while fetching data', () => {
//     render(
//       <BrowserRouter>
//         <DetailsCard data={null} isLoading isError={false} />
//       </BrowserRouter>,
//     );

//     const loader = screen.getByTestId('loader');
//     expect(loader).toBeInTheDocument();
//   });

//   it('should show error message if error', () => {
//     render(
//       <BrowserRouter>
//         <DetailsCard data={null} isLoading={false} isError />
//       </BrowserRouter>,
//     );

//     const errorElement = screen.getByText('Something went wrong');

//     expect(errorElement).toBeInTheDocument();
//   });

//   it('should hide details after clicking close button', () => {
//     render(
//       <BrowserRouter>
//         <DetailsCard data={null} isLoading isError={false} />
//       </BrowserRouter>,
//     );

//     const closeButton = screen.getByRole('button');
//     fireEvent.click(closeButton);

//     const { location } = window;
//     const { pathname, search } = location;
//     expect(pathname + search).toBe(`${PATHS.MAIN}?page=${currentPage}`);
//   });

//   it('should render detail data in card', () => {
//     render(
//       <BrowserRouter>
//         <DetailsData data={item} />
//       </BrowserRouter>,
//     );

//     const titleElement = screen.getByText(`${title}, ${numberOfPages} pages (${publishedYear})`);
//     const seriesTitleElement = screen.getByText(`Magazine series: ${seriesTitle}`);
//     const publisherElement = screen.getByText(`Publisher: ${publisherName}`);

//     expect(titleElement).toBeInTheDocument();
//     expect(seriesTitleElement).toBeInTheDocument();
//     expect(publisherElement).toBeInTheDocument();
//   });
// });
