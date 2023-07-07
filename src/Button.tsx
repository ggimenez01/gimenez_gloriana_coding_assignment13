import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => (props.disabled ? '#ccc' : '#007bff')};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : '#0069d9')};
  }
`;

const Button = ({ text, disabled }) => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <StyledButton onClick={handleClick} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default Button;
