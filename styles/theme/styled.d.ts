import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoint: {
      tablet: string;
      desktop: string;
    };
    color: {
      white: string;
      black: string;
      grey: {
        normal: string;
        dark: string;
      };
      blue: {
        normal: string;
        light: string;
      };
      yellow: string;
      purple: string;
      red: string;
      green: string;
      orange: string;
      reddish: string;
      planets: {
        mercury: string;
        venus: string;
        earth: string;
        mars: string;
        jupiter: string;
        saturn: string;
        uranus: string;
        neptune: string;
      };
    };
    font: {
      antonio: string;
      spartan: string;
    };
  }
}
