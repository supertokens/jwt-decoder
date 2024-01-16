import commonStyles from "../../../styles/product/common.module.css";

export default function Extensibility() {
    return (
        <section className={commonStyles.section_container}>
            <h1 className={commonStyles.product_title}>Extensibility</h1>
            <p className={commonStyles.product_subtitle}>
                Overrides to make SuperTokens work the way you want. You can override:
            </p>
            <div className={commonStyles.divider}></div>
            <div className={commonStyles.divider_hue}></div>
        </section>
    );
}
