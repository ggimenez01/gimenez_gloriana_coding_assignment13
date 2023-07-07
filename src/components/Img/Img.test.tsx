import React from 'react';
import { render, screen } from '@testing-library/react';
import Img from './Img';

test('Img renders with image and text', () => {
  const src = 'https://example.com/image.png';
  const alt = 'Example Image';
  const text = 'Image Text';
  const backgroundColor = '#f2f2f2';
  const disabled = false;

  render(
    <Img
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

  const wrapperElement = screen.getByTestId('img-wrapper');
  expect(wrapperElement).toHaveStyle(`background-color: ${backgroundColor}`);
});

test('Img is disabled when disabled prop is true', () => {
  const src = 'https://example.com/image.png';
  const alt = 'Example Image';
  const text = 'Image Text';
  const backgroundColor = '#f2f2f2';
  const disabled = true;

  render(
    <Img
      src={src}
      alt={alt}
      text={text}
      backgroundColor={backgroundColor}
      disabled={disabled}
    />
  );

  const wrapperElement = screen.getByTestId('img-wrapper');
  expect(wrapperElement).toHaveStyle('opacity: 0.5');
  expect(wrapperElement).toHaveStyle('cursor: not-allowed');
});
