import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Text', () => {
  it('renders text correctly', () => {
    const text = 'Example Text';
    render(<Text text={text} />);
    const textElement = screen.getByText(text);
    expect(textElement).toBeInTheDocument();
  });

  it('applies custom styles', () => {
    const fontSize = '16px';
    const fontColor = '#000';
    const backgroundColor = '#fff';
    render(
      <Text
        text="Example Text"
        fontSize={fontSize}
        fontColor={fontColor}
        backgroundColor={backgroundColor}
      />
    );
    const textElement = screen.getByText('Example Text');
    expect(textElement).toHaveStyle(`font-size: ${fontSize}`);
    expect(textElement).toHaveStyle(`color: ${fontColor}`);
    expect(textElement).toHaveStyle(`background-color: ${backgroundColor}`);
  });

  it('disables text when disabled prop is true', () => {
    render(<Text text="Example Text" disabled />);
    const textElement = screen.getByText('Example Text');
    expect(textElement).toHaveStyle('cursor: not-allowed');
    expect(textElement).toHaveStyle('opacity: 0.5');
  });
});
