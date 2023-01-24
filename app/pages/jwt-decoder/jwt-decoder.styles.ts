import styled, { css } from 'styled-components';
import { IAlgorithmOption, TOption } from '../../assets/constants';

const leftContentWidth = '31.5rem';

interface IJwtContainerStyledProps {
  $selectedTab: TOption;
  $selectedAlg: IAlgorithmOption;
}

export const JwtContainerStyled = styled.div<IJwtContainerStyledProps>`
  &.jwt-decoder-container {
    background-color: ${(props) => props.theme.colors.dark[1000]};
    word-break: break-all;
    .inner-container {
      padding-block: 16.5rem 18rem;
      width: min(100%, 90vw);
      max-width: 107.5rem;
      margin-inline: auto;
      color: ${(props) => props.theme.colors.light[900]};
    }
  }

  .title {
    font-size: 3.2rem;
    font-weight: 700;
    margin: 0;
    margin-block-end: 3rem;
  }

  .common-container {
    border-radius: ${(props) => props.theme.borderRadius.medium};
    border: 1px solid ${(props) => props.theme.colors.grey[1000]};
  }

  .inner-content .cm-editor .cm-scroller{
    padding: 2.5rem;
  }

  .title-band {
    font-weight: 600;
    padding: 0.9rem 1.6rem;
    background-color: ${(props) => props.theme.colors.grey[850]};
  }

  .bt-inherit {
    border-top-right-radius: inherit;
    border-top-left-radius: inherit;
  }

  .bb-inherit {
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }

  #header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 0.5rem;

    & + .code {
      height: 15rem;
      word-break: break-all;
    }

    .dropdown-outer .dropdown-container {
      height: 3rem;
    }
  }

  #payload + .code {
    height: 20.5rem;
  }

  #clipboard-btn-container{
    padding: 2.5rem;
    padding-inline-end: 2rem;
  }

  #signing-key + .code {
    word-break: break-all;
    height: ${(props) =>
      props.$selectedAlg.requiresBothKeys ? '31.5rem' : '16.3rem'};
    padding: 2.4rem 3rem 1.2rem;
    line-height: 1.85rem;
    background-color: #202020;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;

    .input-wrapper{
      height: fit-content;
      padding-inline-start: 3rem;
    }

    .signing-key-editor * {
      color: ${(props) => props.theme.colors.blue[200]};
    }

    pre {
      margin-block: 0;
      font-family: inherit;
    }

    .cm-theme-dark {
      background-color: ${(props) => props.theme.colors.dark[1000]}!important;
      margin-block: 1rem;
      border-radius: 0.9rem;
      border: 1px solid ${(props) => props.theme.colors.grey[810]};
    }

    .cm-focused{
      outline: none;
    }

    .cm-scroller{
      padding: 0!important;
    }

    ${(props) => props.$selectedAlg.requiresBothKeys && privatePublicKeysCSS}
  }

  .decoder-main-container {
    display: flex;
    aside#encoded-content {
      width: ${leftContentWidth};
      margin-right: 2rem;
    }

    #encoded-content {
      display: flex;
      flex-direction: column;

      .token-container {
        height: 100%;
        display: flex;
        flex-direction: column;

        .token.code {
          position: relative;
        }
      }

      .title-band {
        justify-content: space-between;
      }
      .content {
        word-break: break-word;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .token {
          line-height: 2.4rem;
          flex: 1;
        }

        #copy-btn {
          border: 1px solid ${(props) => props.theme.colors.green[1000]};
          padding-block: 1rem;
          text-align: center;
          width: 100%;
          font-variation-settings: 'wght' 500;
          border-radius: 1rem;
          color: ${(props) => props.theme.colors.green[900]};
          background-color: ${(props) => props.theme.colors.green[1000]}1A;
          cursor: pointer;
          img {
            margin-left: 0.5rem;
          }
        }
      }

      .scroll-container {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        overflow-y: auto;
      }
    }

    .input-container {
      flex: 1;
      height: fit-content;
    }
  }

  #decoded-content .inner-content .cm-editor .cm-scroller {
    padding-inline-start: 3.1rem;
  }

  .code {
    font-family: ${(props) => props.theme.fontFamily.menlo};
    overflow-y: auto;
  }

  .note-container-outer {
    margin-left: calc(${leftContentWidth} + 2rem);
    margin-block: 1.1rem 6rem;
    text-align: center;
    border-color: ${(props) => props.theme.colors.orange[1000]};
    background-color: ${(props) => props.theme.colors.orange[1000] + '0a'};

    .note {
      padding: 1.1rem;
      padding-inline-start: 4rem;
      text-align: left;
      font-size: ${(props) => props.theme.fontSizes.small};
      word-break: break-word;
      b {
        color: ${(props) => props.theme.colors.orange[1000]};
      }
    }
  }

  hr {
    border-color: ${(props) => props.theme.colors.grey[750]};
    margin-block-end: 0;
  }

  .tab-container {
    display: none;
  }

  .read-more-container {
    display: flex;
    justify-content: center;
    span[role='button'] {
      cursor: pointer;
      padding: 1.2rem 3rem;
      background-color: ${(props) => props.theme.colors.dark[800]};
      border-radius: 0 0 2.5rem 2.5rem;
    }

    .down-chevron {
      filter: brightness(2);
    }
  }

  textarea.code {
    height: 100%;
    width: 100%;
    border: none;
    background-color: inherit;
    color: inherit;
    resize: none;
    outline: none;
    font-size: ${(props) => props.theme.fontSizes.medium};
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding-inline: 2.6rem;

    &.jwt-decoder-container main.inner-container {
      padding-block: 3.5rem;
    }

    .decoder-main-container {
      flex-direction: column;
      aside#encoded-content {
        width: 100%;
        .content .token {
          min-height: 50vh;
          height: 60vh;
        }
      }
    }

    .tab-container {
      display: flex;
      margin-block-end: 0.9rem;
    }

    .note-container-outer {
      margin-left: 0;
      padding: 1.2rem 1.6rem;
      text-align: left;
      .note {
        padding: 0;
        font-size: ${(props) => props.theme.fontSizes.small};
      }
    }

    ${(props) => {
      if (props.$selectedTab === 'encoded')
        return `
        #decoded-content {
          display: none!important;
        }
      `;
      else if (props.$selectedTab === 'decoded')
        return `
      #encoded-content {
        display: none!important;
      }
    `;
    }}
  }
`;

