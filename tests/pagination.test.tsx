// import { fireEvent, render, screen } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { ResultProvider } from '../context/resultContext';
// import Pagination from '../components/common/Pagination';
// import { currentPage } from './mockData';
// import store from '../../store/store';

// describe('Pagination render', () => {
//   it('should update URL on page change', () => {
//     const page = currentPage + 1;
//     const initialSearchParams = new URLSearchParams({ page: page.toString() });
//     window.history.pushState({}, '', `?${initialSearchParams.toString()}`);

//     const changePage = (newPage: number) => {
//       window.history.pushState({}, '', `?page=${newPage}`);
//     };

//     render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <ResultProvider>
//             <Pagination pages={3} currentPage={page} changePage={changePage} />
//           </ResultProvider>
//         </BrowserRouter>
//       </Provider>,
//     );

//     const prevButtonElement = screen.getByText('Prev');
//     const nextButtonElement = screen.getByText('Next');

//     const text = screen.getByText(`${page} of 3`);

//     expect(text).toBeInTheDocument();

//     fireEvent.click(prevButtonElement);

//     expect(window.location.search).toContain(`?page=${page - 1}`);

//     fireEvent.click(nextButtonElement);

//     expect(window.location.search).toContain(`?page=${page + 1}`);

//     expect(nextButtonElement).toBeInTheDocument();
//   });
// });
