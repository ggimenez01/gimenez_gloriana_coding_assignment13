import React from 'react';
import styled, { css } from 'styled-components';

type TableCellProps = {
  text: string;
  fontSize?: string;
  fontColor?: string;
  backgroundColor?: string;
  align?: string;
};

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
`;

const StyledTableCell = styled.td<TableCellProps>`
  padding: 10px;

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
    props.align &&
    css`
      text-align: ${props.align};
    `}
`;

const TableCell: React.FC<TableCellProps> = ({
  text,
  fontSize,
  fontColor,
  backgroundColor,
  align,
}) => (
  <StyledTable>
    <tbody>
      <tr>
        <StyledTableCell
          fontSize={fontSize}
          fontColor={fontColor}
          backgroundColor={backgroundColor}
          align={align}
        >
          {text}
        </StyledTableCell>
      </tr>
    </tbody>
  </StyledTable>
);

export default TableCell;
