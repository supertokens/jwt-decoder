import React from "react"
import ReactCodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { json } from "@codemirror/lang-json"
import { InputWrapper } from "./input.styles"
import { EditorView } from "@codemirror/view";

interface IInputEditorProps extends ReactCodeMirrorProps {
  onValueChange: (v: string) => void;
}

const InputEditor: React.FC<IInputEditorProps> = ({  onValueChange, ...props }) => {
  return <InputWrapper>
    <ReactCodeMirror
      basicSetup={{ lineNumbers: false }}
      theme={"dark"}
      extensions={[json(),
      EditorView.lineWrapping
      ]}
      onChange={(value, viewUpdate) => {
        onValueChange(value)
      }}
      className="code"
      {...props}
    /></InputWrapper>
}

export const JWTInputEditor = ({ value, onChange }) => {
  return <InputWrapper>
    <ReactCodeMirror
      value={value}
      basicSetup={{ lineNumbers: false }}
      theme={"dark"}
      extensions={[
        EditorView.lineWrapping
      ]}
      onChange={(value, viewUpdate) => {
        onChange(value)
      }}
      minHeight="100%"
      className="code"
    /></InputWrapper>
}


export default InputEditor
