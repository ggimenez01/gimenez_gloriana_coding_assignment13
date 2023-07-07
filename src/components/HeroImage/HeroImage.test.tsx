import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

test('HeroImage renders with image and text', () => {
  const src = 'https://example.com/hero-image.png';
  const alt = 'Example Hero Image';
  const text = 'Hero Image Text';
  const backgroundColor = '#f2f2f2';
  const disabled = false;

  render(
    <HeroImage
      src={src}
      alt={alt}
      text={text}
      backgroundColor={backgroundColor}
      disabled={disabled}
    />
  );

  const imageElement = screen.getByAltText(alt);
  expect(imageElement).toBeInTheDocument();

  const textElement = screen.getByText(text);
  expect(textElement).toBeInTheDocument();

  const wrapperElement = screen.getByTestId('hero-image-wrapper');
  expect(wrapperElement).toHaveStyle(`background-color: ${backgroundColor}`);
});

test('HeroImage is disabled when disabled prop is true', () => {
  const src = 'https://example.com/hero-image.png';
  const alt = 'Example Hero Image';
  const text = 'Hero Image Text';
  const backgroundColor = '#f2f2f2';
  const disabled = true;

  render(
    <HeroImage
      src={src}
      alt={alt}
      text={text}
      backgroundColor={backgroundColor}
      disabled={disabled}
    />
  );

  const wrapperElement = screen.getByTestId('hero-image-wrapper');
  expect(wrapperElement).toHaveStyle('opacity: 0.5');
  expect(wrapperElement).toHaveStyle('cursor: not-allowed');
});
