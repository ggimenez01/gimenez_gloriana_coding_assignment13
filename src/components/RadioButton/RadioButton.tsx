import React from 'react';
import styled, { css } from 'styled-components';

type RadioButtonProps = {
  id: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  fontSize?: string;
  fontColor?: string;
  backgroundColor?: string;
};

const RadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RadioButtonInput = styled.input`
  margin-right: 8px;
`;

const RadioButtonLabel = styled.label<RadioButtonProps>`
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

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  label,
  checked,
  disabled,
  fontSize,
  fontColor,
  backgroundColor,
}) => {
  const handleChange = () => {
    // Handle the state changes here
  };

  return (
    <RadioButtonWrapper>
      <RadioButtonInput
        type="radio"
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <RadioButtonLabel
        htmlFor={id}
        disabled={disabled}
        fontSize={fontSize}
        fontColor={fontColor}
        backgroundColor={backgroundColor}
      >
        {label}
      </RadioButtonLabel>
    </RadioButtonWrapper>
  );
};

export default RadioButton;
