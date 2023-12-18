import styles from "../../styles/customers/components/hero.module.css";

export default function Title({ text, id }: { text: string, id: string }) {
    return (
        <h1 className={styles.title} id={id}>
            {text}
        </h1>
    );
}
