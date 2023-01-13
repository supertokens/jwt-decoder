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
  font-family: ${props=>props.theme.fontFamily.roboto};
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

/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: ${props=>props.theme.colors.grey[750]} transparent;
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  width: .7rem;
}
*::-webkit-scrollbar-track {
  border-radius: .5rem;
  background-color: transparent;
}

*::-webkit-scrollbar-thumb {
  border-radius: .5rem;
  background-color: ${props=>props.theme.colors.grey[750]};
}

`;

export default GlobalStyle;
