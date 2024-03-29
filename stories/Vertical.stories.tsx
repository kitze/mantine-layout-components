import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Vertical } from '../src';

const meta: Meta<typeof Vertical> = {
  title: 'Vertical',
  component: Vertical,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof Vertical>;

export const Default: Story = {
  render: () => (
    <Vertical fullW>
      <div>hello</div>
      <div>world</div>
      <div>bye</div>
    </Vertical>
  ),
};

export const Centered: Story = {
  render: () => (
    <Vertical fullW center>
      <div>hello</div>
      <div>world</div>
      <div>bye</div>
    </Vertical>
  ),
};
