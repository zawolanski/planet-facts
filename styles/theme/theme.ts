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
    yellow: '#EDA249',
    orange: '#CD5120',
    reddish: '#D14C32',
    red: '#D83A34',
    green: '#1EC2A4',
    purple: '#6F2ED6',
    planets: {
      mercury: '#DEF4FC',
      venus: '#F7CC7F',
      earth: '#545BFE',
      mars: '#FF6A45',
      jupiter: '#ECAD7A',
      saturn: '#FCCB6B',
      uranus: '#65F0D5',
      neptune: '#497EFA',
    },
  },
  font: {
    antonio: "'Antonio', sans-serif",
    spartan: "'Spartan', sans-serif",
  },
};
