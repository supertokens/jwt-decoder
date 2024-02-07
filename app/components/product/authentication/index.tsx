import commonStyles from "../../../styles/product/common.module.css";
import AuthMethodsChooser from "./auth-methods-chooser";

export default function Authentication() {
    return (
        <section id="authentication_section" className={commonStyles.section_container}>
            <h1 className={commonStyles.product_title}>Authentication</h1>
            <p className={commonStyles.product_subtitle}>A complete solution for all your Authentication needs</p>
            <AuthMethodsChooser />
            <div className={commonStyles.divider}></div>
            <div className={commonStyles.divider_hue}></div>
        </section>
    );
}
