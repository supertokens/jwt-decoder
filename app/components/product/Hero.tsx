import styles from "../../styles/product/hero.module.css";
import commonStyles from "../../styles/product/common.module.css";
import { ProductPageAssets } from "../../assets/images/product";

import Image from "next/image";

export default function ProductHero() {
    return (
        <section
            className={commonStyles.section_container}
            style={{ background: `url(${ProductPageAssets.Landing.LandingBg.src})`, backgroundSize: "cover" }}
        >
            <div className={styles.hero_container}>
                <div>
                    <h1 className={commonStyles.product_title + " " + styles.max_width_400}>
                        Our <span className={styles.hero_gradient}>Product</span> offering
                    </h1>
                    <p className={commonStyles.product_subtitle}>Expansive, modular user management suite</p>
                </div>
                <div className={styles.landing_image_container}>
                    <Image priority src={ProductPageAssets.Landing.LandingImage} alt="landing image" />
                </div>
            </div>
            <div className={styles.divider}></div>
        </section>
    );
}
