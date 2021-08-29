import hexRgb from 'hex-rgb';
import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  breakpoint: {
    tablet: 768,
    desktop: 1100,
  },
  color: {
    white: '#FFFFFF',
    white__075: hexRgb('#FFFFFF', { format: 'css', alpha: 0.75 }),
    white__05: hexRgb('#FFFFFF', { format: 'css', alpha: 0.5 }),
    white__02: hexRgb('#FFFFFF', { format: 'css', alpha: 0.2 }),
    black: '#070724',
    grey: {
      normal: '#838391',
      dark: '#38384F',
    },
    blue: {
      normal: '#2D68F0',
      light: '#419EBB',
    },
    action: {
      hover: hexRgb('#D8D8D8', { format: 'css', alpha: 0.2 }),
    },
    planets: {
      mercury: '#419EBB',
      venus: '#EDA249',
      earth: '#6D2ED5',
      mars: '#D14C32',
      jupiter: '#D83A34',
      saturn: '#CD5120',
      uranus: '#1EC1A2',
      neptune: '#2D68F0',
    },
  },
  font: {
    antonio: "'Antonio', sans-serif",
    spartan: "'Spartan', sans-serif",
  },
};
