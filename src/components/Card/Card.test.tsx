import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('Card renders with correct title and content', () => {
  const title = 'Test Title';
  const content = 'Test Content';

  render(<Card title={title} content={content} />);

  const titleElement = screen.getByText(title);
  const contentElement = screen.getByText(content);

  expect(titleElement).toBeInTheDocument();
  expect(contentElement).toBeInTheDocument();
});

test('Card applies background color when provided', () => {
  const title = 'Test Title';
  const content = 'Test Content';
  const backgroundColor = 'red';

  render(
    <Card title={title} content={content} backgroundColor={backgroundColor} />
  );

  const cardElement = screen.getByTestId('card');
  const computedStyles = window.getComputedStyle(cardElement);

  expect(computedStyles.backgroundColor).toBe(backgroundColor);
});

test('Card is disabled when disabled prop is true', () => {
  const title = 'Test Title';
  const content = 'Test Content';

  render(<Card title={title} content={content} disabled />);

  const cardElement = screen.getByTestId('card');
  const computedStyles = window.getComputedStyle(cardElement);

  expect(computedStyles.cursor).toBe('not-allowed');
  expect(computedStyles.opacity).toBe('0.5');
});
