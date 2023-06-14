import { Meta, StoryObj } from '@storybook/react';
import { Horizontal, HorizontalProps } from '../src';

const meta: Meta<typeof Horizontal> = {
  title: 'Horizontal',
  component: Horizontal,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof Horizontal>;

export const Default: Story = {
  render: () => (
    <Horizontal fullW>
      <div>hello</div>
      <div>world</div>
      <div>bye</div>
    </Horizontal>
  ),
};

export const Centered: Story = {
  render: () => (
    <Horizontal fullW center>
      <div>hello</div>
      <div>world</div>
      <div>bye</div>
    </Horizontal>
  ),
};

export const Spaced: Story = {
  render: () => (
    <Horizontal fullW spaceBetween>
      <div>hello</div>
      <div>world</div>
      <div>bye</div>
    </Horizontal>
  ),
};
