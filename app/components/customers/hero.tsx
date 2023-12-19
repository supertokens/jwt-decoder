import { StaticImageData } from "next/image";

import { CustomerAssets } from "../../assets/images/customers";
import styles from "../../styles/customers/components/hero.module.css";

type HeroProps = {
    config: {
        backgroundCover: {
            gradient: string;
            imageData: StaticImageData;
        };
        leftContent: {
            title: string;
            publishDate: string;
            readingTime: string;
            businessType: {
                text: string;
                textColor: string;
                borderColor: string;
            };
        };
        rightContent: {
            gradient: string;
            stats: {
                text: string;
                subText: string;
            }[];
        };
    };
};

export default function Hero({ config }: HeroProps) {
    const { backgroundCover, leftContent, rightContent } = config;

    return (
        <section className={styles.hero_container}>
            <div
                style={{
                    backgroundImage: `url('${CustomerAssets.Curology.Cover.src}')`
                }}
                className={styles.background_cover}
            />
            <div
                className={styles.case_study_banner}
                style={{
                    background: backgroundCover.gradient
                }}
            >
                <span>Case Study</span>
                <img {...backgroundCover.imageData} alt="curology logo" />
            </div>
            <div className={styles.content_container}>
                <div className={styles.left_content}>
                    <h4>{leftContent.title}</h4>
                    <div>
                        <div className={styles.content_read_time}>
                            <span>{leftContent.publishDate}</span>
                            <span>•</span>
                            <span>{leftContent.readingTime}</span>
                        </div>
                        <div>
                            <span
                                className={styles.business_type}
                                style={{
                                    border: `1px solid ${leftContent.businessType.borderColor}`,
                                    background: leftContent.businessType.textColor,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                }}
                            >
                                {leftContent.businessType.text}
                            </span>
                        </div>
                    </div>
                </div>
                <div
                    className={styles.right_content}
                    style={{
                        background: rightContent.gradient
                    }}
                >
                    <div
                        className={styles.shadow}
                        style={{
                            background: rightContent.gradient
                        }}
                    />
                    <div className={styles.right_content_wrapper}>
                        {rightContent.stats.map(stat => {
                            return (
                                <div>
                                    <span>{stat.text}</span>
                                    <span
                                        className={styles.stat}
                                        style={{
                                            background: leftContent.businessType.textColor,
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent"
                                        }}
                                    >
                                        {stat.subText}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
