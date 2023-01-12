import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}
html {
  font-size: 10px;
}
body {
  font-size: 1.6rem;
  margin: 0;
}

.flex-center-y {
  display: flex;
  align-items: center;
}

.flex-center-x{
  display: flex;
  justify-content: center;
}

`;

export default GlobalStyle;
