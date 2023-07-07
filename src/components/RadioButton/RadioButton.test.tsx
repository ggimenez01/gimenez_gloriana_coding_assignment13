import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

test('RadioButton renders with label', () => {
  const label = 'Radio Button';
  render(<RadioButton id="radio1" label={label} />);

  const labelElement = screen.getByText(label);
  expect(labelElement).toBeInTheDocument();
});

test('RadioButton applies styles correctly', () => {
  const fontSize = '16px';
  const fontColor = '#000';
  const backgroundColor = '#fff';
  render(
    <RadioButton
      id="radio1"
      label="Radio Button"
      fontSize={fontSize}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
    />
  );

  const labelElement = screen.getByText('Radio Button');
  expect(labelElement).toHaveStyle(`font-size: ${fontSize}`);
  expect(labelElement).toHaveStyle(`color: ${fontColor}`);
  expect(labelElement).toHaveStyle(`background-color: ${backgroundColor}`);
});

test('RadioButton is disabled when disabled prop is true', () => {
  render(<RadioButton id="radio1" label="Radio Button" disabled />);

  const labelElement = screen.getByText('Radio Button');
  expect(labelElement).toHaveStyle('cursor: not-allowed');
  expect(labelElement).toHaveStyle('opacity: 0.5');
});

test('RadioButton is checked when checked prop is true', () => {
  render(<RadioButton id="radio1" label="Radio Button" checked />);

  const inputElement = screen.getByLabelText('Radio Button');
  expect(inputElement).toBeChecked();
});
