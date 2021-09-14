import { ThemeType } from "./../App";
import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import fontFaces from "./fonts";
import colors from "./colors";

type Props = {
  theme: ThemeType;
};

const MainStyles = createGlobalStyle<Props>`
  ${normalize}
  ${fontFaces}

  :root {
    ${colors}
    --font-primary: "Avenir", sans-serif;
    --layout-width: 1480px;
  }
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--font-primary);
    ${({ theme }) => theme.typography.body}
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    color: var(--colors-midnight);
    background-color: var(--colors-white);
  }
`;

export default MainStyles;
