import styles from "../../styles/pricing/cant-find.module.css";

export default function CantFind() {
    return (
        <section className={styles.container}>
            <div className={styles.first__section}>
                <div>
                    <h1 className={styles.text__large}>
                        Cant find what you are <span className={styles.gradient__text}>looking for?</span>
                    </h1>
                </div>
                <div className={styles.line} />
                <div className={styles.bullet__points}>
                    <div className={styles.pill}>
                        <div className={styles.pill__wrapper}>
                            <div className={styles.gradient__text__green__to__blue}>Small start up?</div>
                        </div>
                    </div>
                    <div className={styles.pill}>
                        <div className={styles.pill__wrapper}>
                            <div className={styles.gradient__text__green__to__blue}>Large volume of organizations?</div>
                        </div>
                    </div>
                    <div className={styles.pill}>
                        <div className={styles.pill__wrapper}>
                            <div className={styles.gradient__text__green__to__blue}>
                                Sell to small and midsize businesses (SMBs)?
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom__section}>
                <p>We&apos;d be happy to adapt our pricing to fit your use case! </p>
                <a href="mailto:team@supertokens.com"><button><span>Get in touch</span></button></a>
            </div>
        </section>
    );
}
