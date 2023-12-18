import styles from "../../styles/customers/components/admonition.module.css";

export default function Admonition({
    content,
    gradient,
    background,
    color
}: {
    content: string;
    gradient: string;
    background: string;
    color: string;
}) {
    return (
        <div className={styles.admonition_container} style={{ background: gradient, color: color }}>
            <div className={styles.sideline} style={{ background: background }}></div>“{content}”
        </div>
    );
}
