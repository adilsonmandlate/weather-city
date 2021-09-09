import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;

        bodyLead: string;
        body: string
        bodyMedium: string;
        bodyBold: string;

        bodySmall: string;
        bodySmallBold: string;
        bodyCaption: string;
    };
  }
}