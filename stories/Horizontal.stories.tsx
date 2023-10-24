import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Horizontal } from '../src';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.layer.css';

const meta: Meta<typeof Horizontal> = {
  title: 'Horizontal',
  component: Horizontal,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof Horizontal>;

const theme = createTheme({});

export const Default: Story = {
  render: () => (
    <MantineProvider theme={theme}>
      <Horizontal fullW>
        <div>hello</div>
        <div>world</div>
        <div>bye</div>
      </Horizontal>
    </MantineProvider>
  ),
};

export const Centered: Story = {
  render: () => (
    <MantineProvider theme={theme}>
      <Horizontal fullW center>
        <div>hello</div>
        <div>world</div>
        <div>bye</div>
      </Horizontal>
    </MantineProvider>
  ),
};

export const Spaced: Story = {
  render: () => (
    <MantineProvider theme={theme}>
      <Horizontal fullW spaceBetween>
        <div>hello</div>
        <div>world</div>
        <div>bye</div>
      </Horizontal>
    </MantineProvider>
  ),
};
