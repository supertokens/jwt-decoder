import styles from "../../styles/home/everything-you-need.module.css";
import commonStyles from "../../styles/home/common.module.css";

import HomePageAssets from "../../assets/images/home";
import { useEffect, useState } from "react";

export default function EverythingYouNeed() {
    const [featureIndex, setFeatureIndex] = useState(0);
    const [textWidowHeight, setTextWidnowHeight] = useState(80);

    useEffect(() => {
        function handleTextWindowAdjustmentOnSizeChange() {
            if (window.matchMedia(`(max-width: 468px)`).matches) {
                setTextWidnowHeight(40);
                return;
            }

            if (window.matchMedia(`(max-width: 768px)`).matches) {
                setTextWidnowHeight(48);
                return;
            }

            if (window.matchMedia(`(max-width: 1440px)`).matches) {
                setTextWidnowHeight(60);
                return;
            }

            setTextWidnowHeight(80);
        }

        const timer = setInterval(() => {
            setFeatureIndex(prevState => (prevState < 6 ? prevState + 1 : 0));
        }, 1200);

        handleTextWindowAdjustmentOnSizeChange();
        window.addEventListener("resize", handleTextWindowAdjustmentOnSizeChange);

        () => {
            window.removeEventListener("resize", handleTextWindowAdjustmentOnSizeChange);
            clearInterval(timer);
        };
    }, []);

    return (
        <section id="feature_toggle_section" className={`${commonStyles.section} ${styles.section}`}>
            <div
                className={styles.background_cover_image}
                style={{
                    background: `url(${HomePageAssets.EverythingYouNeed.SectionBG.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
            />
            <div className={`${commonStyles.container} ${styles.container}`}>
                <div>
                    <h1>
                        Everything you need. <br />
                        Get{" "}
                        <div className={styles.feature_list_container}>
                            <div
                                style={{
                                    transform: `translateY(calc(-${textWidowHeight}px * ${featureIndex}))`,
                                    transition: "all 0.25s ease-out 0s"
                                }}
                            >
                                <span className={styles.user_roles}>User Roles.</span>
                                <span className={styles.twofa}>2FA.</span>
                                <span className={styles.sso}>SSO (AD, Okta).</span>
                                <span className={styles.session_management}>Session Management.</span>
                                <span className={styles.user_management}>User Management.</span>
                                <span className={styles.account_linking}>Account Linking.</span>
                                <span className={styles.machine_auth}>Machine Auth.</span>
                            </div>
                        </div>
                    </h1>
                </div>
            </div>
        </section>
    );
}
