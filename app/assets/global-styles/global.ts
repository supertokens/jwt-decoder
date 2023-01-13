import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.cdnfonts.com/css/roboto');

* {
  box-sizing: border-box;
  
}
html {
  font-size: 10px;
}
body {
  font-size: 1.6rem;
  margin: 0;
  font-family: 'Roboto', sans-serif;
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
