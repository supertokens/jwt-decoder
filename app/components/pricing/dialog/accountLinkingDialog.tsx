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
        </>
    );
}
