import React from 'react';
import { type Meta, type Story } from '@storybook/react';
import Text, { type TextProps } from './Text';

export default {
  title: 'Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Example Text',
  fontSize: '16px',
  fontColor: '#000',
  backgroundColor: '#fff',
  disabled: false,
};
