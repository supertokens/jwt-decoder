import React, { useRef, useState } from "react"
import ReactCodeMirror, { BasicSetupOptions, ReactCodeMirrorProps, ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { json } from "@codemirror/lang-json"
import { css } from "@codemirror/lang-css"
import { InputWrapper, JwtInputWrapper } from "./input.styles"
import { EditorView } from "@codemirror/view";

interface IInputEditorProps extends ReactCodeMirrorProps {
  onValueChange: (v: string) => void;
}

const commonBasicSetup: BasicSetupOptions = {
  lineNumbers: false,
  foldGutter: false,
  highlightActiveLine: false,
}

const jwtConfigSetup: BasicSetupOptions = {
  drawSelection: true,
  highlightSpecialChars: false,
  highlightActiveLineGutter: false,
  indentOnInput: false,
  bracketMatching: false,
  closeBrackets: false,
  autocompletion: false,
  highlightSelectionMatches: false,
  closeBracketsKeymap: false,
  defaultKeymap: false
}

const InputEditor: React.FC<IInputEditorProps> = ({ onValueChange, ...props }) => {

  const inputRef = useRef<ReactCodeMirrorRef>(null);
  const onChange = (value: string) => {
    if (inputRef.current.view.hasFocus) {
      onValueChange(value)
    }
  }

  return <InputWrapper className="input-wrapper">
    <ReactCodeMirror
      basicSetup={commonBasicSetup}
      theme={"dark"}
      extensions={[json(),
      EditorView.lineWrapping
      ]}
      className="code"
      height="auto"
      minHeight="100%"
      {...props}
      ref={inputRef}
      onChange={onChange}
    /></InputWrapper>
}

export const JWTInputEditor: React.FC<IInputEditorProps> = ({ value, onValueChange, ...props }) => {
  const inputRef = useRef<ReactCodeMirrorRef>(null);
  const onChange = (value: string) => {
    if (inputRef.current.view.hasFocus) {
      onValueChange(value)
    }
  }

  return <JwtInputWrapper
  >
    <ReactCodeMirror
      value={value}
      basicSetup={{
        ...commonBasicSetup,
        ...jwtConfigSetup
      }}
      theme={"dark"}
      extensions={[
        css(),
        EditorView.lineWrapping
      ]}
      height="auto"
      ref={inputRef}
      onChange={onChange}
      className="code"
      {...props}
    />

  </JwtInputWrapper>
}


export default InputEditor
