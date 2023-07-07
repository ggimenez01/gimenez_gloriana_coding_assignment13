import React from 'react';
import { render, screen } from '@testing-library/react';
import TableFooter from './TableFooter';

describe('TableFooter', () => {
  it('renders footer text correctly', () => {
    const text = 'Footer Text';
    const numColumns = 3; // Provide the appropriate number of columns

    render(<TableFooter text={text} numColumns={numColumns} />);
    const footerText = screen.getByText(text);

    expect(footerText).toBeInTheDocument();
  });
});
