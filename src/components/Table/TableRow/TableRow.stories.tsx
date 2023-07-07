import React from 'react';
import { type Meta, type Story } from '@storybook/react';

import TableRow, { type TableRowProps } from './TableRow';

export default {
  title: 'TableRow',
  component: TableRow,
} as Meta;

const Template: Story<TableRowProps> = (args) => <TableRow {...args} />;

export const Default = Template.bind({});
Default.args = {
  cells: ['Cell 1', 'Cell 2', 'Cell 3'],
  backgroundColor: '#f2f2f2',
  fontSize: '16px',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  cells: ['Cell 1', 'Cell 2', 'Cell 3'],
  backgroundColor: '#f2f2f2',
  fontSize: '16px',
  disabled: true,
};
