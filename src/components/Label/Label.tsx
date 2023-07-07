import React from 'react';
import styled, { css } from 'styled-components';

type LabelProps = {
  htmlFor: string;
  text: string;
  fontSize?: string;
  fontColor?: string;
  backgroundColor?: string;
  disabled?: boolean;
};

const StyledLabel = styled.label<LabelProps>`
  font-weight: bold;

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

const Label: React.FC<LabelProps> = ({
  htmlFor,
  text,
  fontSize,
  fontColor,
  backgroundColor,
  disabled,
}) => (
  <StyledLabel
    htmlFor={htmlFor}
    fontSize={fontSize}
    fontColor={fontColor}
    backgroundColor={backgroundColor}
    disabled={disabled}
  >
    {text}
  </StyledLabel>
);

export default Label;
