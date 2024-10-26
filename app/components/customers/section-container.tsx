import styles from "../../styles/customers/components/section-container.module.css";

type SectionContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export default function SectionContainer({ children, className }: SectionContainerProps) {
    return <section className={`${styles.section_container} ${className}`}>{children}</section>;
}
