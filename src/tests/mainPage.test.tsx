import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Main from '../pages/main';
import ErrorBoundaryLayout from '../components/common/ErrorBoundaryLayout';

describe('Main page render', () => {
  it('should render error boundary element on Check error button click', async () => {
    render(
      <BrowserRouter>
        <ErrorBoundaryLayout>
          <Main />
        </ErrorBoundaryLayout>
      </BrowserRouter>,
    );
    const errorButton = screen.getByRole('button', { name: 'Check Error' });

    fireEvent.click(errorButton);

    const fallbackUI = screen.getByText('Something went wrong');
    expect(fallbackUI).toBeInTheDocument();
  });
});
