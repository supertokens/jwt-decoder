import styles from "../../styles/home/prebuilt-ui.module.css";
import commonStyles from "../../styles/home/common.module.css";

export default function PrebuiltUI() {
    return (
        <section className={`${commonStyles.section} ${styles.prebuilt_ui_section}`}>
            <div className={commonStyles.container}>
                <div className={styles.text_container}>
                    <h2 className={styles.title}>Setup in 5 minutes. With prebuilt UI</h2>
                    <div className={styles.curly_brace}>{"}"}</div>
                    <div className={styles.funky_sub_text}>Hosted on yourdomain.com, no more redirects!</div>
                </div>
                <p className={styles.gray_sub_text}>
                    Or use our frontend SDKs and helper functions to build your own login page quickly
                </p>
                <span className={styles.see_our_customer_pill}>SEE OUR CUSTOMERS UI'S BELOW!</span>
            </div>
        </section>
    );
}
