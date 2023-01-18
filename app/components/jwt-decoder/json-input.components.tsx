import React, { useState } from "react"
import ReactCodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { json } from "@codemirror/lang-json"
import { InputWrapper, JwtInputWrapper } from "./input.styles"
import { EditorView } from "@codemirror/view";

interface IInputEditorProps extends ReactCodeMirrorProps {
  onValueChange?: (v: string) => void;
}

const InputEditor: React.FC<IInputEditorProps> = ({ onValueChange, ...props }) => {
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

export const JWTInputEditor: React.FC<IInputEditorProps> = ({ value, onValueChange, ...props }) => {
  const [inFocus, setInFocus] = useState(false)
  const subStrings = value.split(".")
  return <JwtInputWrapper onBlur={() => setInFocus(false)}
    onFocus={() => setInFocus(true)} $inFocus={inFocus}>
    <ReactCodeMirror
      value={value}
      basicSetup={{ lineNumbers: false }}
      theme={"dark"}
      extensions={[
        EditorView.lineWrapping
      ]}
      onChange={(value, viewUpdate) => {
        onValueChange(value)
      }}
      minHeight="100%"
      className="code"
      {...props}
    >
      {
        !inFocus && <div onClick={() => setInFocus(true)} className="colored-token-parts">
          {subStrings.map((str, idx) => <span className="str">{str}{idx < subStrings.length - 1 ? '.' : ''}</span>)}
        </div>
      }

    </ReactCodeMirror>
  </JwtInputWrapper>
}


export default InputEditor
