// #region Global Imports
import { DefaultTheme } from 'styled-components';
// #endregion Global Imports

const theme: DefaultTheme = {
  /**
   * Font
   */
  font: {
    familyTitle: `'Red Rose', cursive`,
    family: `'Futura PT', sans-serif;`,
    weight: {
      light: '300',
      regular: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
    },
    size: {
      small: '9px',
      tiny: '11px',
      xxs: '12px',
      xs: '14px',
      sm: '16px',
      md: '18px',
      lg: '22px',
      xl: '36px',
    },
  },

  /**
   * Colors
   */
  colors: {
    black: '#000000',
    white: '#fff',
    success: '#39B54A',
    body: '#F2F3F7',
    price: '#EB403D',
    cream: '#EBD5C8',
    creamLight: '#EEE7DD',
    warningOrange: '#B45309',
    yellowLight: '#FFF4E2',

    primary: {
      light: '#ff5c79',
      main: '#F2BED1',
      dark: '#E00B41',
      grey: '#F7F7F7',
      contrastText: '#fff',
    },

    secondary: {
      light: '#F8EAE9',
      main: '#F2C5BE',
      dark: '#EBD5C8',
      contrastText: '#fff',
    },

    text: {
      primary: '#222222',
      secondary: '#717171',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
      lightGreen: '#7CB305',
      green: '#39B54A',
      red: '#EB403D',
      price: '#F8961E',
      link: '#1890FF',
      orange: '#FF6347',
      white: '#fff',
      main: '#FF385C',
      dark: '#E00B41',
      black: 'black',
    },
  },
};

export { theme };
