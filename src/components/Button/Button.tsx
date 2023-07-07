import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  buttonText: string;
  backgroundColor?: string;
  disabled?: boolean;
};

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.disabled ? '#ccc' : props.backgroundColor || '#007bff'};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : '#0069d9')};
  }
`;

const Button: React.FC<ButtonProps> = ({
  buttonText,
  backgroundColor,
  disabled,
}) => {
  const handleClick = () => {
    if (!disabled) {
      alert('Button clicked!');
    }
  };

  return (
    <StyledButton
      onClick={handleClick}
      backgroundColor={backgroundColor}
      disabled={disabled}
    >
      {buttonText}
    </StyledButton>
  );
};

export default Button;
