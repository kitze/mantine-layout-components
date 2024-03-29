import { Sx } from '@mantine/core';

const enableDebug: boolean = true;

export type CommonProps = {
  centerH?: boolean;
  centerV?: boolean;
  center?: boolean;
  debug?: boolean;
  fullW?: boolean;
  fullH?: boolean;
  spaceBetween?: boolean;
  noWrap?: boolean;
  alignEnd?: boolean;
  sxArray?: Sx[];
  scrollable?: boolean;
  ref?: any;
};

export const commonProps = ({
  debug,
  scrollable,
  alignEnd,
  fullH,
  spaceBetween,
  fullW,
}: CommonProps) => {
  const shouldDebug = debug && enableDebug;
  return {
    ...(shouldDebug
      ? {
          border: '1px solid red',
        }
      : {}),
    ...(fullW && { width: '100%' }),
    ...(scrollable && { overflow: 'auto' }),
    ...(fullH && { height: '100%' }),
    ...(alignEnd && { alignItems: 'end' }),
    ...(spaceBetween && { justifyContent: 'space-between' }),
  };
};
