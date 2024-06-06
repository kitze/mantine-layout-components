import React, { forwardRef } from 'react';
import { Stack, StackProps } from '@mantine/core';
import { commonProps, CommonProps } from '../commonProps';
import { ReactFC } from '../types';

export let centerVerticalProps = {
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
};

export type VerticalProps = StackProps & CommonProps;

export const Vertical: ReactFC<VerticalProps> = forwardRef<any, VerticalProps>(
  (props, ref) => {
    const {
      alignEnd,
      center,
      centerH,
      centerV,
      children,
      debug,
      fullH,
      fullW,
      noWrap,
      scrollable,
      spaceBetween,
      sx,
      spacing,
      sxArray = [],
      ...rest
    } = props;

    let st = {
      alignItems: 'flex-start',
      ...commonProps(props),
      ...(center && {
        ...centerVerticalProps,
      }),
    };
    //todo: TS fix
    let sx1 = [st, sx, ...sxArray] as any;
    return (
      <Stack
        ref={ref}
        sx={sx1}
        {...(centerV && {
          align: 'center',
        })}
        {...(centerH && {
          justify: 'center',
        })}
        {...rest}
      >
        {children}
      </Stack>
    );
  }
);
