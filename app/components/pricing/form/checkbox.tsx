
type CheckBoxProps = JSX.IntrinsicElements["input"]

export default function CheckBox(props: CheckBoxProps) {
    return <input type="checkbox" {...props} />;
}
