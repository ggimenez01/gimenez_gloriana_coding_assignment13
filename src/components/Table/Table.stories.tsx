import React from 'react';
import Table from './Table';

export default {
  title: 'Components/Table',
  component: Table,
};

export const Default = () => (
  <Table
    data={[
      { Name: 'John Doe', Age: 25, City: 'New York' },
      { Name: 'Jane Smith', Age: 30, City: 'Los Angeles' },
      { Name: 'Mike Johnson', Age: 35, City: 'Chicago' },
    ]}
    columns={['Name', 'Age', 'City']}
  />
);

describe('Table', () => {
  test('renders table columns correctly', () => {
    render(<Table data={data} columns={columns} />);
    const tableElement = screen.getByRole('table');
    const columnHeaderElements = screen.getAllByRole('columnheader');
    expect(tableElement).toBeInTheDocument();
    expect(columnHeaderElements.length).toBe(columns.length);
  });

  test('renders table rows and data correctly', () => {
    render(<Table data={data} columns={columns} />);
    const tableElement = screen.getByRole('table');
    const rowElements = screen.getAllByRole('row');
    expect(tableElement).toBeInTheDocument();
    expect(rowElements.length).toBe(data.length);
  });
});
