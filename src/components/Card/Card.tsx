import React from 'react';
import styled from 'styled-components';

type CardProps = {
  title: string;
  content: string;
  backgroundColor?: string;
  disabled?: boolean;
};

const StyledCard = styled.div<CardProps>`
  background-color: ${(props) =>
    props.disabled ? '#f5f5f5' : props.backgroundColor || '#fff'};
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const Card: React.FC<CardProps> = ({
  title,
  content,
  backgroundColor,
  disabled,
}) => (
  <StyledCard
    data-testid="card"
    backgroundColor={backgroundColor}
    disabled={disabled}
  >
    <h2>{title}</h2>
    <p>{content}</p>
  </StyledCard>
);

export default Card;
