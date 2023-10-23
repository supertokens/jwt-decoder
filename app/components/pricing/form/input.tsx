import styles from "../../../styles/pricing/form/input.module.css";

type InputProps = JSX.IntrinsicElements["input"];

export default function Input(props: InputProps) {
    return <input className={styles.pricing__input} {...props} />;
}