const privatePublicKeysCSS = css`
  .input-wrapper{
    padding-inline-start: 0;
  }

  .key-container {
    border-radius: 1.3rem;
    margin-inline-start: 2rem;
    margin-block-start: 1rem;
    overflow: hidden;
    border: 1px solid #5d5d5d;

    .title-band {
      font-family: ${(props) => props.theme.fontFamily.roboto};
      font-size: ${(props) => props.theme.fontSizes.small};
      padding-block: 0.5rem;
    }

    .cm-scroller{
      padding: 0;
      padding-inline: 1rem!important;
    }

    .code .cm-theme-dark {
      margin-block: 0;
      border-radius: 0;
      border: none;
      height: 5.8rem;
      overflow-y: auto;
      padding-block: 0.5rem;
    }
  }
`;

export const ExplanationContainerStyled = styled.article`
  &.explanation-content-container {
    section {
      margin-block-start: 6rem;
    }
  }

  a {
    color: ${(props) => props.theme.colors.orange[1000]};
  }

  ul {
    padding: 0;
  }

  ul.parts-of-jwt {
    & > li {
      display: flex;
      margin-bottom: 1.5rem;
      & > :not(:last-child) {
        margin-right: 0.5rem;
      }
      span.header {
        color: ${(props) => props.theme.colors.red[200]};
      }

      span.payload {
        color: ${(props) => props.theme.colors.purple[200]};
      }

      span.signature {
        color: ${(props) => props.theme.colors.blue[200]};
      }

      .description ul {
        list-style: disc inside;
      }
    }
  }

  .structure-img {
    width: 100%;
    position: relative;
    height: 55rem;
    margin: 0;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    & ul.parts-of-jwt li {
      & > :not(:last-child) {
        margin-right: 0;
        margin-bottom: 0.5rem;
      }
    }
  }
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
  &&& {
    border-radius: 0.7rem;
  }
`;

export const TabOption = styled.div<{ isSelected?: boolean }>`
  flex: 1;
  padding: 0.7rem 2.2rem;
  text-align: center;
  line-height: 1.875rem;
  color: ${(props) => props.theme.colors.grey[810]};
  border-radius: 0.7rem;
  cursor: pointer;

  ${(props) =>
    props.isSelected &&
    `
    background-color: ${props.theme.colors.light[1000]}
  `}
`;

export const InputContainer = styled.div<{ $hasError: boolean }>`
  ${(props) =>
    props.$hasError &&
    `
    .inner-content{
      background-color: ${props.theme.colors.red[800]};
    }
    .title-band .title-text{
      color: ${props.theme.colors.red[300]};
    }
  `}
`;

export default JwtContainerStyled;
