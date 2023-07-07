// Card.stories.tsx
import React from 'react';
import { type Meta, type Story } from '@storybook/react';

import Card from './Card';

export default {
  title: 'Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Example Card',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  backgroundColor: '#fff',
  disabled: false, // Set the default state of the card here (enabled or disabled)
};
