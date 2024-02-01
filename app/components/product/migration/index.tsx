import Image from "next/image";
import commonStyles from "../../../styles/product/common.module.css";
import styles from "../../../styles/product/migration.module.css";
import { ProductPageAssets } from "../../../assets/images/product";

const data = [
    "Import existing password hashes",
    "Bulk import 10s of millions of users or implement a lazy migration strategy",
    "Import TOTP secrets",
    "Import roles and permissions",
    "Map SuperTokens user IDs to existing user IDs"
];

export default function Migration() {
    return (
        <section className={commonStyles.section_container}>
            <h1 className={commonStyles.product_title}>Migration</h1>
            <div className={styles.content_container}>
                <h3>Easily migrate large user bases</h3>
                <div className={styles.list_container}>
                    {data.map((item, index) => {
                        return (
                            <div className={styles.list_card} key={index}>
                                <Image src={ProductPageAssets.Migration.OrangePill} alt="orange pill" />
                                {item}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={commonStyles.divider}></div>
            <div className={commonStyles.divider_hue}></div>
        </section>
    );
}
