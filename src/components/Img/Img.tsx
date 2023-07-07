import React from 'react';
import styled, { css } from 'styled-components';

type ImgProps = {
  src: string;
  alt?: string;
  text?: string;
  backgroundColor?: string;
  disabled?: boolean;
};

const StyledImgWrapper = styled.div<ImgProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

const StyledImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const StyledText = styled.span`
  margin-left: 10px;
`;

const Img: React.FC<ImgProps> = ({
  src,
  alt,
  text,
  backgroundColor,
  disabled,
}) => (
  <StyledImgWrapper
    backgroundColor={backgroundColor}
    disabled={disabled}
    data-testid="img-wrapper" // Add the data-testid attribute
  >
    <StyledImg src={src} alt={alt} />
    {text && <StyledText>{text}</StyledText>}
  </StyledImgWrapper>
);

export default Img;
