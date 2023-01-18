import React from "react"
import ReactCodeMirror from '@uiw/react-codemirror';
import { json } from "@codemirror/lang-json"
import CodeMirror from 'codemirror';
import { InputWrapper } from "./input.styles"
import { EditorView } from "@codemirror/view";
import { useAppTheme } from "../../assets/global-styles/theme";

const highlightLines = (editor, start, end) => {
  const from = { line: 1, ch: 0 };
  const to = { line: 3, ch: 10 };
  editor.markText(from, to, { className: "codemirror-highlighted" });
}



const HighlightedEditor = ({ value }) => {
  return <InputWrapper>
    <ReactCodeMirror
      value={value}
      basicSetup={{ lineNumbers: false }}
      theme={"dark"}
      extensions={[json(),
      EditorView.lineWrapping
      ]}
      className="code"
    /></InputWrapper>
}


export const JWTInputEditor = ({ value }) => {
  return <InputWrapper>
    <ReactCodeMirror
      value={value}
      basicSetup={{ lineNumbers: false }}
      theme={"dark"}
      extensions={[
        EditorView.lineWrapping
      ]}
      className="code"
    /></InputWrapper>
}


export default HighlightedEditor
