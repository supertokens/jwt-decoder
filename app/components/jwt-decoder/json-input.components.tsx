import React, { useRef, useState } from "react"
import ReactCodeMirror, { ReactCodeMirrorProps, ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { json } from "@codemirror/lang-json"
import { InputWrapper, JwtInputWrapper } from "./input.styles"
import { EditorView } from "@codemirror/view";

interface IInputEditorProps extends ReactCodeMirrorProps {
  onValueChange?: (v: string) => void;
}

const InputEditor: React.FC<IInputEditorProps> = ({ onValueChange, ...props }) => {
  return <InputWrapper className="input-wrapper">
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
  const [inFocus, setInFocus] = useState(false);
  const inputRef = useRef<ReactCodeMirrorRef>(null);
  const subStrings = value.split(".")

  const onChange = (value: string) => {
    if (inputRef.current.view.hasFocus) {
      onValueChange(value)
    }
  }

  return <JwtInputWrapper onMouseLeave={() => setInFocus(false)}
    onMouseEnter={() => setInFocus(true)} $inFocus={inFocus}>
    <ReactCodeMirror
      value={value}
      basicSetup={{ lineNumbers: false }}
      theme={"dark"}
      extensions={[
        EditorView.lineWrapping
      ]}
      ref={inputRef}
      onChange={onChange}
      minHeight="100%"
      className="code"
      {...props}
    >
      {
        !inFocus && <div onClick={() => setInFocus(true)} className="colored-token-parts">
          {subStrings.map((str, idx) => <span className="str" key={str + idx}>{str}{idx < subStrings.length - 1 ? '.' : ''}</span>)}
        </div>
      }

    </ReactCodeMirror>
  </JwtInputWrapper>
}


export default InputEditor
