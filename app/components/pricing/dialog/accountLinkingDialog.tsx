import styles from "../../../styles/pricing/pricingDialog.module.css";

export default function AccountLinkingDialog() {
    return (
        <>
            <h1 className={styles.dialog__heading}>Account Linking</h1>
            <div className={styles.pricing__card__container+ " "+ styles.greyish__border}>
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
                    <div className={styles.underline} />
                    <h3 className={styles.dialog__heading_2}>Minimum $100 / month</h3>
                </div>
            </div>
            <span className={styles.gray__pill}>Pricing Examples</span>
            <ul>
                <li>For managed service, if you have 1 - 4,999 MAUs, that will be $100 / month.</li>
                <li>
                    For managed service, if you have 5,000 MAUs, that will be ( $0.02 + $0.005 ) * 5000 = $125 / month
                </li>
                <li>
                    For managed service, if you have 7,000 MAUs, that will be ( $0.02 + $0.005 ) * 7000 = $175 / month
                </li>
                <li>For self hosted, if you have 1 - 10,000 MAUs, that will be, $100 / month</li>
                <li>For self hosted, if you have 10,001 MAUs, that will be ( $0.01 * 10001 ) = $100.01 / month</li>
                <li>For self hosted, if you have 15,000 MAUs, that will be ( $0.01 * 15000 ) = $150 / month</li>
            </ul>
        </>
    );
}
