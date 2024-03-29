# Mantine Layout Components

Mantine Layout Components is a collection of React components for creating horizontal and vertical layouts easily.

Built on top of Mantine's [Group](https://mantine.dev/core/group/) and [Stack](https://mantine.dev/core/stack/).

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
    <Horizontal>
      <div>Element 1</div>
      <div>Element 2</div>
      {/* Add more elements here */}
    </Horizontal>
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
    <Vertical>
      <div>Element 1</div>
      <div>Element 2</div>
      {/* Add more elements here */}
    </Vertical>
  );
};
```

### Debugging

For debugging purposes, you can add `debug` prop to any component to see its boundaries.

```tsx
import React from 'react';

const MyComponent = () => {
    <Vertical debug>
      <div>Element 1</div>
      <div>Element 2</div>
      {/* Add more elements here */}
    </Vertical>
  );
};
```

### Full width and height

You can make any component full width or full height by adding `fullW` or `fullH` props.

```tsx
import React from 'react';

const MyComponentFullW = () => {
    <Vertical fullW>
      <div>Element 1</div>
      <div>Element 2</div>
      {/* Add more elements here */}
    </Vertical>
  );
};

const MyComponentFullH = () => {
    <Vertical fullH>
      <div>Element 1</div>
      <div>Element 2</div>
      {/* Add more elements here */}
    </Vertical>
  );
};
```
