import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

test('Label renders with text', () => {
  const text = 'Label Text';
  render(<Label htmlFor="inputId" text={text} />);

  const labelElement = screen.getByText(text);
  expect(labelElement).toBeInTheDocument();
});

test('Label applies styles correctly', () => {
  const fontSize = '16px';
  const fontColor = '#000';
  const backgroundColor = '#fff';
  render(
    <Label
      htmlFor="inputId"
      text="Label Text"
      fontSize={fontSize}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
    />
  );

  const labelElement = screen.getByText('Label Text');
  expect(labelElement).toHaveStyle(`font-size: ${fontSize}`);
  expect(labelElement).toHaveStyle(`color: ${fontColor}`);
  expect(labelElement).toHaveStyle(`background-color: ${backgroundColor}`);
});

test('Label is disabled when disabled prop is true', () => {
  render(<Label htmlFor="inputId" text="Label Text" disabled />);

  const labelElement = screen.getByText('Label Text');
  expect(labelElement).toHaveStyle('cursor: not-allowed');
  expect(labelElement).toHaveStyle('opacity: 0.5');
});
