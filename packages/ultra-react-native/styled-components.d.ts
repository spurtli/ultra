import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      textColor: string;
      tint1: string;
    };
  }
}
