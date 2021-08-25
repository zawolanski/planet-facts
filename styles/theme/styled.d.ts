import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoint: {
      tablet: number;
      desktop: number;
    };
    color: {
      white: string;
      white__075: string;
      white__05: string;
      white__02: string;
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
