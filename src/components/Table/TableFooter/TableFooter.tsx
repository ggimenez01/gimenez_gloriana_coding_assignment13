import React from 'react';
import styled, { css } from 'styled-components';

type TableFooterProps = {
  text: string;
  fontSize?: string;
  fontColor?: string;
  backgroundColor?: string;
  disabled?: boolean;
  numColumns: number; // Add the `numColumns` property to hold the number of columns
};

const StyledTable = styled.table`
  width: 100%;
  border: 1px solid #ccc;
`;

const StyledTableFooter = styled.tfoot<TableFooterProps>`
  background-color: #f2f2f2;

  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize};
    `}

  ${(props) =>
    props.fontColor &&
    css`
      color: ${props.fontColor};
    `}

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;

const TableFooter: React.FC<TableFooterProps> = ({
  text,
  fontSize,
  fontColor,
  backgroundColor,
  disabled,
  numColumns,
}) => (
  <StyledTable>
    <StyledTableFooter
      fontSize={fontSize}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      disabled={disabled}
      numColumns={numColumns} // Add numColumns as a prop to StyledTableFooter
    >
      <tr>
        <td colSpan={numColumns}>{text}</td>
      </tr>
    </StyledTableFooter>
  </StyledTable>
);

export default TableFooter;
