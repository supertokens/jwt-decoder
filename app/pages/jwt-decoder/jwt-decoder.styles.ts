import styled from 'styled-components';

const leftContentWidth = '31.5rem';

export const JwtContainerStyled = styled.div`
  &.jwt-decoder-container {
    background-color: ${(props) => props.theme.colors.dark[1000]};

    .inner-container {
      padding-block: 16.5rem 18rem;
      width: 100%;
      max-width: 107.5rem;
      margin-inline: auto;
      color: ${(props) => props.theme.colors.light[900]};
    }
  }

  .title {
    font-size: 3.2rem;
    font-weight: 700;
  }

  .common-container {
    border-radius: ${(props) => props.theme.borderRadius.medium};
    border: 1px solid ${(props) => props.theme.colors.grey[1000]};
  }

  .inner-content {
    padding: 2.5rem;
  }

  .title-band {
    font-weight: 600;
    padding: 0.9rem 1.6rem;
    background-color: ${(props) => props.theme.colors.grey[850]};
    &.bt-inherit {
      border-top-right-radius: inherit;
      border-top-left-radius: inherit;
    }
  }

  #header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & + .code {
      height: 15rem;
    }
  }

  #payload + .code {
    height: 22rem;
  }

  .decoder-main-container {
    display: flex;
    aside.decoded {
      width: ${leftContentWidth};
      margin-right: 2rem;
    }

    .decoded {
      display: flex;
      flex-direction: column;
      .content {
        word-break: break-word;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .token {
          line-height: 2.4rem;
        }

        .copy-btn {
          border: 1px solid ${(props) => props.theme.colors.green[1000]};
          padding-block: 1rem;
          text-align: center;
          width: 100%;
          font-variation-settings: 'wght' 500;
          border-radius: 1rem;
          color: ${(props) => props.theme.colors.green[900]};
          background-color: ${(props) => props.theme.colors.green[1000]}1A;
          img {
            margin-left: 0.5rem;
          }
        }
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    .input-container {
      flex: 1;
    }
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

    .note {
      padding-block: 1.1rem;
      background-color: ${(props) => props.theme.colors.orange[1000] + '0a'};
      b {
        color: ${(props) => props.theme.colors.orange[1000]};
      }
    }
  }

  hr {
    border-color: ${(props) => props.theme.colors.grey[750]};
    margin-block-end: 0;
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
`;

export const ExplanationContainerStyled = styled.article`
  &.explanation-content-container {
    section {
      margin-block-start: 6rem;
    }
  }

  ul{
    padding: 0;
  }

  ul.parts-of-jwt{
    &>li{
      display: flex;
      margin-bottom: 1.5rem;
      & > :not(:last-child){
        margin-right: .5rem;
      }
      span.header{
        color: ${props=>props.theme.colors.red[200]};
      }

      span.payload{
        color: ${props=>props.theme.colors.purple[200]};
      }

      span.signature{
        color: ${props=>props.theme.colors.blue[200]};
      }

      .description ul{
        list-style: disc inside;
      }
    }
  }
`;

export default JwtContainerStyled;
