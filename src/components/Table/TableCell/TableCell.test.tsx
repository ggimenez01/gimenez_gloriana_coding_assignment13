import React from 'react';
import { render, screen } from '@testing-library/react';
import TableCell from './TableCell';

describe('TableCell', () => {
  it('renders cell text correctly', () => {
    const text = 'Cell Text';
    render(<TableCell text={text} />);
    const cellText = screen.getByText(text);

    expect(cellText).toBeInTheDocument();
  });

  it('applies styles correctly', () => {
    const text = 'Cell Text';
    const fontSize = '16px';
    const fontColor = '#000';
    const backgroundColor = '#fff';
    const align = 'center';
    render(
      <TableCell
        text={text}
        fontSize={fontSize}
        fontColor={fontColor}
        backgroundColor={backgroundColor}
        align={align}
      />
    );
    const cell = screen.getByText(text);

    expect(cell).toHaveStyle(`font-size: ${fontSize}`);
    expect(cell).toHaveStyle(`color: ${fontColor}`);
    expect(cell).toHaveStyle(`background-color: ${backgroundColor}`);
    expect(cell).toHaveStyle(`text-align: ${align}`);
  });
});
