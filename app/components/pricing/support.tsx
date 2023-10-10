import styles from "../../styles/pricing/support.module.css";

const data = [
    {
        title: "Implementation and migration assistance",
        content: "Expert guidance for migration and integrating new features."
    },
    {
        title: "Types of queries",
        content:
            "Bug fixes, downtime issues, code reviews, testing, upgrades, customizations and integrating new features."
    },
    {
        title: "Fast-Track Response",
        content: "Guaranteed response times from 2 hours to 2 days."
    },
    {
        title: "Multichannel Access",
        content: "Reach us via Email, Slack, MS Teams, and Video calls."
    },
];

type SupportCardType = typeof data[0];

function SupportCard({ title, content }: SupportCardType) {
    return (
        <div className={styles.support__item__container}>
            <div className={styles.support__pill}>
                <div>
                    <span>{title}</span>
                </div>
            </div>
            <div className={styles.content__container}>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default function AddOnPackage() {
    return (
        <section className={styles.support__section}>
            <h2>Professional Support</h2>
            <p>We offer a range of options that include</p>
            <div className={styles.support__container}>
                <div className={styles.support__card__container}>
                    {data.map(item => {
                        return <SupportCard {...item} />;
                    })}
                </div>
                <div className={styles.break} />
                <a role="button" href="mailto:team@supertokens.com"  className={styles.gradient__btn}>
                    <span>Get in touch</span>
                </a>
            </div>
        </section>
    );
}