import React from 'react';
import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';
import { Vertical } from '../src';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('renders without crashing', () => {
  act(() => {
    createRoot(container).render(
      <Vertical>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Vertical>
    );
  });
  expect(container.innerHTML).toBe(
    '<div class="mantine-Stack-root mantine-191ls6r"><div>1</div><div>2</div><div>3</div></div>'
  );
});
