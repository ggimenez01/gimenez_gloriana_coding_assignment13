import React from 'react';
import { type Meta, type Story } from '@storybook/react';

import TableHeader, { type TableHeaderProps } from './TableHeader';

export default {
  title: 'TableHeader',
  component: TableHeader,
} as Meta;

const Template: Story<TableHeaderProps> = (args) => <TableHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: ['Column 1', 'Column 2', 'Column 3'],
  fontSize: '16px',
  backgroundColor: '#f2f2f2',
  disabled: false,
};
