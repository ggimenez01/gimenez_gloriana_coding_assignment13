import React from 'react';
import styled from 'styled-components';

type TextProps = {
  text: string;
  fontSize?: string;
  fontColor?: string;
  backgroundColor?: string;
  disabled?: boolean;
};

const StyledText = styled.p<TextProps>`
  ${(props) =>
    props.fontSize &&
    `
    font-size: ${props.fontSize};
  `}

  ${(props) =>
    props.fontColor &&
    `
    color: ${props.fontColor};
  `}

  ${(props) =>
    props.backgroundColor &&
    `
    background-color: ${props.backgroundColor};
  `}

  ${(props) =>
    props.disabled &&
    `
    cursor: not-allowed;
    opacity: 0.5;
  `}
`;

const Text: React.FC<TextProps> = ({
  text,
  fontSize,
  fontColor,
  backgroundColor,
  disabled,
}) => (
  <StyledText
    fontSize={fontSize}
    fontColor={fontColor}
    backgroundColor={backgroundColor}
    disabled={disabled}
  >
    {text}
  </StyledText>
);

export default Text;
