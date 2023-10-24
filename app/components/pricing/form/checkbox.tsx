import styles from "../../../styles/pricing/form/checkbox.module.css";

type CheckBoxProps = Omit<JSX.IntrinsicElements["input"], "type">;

export default function CheckBox(props: CheckBoxProps) {
    const { className, ...rest } = props;
    return <input className={`${styles.checkbox} ${className}`} type="checkbox" {...rest} />;
}
