import styles from "../../../styles/pricing/form/input.module.css";

type InputProps = JSX.IntrinsicElements["input"];

export default function Input(props: InputProps) {
    const { className, ...rest } = props;
    return <input className={styles.pricing__input + " " + className} {...rest} />;
}
