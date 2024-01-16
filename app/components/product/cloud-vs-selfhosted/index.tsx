import commonStyles from "../../../styles/product/common.module.css";

export default function CloudVsSelfhosted() {
    return (
        <section className={commonStyles.section_container}>
            <h1 className={commonStyles.product_title}>Cloud vs Self hosted</h1>
            <p className={commonStyles.product_subtitle}>
                Choose your preferred deployment method: SaaS or self hosted Migrate between SaaS and self hosted with
                no code changes and minimal downtime
            </p>
            <div className={commonStyles.divider}></div>
            <div className={commonStyles.divider_hue}></div>
        </section>
    );
}
