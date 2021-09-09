import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import fontFaces from "./fonts";
import colors from "./colors";

const MainStyles = createGlobalStyle`
  ${normalize}
  ${fontFaces}

  :root {
    ${colors}
    --font-primary: "Avenir", sans-serif;
    --layout-width: 1100px;
  }
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--font-primary);
    /* ${({ theme }) => theme.typography.body} */
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    color: var(--colors-midnight);
    background-color: var(--colors-lightGrey);
  }
`;

export default MainStyles;
