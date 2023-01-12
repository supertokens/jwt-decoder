import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: Roboto, sans-serif;
  src: url("../assets/fonts/Roboto/Roboto-Medium.ttf");
  font-weight: 100 1000;
}
* {
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}
html {
  font-size: 10px;
}
body {
  font-size: 2rem;
  margin: 0;
}

`;

export default GlobalStyle;
