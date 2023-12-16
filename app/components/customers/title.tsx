import styles from "../../styles/customers/components/hero.module.css";

export default function Title({ text }: { text: string }) {
    return (
        <h1 className={styles.title} id={text.toLowerCase()}>
            {text}
        </h1>
    );
}
