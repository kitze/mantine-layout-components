# Mantine Layout Components

Mantine Layout Components is a collection of React components for creating horizontal and vertical layouts easily.

Built on top of Mantine's [Group](https://mantine.dev/core/group/) and [Stack](https://mantine.dev/core/stack/).

> Please note, starting from version 1.0.0, this package requires `@mantine/core` version 7.x.x.
> If you are using `@mantine/core` version < 7.0.0, please install `mantine-layout-components` version 0.1.2

## Installation

You can install `mantine-layout-components` via `npm` or `yarn`:

npm:

```bash
npm install mantine-layout-components
```

yarn:

```bash
yarn add mantine-layout-components
```

## Usage

For a complete list of props and behaviors, please refer to the [stories components](./stories/).

### Horizontal Layout Component

The Horizontal component allows you to create a horizontal flows for your elements.

```tsx
import React from 'react';
import { Horizontal } from 'mantine-layout-components';

const MyComponent = () => {
  return (
	  <MantineProvider theme={theme}>
		  <Horizontal>
			  <div>Element 1</div>
			  <div>Element 2</div>
			  {/* Add more elements here */}
		  </Vertical>
	  </MantineProvider>
  );
};
```

### Vertical Layout Component

The Vertical component allows you to create a vertical flows for your elements.

```tsx
import React from 'react';
import { Vertical } from 'mantine-layout-components';

const MyComponent = () => {
  return (
	  <MantineProvider theme={theme}>
		  <Vertical >
			  <div>Element 1</div>
			  <div>Element 2</div>
			  {/* Add more elements here */}
		  </Vertical>
	  </MantineProvider>
  );
};
```

### Debugging

For debugging purposes, you can add `debug` prop to any component to see its boundaries.

```tsx
import React from 'react';

const MyComponent = () => {
	<MantineProvider theme={theme}>
		<Vertical debug>
			<div>Element 1</div>
			<div>Element 2</div>
			{/* Add more elements here */}
		</Vertical>
	</MantineProvider>
  );
};
```

### Full width and height

You can make any component full width or full height by adding `fullW` or `fullH` props.

```tsx
import React from 'react';
import {MantineProvider} from "@mantine/core";

const MyComponentFullW = () => {
    <MantineProvider theme={theme}>
        <Vertical fullW center gap="xl">
	        <div>Element 1</div>
	        <div>Element 2</div>
	        {/* Add more elements here */}
        </Vertical>
    </MantineProvider>
};

const MyComponentFullH = () => {
	<MantineProvider theme={theme}>
		<Vertical fullH >
			<div>Element 1</div>
			<div>Element 2</div>
			{/* Add more elements here */}
		</Vertical>
	</MantineProvider>
)
	;
};
```

### Mantine Version 7.x.x migration notes

Starting from version 1.0.0, this package requires `@mantine/core` version 7.x.x.

1. import styles from `@mantine/core`:

```ts
import '@mantine/core/styles.layer.css';
```

2. use MantineProvider:

```tsx
import { MantineProvider } from '@mantine/core';
```

3. now instead of `spacing` use `gap` prop:

```tsx 
<Vertical gap="xl">
```
