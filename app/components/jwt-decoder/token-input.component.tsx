import ReactCodeMirror from '@uiw/react-codemirror';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css';

function MyCodeEditor({ value:code, setValue }) {

  const segments = (code || "").split('.');

  const handleChange = (value) => {
    console.log(value)
    // do something with the new value
  }

  return (
    <ReactCodeMirror
      value={code}
      basicSetup={
        {
          lineNumbers: false
        }
      }
      // options={{
      //   mode: 'javascript',
      //   theme: 'material',
      //   lineNumbers: true
      // }}
      onChange={handleChange}
    >
      {/* {segments.map((segment, index) => {
        let style;
        if(index === 0) {
          style = {color: 'red'};
        } else if(index === 1) {
          style = {color: 'green'};
        } else {
          style = {color: 'blue'};
        }

        return <span key={index} style={style}>{segment}</span>
      })} */}
      </ReactCodeMirror>
  );
}


export default MyCodeEditor