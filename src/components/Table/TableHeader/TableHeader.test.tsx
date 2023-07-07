import React from 'react';
import { render, screen } from '@testing-library/react';
import TableHeader from './TableHeader';

describe('TableHeader', () => {
  it('renders header columns correctly', () => {
    const columns = ['Column 1', 'Column 2', 'Column 3'];
    const backgroundColor = '#f2f2f2';

    render(
      <table>
        <TableHeader columns={columns} backgroundColor={backgroundColor} />
      </table>
    );

    columns.forEach((column) => {
      const headerColumn = screen.getByText(column);
      expect(headerColumn).toBeInTheDocument();
    });
  });
});
