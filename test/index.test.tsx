import React from 'react';
import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';
import { Vertical } from '../src';
import { createTheme, MantineProvider } from '@mantine/core';

let container: any;

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

const theme = createTheme({});

it('renders without crashing', () => {
  act(() => {
    createRoot(container).render(
      <MantineProvider theme={theme}>
        <Vertical>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Vertical>
      </MantineProvider>
    );
  });
  expect(container.innerHTML).toBe(
    '<style data-mantine-styles="classes">@media (max-width: 35.99375em) {.mantine-visible-from-xs {display: none !important;}}@media (min-width: 36em) {.mantine-hidden-from-xs {display: none !important;}}@media (max-width: 47.99375em) {.mantine-visible-from-sm {display: none !important;}}@media (min-width: 48em) {.mantine-hidden-from-sm {display: none !important;}}@media (max-width: 61.99375em) {.mantine-visible-from-md {display: none !important;}}@media (min-width: 62em) {.mantine-hidden-from-md {display: none !important;}}@media (max-width: 74.99375em) {.mantine-visible-from-lg {display: none !important;}}@media (min-width: 75em) {.mantine-hidden-from-lg {display: none !important;}}@media (max-width: 87.99375em) {.mantine-visible-from-xl {display: none !important;}}@media (min-width: 88em) {.mantine-hidden-from-xl {display: none !important;}}</style><div style="align-items: flex-start; --stack-gap: var(--mantine-spacing-md); --stack-align: stretch; --stack-justify: flex-start;" class="m-6d731127 mantine-Stack-root"><div>1</div><div>2</div><div>3</div></div>'
  );
});
