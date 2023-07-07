import React from 'react';
import { type Meta, type Story } from '@storybook/react';

import Button, { type ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonText: 'Click Me',
  backgroundColor: '#007bff',
  disabled: false, // Set the default state of the button here (enabled or disabled)
};
