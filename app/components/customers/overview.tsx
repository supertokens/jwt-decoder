import { useState } from "react";
import styles from "../../styles/customers/components/overview.module.css";
import Title from "./title";

type OverviewProps = {
    config: {
        color: string
        gradient: string;
        aboutPoints: string[];
        overviewPoints: {
            title: string;
            content: string;
        }[];
    };
};

export default function Overview({ config }: OverviewProps) {
    const [showInfo, setShowInfo] = useState(true);

    const { aboutPoints, overviewPoints } = config;

    return (
        <section className={styles.overview_container}>
            <div className={styles.about_section}>
                <div>
                    About
                    <span onClick={() => setShowInfo(!showInfo)}>
                        <svg
                            style={{
                                rotate: showInfo ? "0deg" : "45deg"
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="7"
                            viewBox="0 0 7 7"
                            fill="none"
                        >
                            <path
                                d="M0.941909 6.15251C1.04837 6.25686 1.19189 6.31469 1.34095 6.31328C1.49002 6.31188 1.63244 6.25136 1.73691 6.14502L3.50282 4.34502L5.26941 6.14502C5.32041 6.20066 5.38209 6.24546 5.45077 6.27677C5.51945 6.30807 5.59373 6.32523 5.66918 6.32722C5.74463 6.32922 5.81971 6.31601 5.88995 6.28838C5.96019 6.26075 6.02416 6.21927 6.07803 6.1664C6.1319 6.11354 6.17458 6.05037 6.20353 5.98067C6.23248 5.91096 6.2471 5.83613 6.24653 5.76066C6.24596 5.68518 6.23021 5.6106 6.20021 5.54134C6.17021 5.47208 6.12657 5.40957 6.0719 5.35752L4.29099 3.5432L6.0719 1.7282C6.17047 1.62067 6.22342 1.47905 6.21956 1.33323C6.2157 1.18741 6.15536 1.04879 6.05124 0.946617C5.94712 0.844447 5.80738 0.786723 5.66152 0.78562C5.51565 0.784516 5.37506 0.840114 5.26941 0.940698L3.50282 2.7407L1.73691 0.940698C1.68591 0.88506 1.62422 0.840257 1.55554 0.808955C1.48686 0.777653 1.41258 0.760492 1.33713 0.758497C1.26167 0.756502 1.1866 0.769716 1.11636 0.797345C1.04612 0.824974 0.982153 0.866453 0.92828 0.919318C0.874408 0.972183 0.83173 1.03535 0.80278 1.10506C0.773831 1.17476 0.759211 1.24959 0.759782 1.32506C0.760353 1.40054 0.776109 1.47512 0.806109 1.54438C0.83611 1.61364 0.879742 1.67615 0.934408 1.7282L2.71532 3.5432L0.934408 5.35752C0.830059 5.46398 0.772233 5.6075 0.773639 5.75657C0.775046 5.90563 0.83557 6.04804 0.941909 6.15251Z"
                                fill="#030110"
                            />
                        </svg>
                    </span>
                </div>
                <div className={styles.underline} />
                {showInfo ? (
                    <>
                        {aboutPoints.map((point, index) => {
                            return <p key={index}>{point}</p>;
                        })}
                    </>
                ) : null}
            </div>
            <div
                className={styles.overview_section}
                style={{
                    background: config.gradient
                }}
            >
                <div>
                    <Title text="Overview" id="overview" />
                    <div className={styles.overview_items_container}>
                        {overviewPoints.map(({ content, title }, index) => {
                            return (
                                <div className={styles.overview_item} key={title}>
                                    <div>
                                        <span style={{ color: config.color }}>{index + 1}</span>
                                        <span>{title}</span>
                                    </div>
                                    <div className={styles.line}></div>
                                    <p>{content}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div
                style={{
                    height: "1px",
                    background: "radial-gradient(rgba(111, 92, 255, 0.30) 0%, rgba(111, 92, 255, 0.00) 100%, #000);"
                }}
            ></div>
        </section>
    );
}
