import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

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

${[100, 200, 300, 400, 500, 600, 700, 800].map(
  (fontWeight) => `
  .bold-${fontWeight}{
    font-variation-settings: "wght" ${fontWeight}!important;
  }
`
)}

`;

export default GlobalStyle;
