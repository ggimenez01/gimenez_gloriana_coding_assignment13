import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

const columns = ['Name', 'Age', 'City'];

const data = [
  { Name: 'John Doe', Age: 25, City: 'New York' },
  { Name: 'Jane Smith', Age: 30, City: 'Los Angeles' },
  { Name: 'Mike Johnson', Age: 35, City: 'Chicago' },
];

describe('Table', () => {
  it('renders table columns correctly', () => {
    render(<Table data={data} columns={columns} />);
    const tableHeader = screen.getByRole('table');
    const columnHeaderElements = screen.getAllByRole('columnheader');

    expect(tableHeader).toBeInTheDocument();
    expect(columnHeaderElements.length).toBe(columns.length);
  });

  it('renders table rows and data correctly', () => {
    render(<Table data={data} columns={columns} />);
    const tableBody = screen.getByRole('table');
    const rowElements = screen.getAllByRole('row');

    expect(tableBody).toBeInTheDocument();
    expect(rowElements.length).toBe(data.length);
  });
});
