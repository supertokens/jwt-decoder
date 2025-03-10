import { StaticImageData } from "next/image";
import styles from "../../styles/customers/components/hero.module.css";
import { Image } from "../../types";

type HeroProps = {
    config: {
        containerStyles?: string;
        background: {
            gradient: string;
            logo: Image<StaticImageData>;
            coverImage: Image;
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
            gap: string;
            stats: {
                text: string;
                subText: string;
            }[];
            styles?: {
                wrapper?: string;
                stat?: string;
                stat_description?: string;
            };
        };
    };
};

export default function Hero({ config }: HeroProps) {
    const { background, leftContent, rightContent, containerStyles } = config;

    return (
        <section className={styles.hero_container}>
            <div
                style={{
                    backgroundImage: `url('${background.coverImage.src}')`
                }}
                className={styles.background_cover}
            />
            <div
                className={styles.case_study_banner}
                style={{
                    background: background.gradient
                }}
            >
                <span>Case Study</span>
                <img {...background.logo.src} alt={background.logo.alt} />
            </div>
            <div className={`${styles.content_container} ${containerStyles}`}>
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
                    <div
                        className={`${styles.right_content_wrapper} ${rightContent.styles?.wrapper}`}
                        style={{
                            gap: rightContent.gap
                        }}
                    >
                        {rightContent.stats.map(stat => {
                            return (
                                <div>
                                    <span
                                        className={`${styles.stat_description} ${rightContent.styles?.stat_description}`}
                                    >
                                        {stat.text}
                                    </span>
                                    <span
                                        className={`${styles.stat} ${rightContent.styles?.stat}`}
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
