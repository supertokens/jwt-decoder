import commonStyles from "../../styles/product/common.module.css";
import styles from "../../styles/product/getstarted.module.css";

import Image from "next/image";
import { ProductPageAssets } from "../../assets/images/product";

export default function GetStarted() {
    return (
        <section className={commonStyles.section_container}>
            <div className={styles.content_container}>
                <div>
                    <h3>Get started!</h3>
                    <p>Quick Start guides for all use cases!</p>
                    <div className={styles.buttons_container}>
                        <div className={styles.hue_circle} />
                        <a href="/auth" target="_blank">
                            <button role="link">Join Us!</button>
                        </a>
                        <a href="/docs/guides" target="_blank">
                            <button role="link">See Guides</button>
                        </a>
                    </div>
                </div>
                <div>
                    <Image src={ProductPageAssets.GetStarted.GuidesImage} alt="Guides page." />
                </div>
            </div>
            <div className={commonStyles.divider}></div>
            <div className={commonStyles.divider_hue}></div>
        </section>
    );
}
