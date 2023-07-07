import React from 'react';
import styled, { css } from 'styled-components';

type HeroImageProps = {
  src: string;
  alt?: string;
  text?: string;
  backgroundColor?: string;
  disabled?: boolean;
};

const StyledHeroImageWrapper = styled.div<HeroImageProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

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

const StyledHeroImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const StyledText = styled.span`
  margin-top: 10px;
`;

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  text,
  backgroundColor,
  disabled,
}) => (
  <StyledHeroImageWrapper
    backgroundColor={backgroundColor}
    disabled={disabled}
    data-testid="hero-image-wrapper" // Add data-testid attribute
  >
    <StyledHeroImage src={src} alt={alt} />
    {text && <StyledText>{text}</StyledText>}
  </StyledHeroImageWrapper>
);

export default HeroImage;
