import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Button is visible', () => {
  render(<Button onClick={() => console.log('Clicked')}>Click me</Button>);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});

test('Background color changes in disabled state', () => {
  render(
    <Button onClick={() => console.log('Clicked')} disabled>
      Click me
    </Button>
  );
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toHaveStyle('background-color: rgb(204, 204, 204)');
});
