import { render, screen } from '@testing-library/react';
import ClientLayout from '../app/clientLayout';

describe('ClientLayout', () => {
  it('renders html and body elements', () => {
    render(
      <ClientLayout>
        <div>Content</div>
      </ClientLayout>,
    );

    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
