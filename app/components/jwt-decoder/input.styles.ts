import styled from 'styled-components';

export const InputWrapper = styled.div`
  height: 100%;
  *{
    font-family: ${props=>props.theme.fontFamily.menlo};
  }

  .cm-gutters {
    display: none;
  }

  .cm-line {
    padding-inline-start: 0;
  }

  .ͼo,
  .cm-gutters {
    background-color: transparent !important;
  }

  .ͼo .cm-activeLine {
    background-color: transparent !important;
  }

  .ͼq {
    color: ${(props) => props.theme.colors.blue[200]};
  }

  .ͼ13 {
    color: ${(props) => props.theme.colors.brown[500]};
  }

  .ͼu {
    color: #8ece78;
  }

  .cm-placeholder {
    color: ${props=>props.theme.colors.blue[200]};
  }

  .colored-token-parts {
    .str:nth-child(1) {
      color: ${(props) => props.theme.colors.red[200]};
    }
    .str:nth-child(2) {
      color: ${(props) => props.theme.colors.purple[200]};
    }
    .str:nth-child(3) {
      color: ${(props) => props.theme.colors.blue[200]};
    }
  }
`;

export const JwtInputWrapper = styled(InputWrapper)<{$inFocus: boolean}>`
  ${props=>!props.$inFocus && `
    .cm-line, .cm-scroller{
      display: none!important;
    }
  `}

  .cm-content{
    padding: 0;
    line-height: 24px;
  }
`