import styles from "../../../styles/pricing/pricingDialog.module.css";

export default function AccountLinkingDialog() {
    return (
        <>
            <h1 className={styles.dialog__heading}>Account Linking</h1>
            <div className={styles.pricing__card__container}>
                <div className={styles.pricing__card__wrapper}>
                    <div className={styles.pricing__card}>
                        <div className={styles.pill__cards}>
                            <span className={styles[`orange__pill`]}>Managed Service</span>
                            <span className={styles.sub__text}>
                                <b>$0.005</b> / MAU
                            </span>
                        </div>
                        <div className={styles.pill__cards}>
                            <span className={styles[`orange__pill`]}>Self Hosted</span>
                            <span className={styles.sub__text}>
                                <b>$0.01</b> / MAU
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.underline} />
            <p className={styles.para}>Account linking costs minimum $100 / month (for both managed and self hosted)</p>
            <span className={styles.gray__pill}>Pricing Examples</span>
            <ul>
                <li>If you have &gt; 5K MAU, that costs minimum of $100</li>
                <li>
                    2 tenants with email password in one (2 users), and social login in another (5 users): $5 / month
                </li>
            </ul>
        </>
    );
}
