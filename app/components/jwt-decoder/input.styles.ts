import styled from 'styled-components';

export const InputWrapper = styled.div`
  height: 100%;
  caret-color: ${(props) => props.theme.colors.light[1000]}!important;

  * {
    font-family: ${(props) => props.theme.fontFamily.menlo};
  }

  .cm-theme-dark,
  .cm-editor {
    height: 100%;
  }

  .ͼo,
  .cm-gutters {
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
`;

export const JwtInputWrapper = styled(InputWrapper)`
  .cm-content {
    padding: 0;
    line-height: 24px;
  }

  *, .ͼu {
    color: ${(props) => props.theme.colors.blue[200]};
  }

  .ͼu:nth-child(1) {
    color: ${(props) => props.theme.colors.red[200]};
  }
  .ͼu:nth-child(2) {
    color: ${(props) => props.theme.colors.purple[200]};
  }
`;
