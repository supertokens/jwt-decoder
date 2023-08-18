import styles from "../../../styles/pricing/pricingDialog.module.css";


export default function DashboardDialog() {
    return (
        <>
            <h1 className={styles.dialog__heading}>Dashboard</h1>
            <div className={styles.pricing__card__container}>
                <div className={styles.pricing__card__wrapper}>
                    <p className={styles.sub__text}>You get three users for free. For each additional user:</p>
                    <div className={`${styles.pill__cards}`}>
                        <span className={styles.orange__pill}>Pricing</span>
                        <span className={styles.sub__text}>$20 / month / user</span>
                    </div>
                </div>
            </div>
        </>
    );
}
