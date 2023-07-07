import React from 'react';
import { type Meta, type Story } from '@storybook/react';

import HeroImage, { type HeroImageProps } from './HeroImage';

export default {
  title: 'HeroImage',
  component: HeroImage,
} as Meta;

const Template: Story<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://example.com/hero-image.png',
  alt: 'Example Hero Image',
  text: 'Hero Image Text',
  backgroundColor: '#f2f2f2',
  disabled: false,
};
