import Image from "next/image";
import styles from "../../styles/home/hiring-banner.module.css";
import HomePageAssets from "../../assets/images/home";
import { useState } from "react";
import { VERSION, sendButtonAnalytics } from "../../utils";

export default function HiringBanner() {
    const [hideBanner, setHideBanner] = useState(false);

    if (hideBanner) {
        return null;
    }

    return (
        <div id="bottom_ending_section" className={styles.banner}>
            <div className={styles.container}>
                <Image {...HomePageAssets.EverythingYouNeedToKnow.HeartLogo} alt="Heart Logo" />
                <p className={styles.para_web}>
                    Come grow with us! We're looking for awesome people to join the SuperTokens team!
                </p>
                <p className={styles.para_mobile}>Join the SuperTokens Team - We're hiring!</p>
                <a
                    onClick={() =>
                        sendButtonAnalytics("button_home_banner_cta", VERSION, {
                            option_clicked: "open position angellist"
                        })
                    }
                    href="https://wellfound.com/company/supertokens/jobs"
                    target="_blank"
                >
                    See open positions
                </a>
                <Image
                    className={styles.close_icon}
                    onClick={() => setHideBanner(true)}
                    {...HomePageAssets.EverythingYouNeedToKnow.DismissLogo}
                    alt="Dismiss button logo"
                />
            </div>
        </div>
    );
}
