import { ProductPageAssets } from "../../../assets/images/product";
import commonStyles from "../../../styles/product/common.module.css";
import styles from "../../../styles/product/reliability-and-security.module.css";

import Image from "next/image";

const rectangularCardsData = [
    {
        imageUrl: ProductPageAssets.ReliablilityAndSecuity.DatabaseIcon.src,
        alt: "database",
        content: "Run end to end tests locally or in a CICD pipeline by using our core with an in memory DB."
    },
    {
        imageUrl: ProductPageAssets.ReliablilityAndSecuity.CodeIcon.src,
        alt: "code",
        content: "Easily write unit tests by mocking auth APIs via our backend SDK."
    }
];

const sqaureCardsData = [
    {
        title: "Horizontally scalable",
        imageUrl: ProductPageAssets.ReliablilityAndSecuity.HorizontallyScalable.src,
        alt: "servers",
        content: "SuperTokens is stateless and horizontally scalable to 10s of millions of MAUs."
    },
    {
        title: "SOC2",
        imageUrl: ProductPageAssets.ReliablilityAndSecuity.SOC2.src,
        alt: "AICPA SOC",
        content: "100+ controls and tests."
    },
    {
        title: "Detecting session theft",
        imageUrl: ProductPageAssets.ReliablilityAndSecuity.SessionTheft.src,
        alt: "Session theft architecture.",
        content: "We use rotating refresh tokens to detect session theft reliably."
    }
];

export default function ReliabilityAndSecurity() {
    return (
        <section className={commonStyles.section_container}>
            <h1 className={commonStyles.product_title}>Reliability and Security</h1>

            <div className={styles.rectangular_cards_container}>
                {rectangularCardsData.map(card => {
                    return (
                        <div className={styles.rectangular_card}>
                            <Image src={card.imageUrl} alt={card.alt} />
                            <p>{card.content}</p>
                        </div>
                    );
                })}
            </div>
            <div style={{ position: "relative" }}>
                <div className={commonStyles.divider}></div>
            </div>
            <div className={styles.square_cards_container}>
                {sqaureCardsData.map(card => {
                    return (
                        <div className={styles.square_card}>
                            <Image src={card.imageUrl} alt={card.alt} />
                            <div>
                                <h3>{card.title}</h3>
                                <p>{card.content}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={commonStyles.divider}></div>
            <div className={commonStyles.divider_hue}></div>
        </section>
    );
}
