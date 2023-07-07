import React from 'react';
import { render, screen } from '@testing-library/react';
import TableRow from './TableRow';

describe('TableRow', () => {
  it('renders cells correctly', () => {
    const cells = ['Cell 1', 'Cell 2', 'Cell 3'];
    const backgroundColor = '#f2f2f2';

    render(
      <table>
        <tbody>
          <TableRow
            cells={cells}
            backgroundColor={backgroundColor}
            fontSize="16px"
            disabled={false}
          />
        </tbody>
      </table>
    );

    cells.forEach((cell) => {
      const tableCell = screen.getByText(cell);
      expect(tableCell).toBeInTheDocument();
    });
  });
});
