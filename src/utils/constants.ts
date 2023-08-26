export const ROOM_STATUS = {
  ACTIVATED: 0,
  DEACTIVATED: 1,
  PENDING: 2,
  REJECT: 3,
};

export enum DEVICES {
  DESKTOP,
  TABLET,
  MOBILE,
}

const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1400px',
  '2xl': '1536px',
};

export const devices = {
  xs: `(max-width: ${breakpoints.xs})`,
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  lg: `(max-width: ${breakpoints.lg})`,
  xl: `(max-width: ${breakpoints.xl})`,
  xxl: `(max-width: ${breakpoints.xxl})`,
  '2xl': `(max-width: ${breakpoints['2xl']})`,
};
