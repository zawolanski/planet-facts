import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
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
    };
    font: {
      antonio: string;
      spartan: string;
    };
  }
}
