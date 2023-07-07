import React from 'react';
import { type Meta, type Story } from '@storybook/react';
import Dropdown, { type DropdownProps } from './Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  defaultOption: 'Option 1',
  backgroundColor: '#f2f2f2',
  disabled: false,
};
