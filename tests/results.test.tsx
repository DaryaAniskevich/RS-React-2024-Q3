// import '@testing-library/jest-dom';

// import { render, screen } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { ResultContext } from '../context/resultContext';
// import Results from '../components/main/Results';
// import store from '../../store/store';

// const providerValue = {
//   currentPage: 1,
//   isLoading: false,
//   isError: false,
//   pages: 1,
//   fetchData: () => {},
// };

// describe('Results page render', () => {
//   it('should render 0 items and show no results message', () => {
//     render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <ResultContext.Provider value={providerValue}>
//             <Results />
//           </ResultContext.Provider>
//         </BrowserRouter>
//       </Provider>,
//     );

//     const textElement = screen.getByText('No results');
//     expect(textElement).toBeInTheDocument();
//   });

//   it('should show Error message in case of error', () => {
//     providerValue.isError = true;
//     render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <ResultContext.Provider value={providerValue}>
//             <Results />
//           </ResultContext.Provider>
//         </BrowserRouter>
//       </Provider>,
//     );

//     const textElement = screen.getByText('Something went wrong');
//     expect(textElement).toBeInTheDocument();
//   });

//   it('should show Loader in case of loading', () => {
//     providerValue.isLoading = true;

//     render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <ResultContext.Provider value={providerValue}>
//             <Results />
//           </ResultContext.Provider>
//         </BrowserRouter>
//       </Provider>,
//     );

//     const loader = screen.getByTestId('loader');
//     expect(loader).toBeInTheDocument();
//   });
// });
