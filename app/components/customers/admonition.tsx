import styles from "../../styles/customers/components/admonition.module.css";

export default function Admonition({ content }: { content: string }) {
    return (
        <div className={styles.admonition_container}>
            <div className={styles.sideline}></div>
            “{content}”
        </div>
    );
}
