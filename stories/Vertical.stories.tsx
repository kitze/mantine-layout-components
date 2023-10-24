import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Vertical } from '../src';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.layer.css';

const meta: Meta<typeof Vertical> = {
  title: 'Vertical',
  component: Vertical,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof Vertical>;

const theme = createTheme({});

export const Default: Story = {
  render: () => (
    <MantineProvider theme={theme}>
      <Vertical fullW>
        <div>hello</div>
        <div>world</div>
        <div>bye</div>
      </Vertical>
    </MantineProvider>
  ),
};

export const Centered: Story = {
  render: () => (
    <MantineProvider theme={theme}>
      <Vertical fullW center gap="xl">
        <div>hello</div>
        <div>world</div>
        <div>bye</div>
      </Vertical>
    </MantineProvider>
  ),
};
