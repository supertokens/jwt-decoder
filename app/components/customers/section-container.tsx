import styles from "../../styles/customers/components/section-container.module.css";

type SectionContainerProps = {
    children: React.ReactNode;
};

export default function SectionContainer({ children }: SectionContainerProps) {
    return <section className={styles.section_container}>{children}</section>;
}
