import styles from "../../styles/home/everything-you-need-to-know.module.css";
import commonStyles from "../../styles/home/common.module.css";
import HomePageAssets from "../../assets/images/home";

import Image from "next/image";
import IFrame from "../customers/iframe";
import { VERSION, sendButtonAnalytics } from "../../utils";

const SupportedFrameworks = [
    {
        logo: HomePageAssets.EverythingYouNeedToKnow.JsLogo,
        alt: "JavaScript logo"
    },
    {
        logo: HomePageAssets.EverythingYouNeedToKnow.ReactLogo,
        alt: "React logo"
    },
    {
        logo: HomePageAssets.EverythingYouNeedToKnow.AngularLogo,
        alt: "Angular logo"
    },
    {
        logo: HomePageAssets.EverythingYouNeedToKnow.CapacitorLogo,
        alt: "Capacitor logo"
    },
    {
        logo: HomePageAssets.EverythingYouNeedToKnow.ElectronLogo,
        alt: "Electron logo"
    },
    {
        logo: HomePageAssets.EverythingYouNeedToKnow.NextjsLogo,
        alt: "Next.js logo"
    },
    {
        logo: HomePageAssets.EverythingYouNeedToKnow.VuejsLogo,
        alt: "Vue.js logo"
    },
    {
        logo: HomePageAssets.EverythingYouNeedToKnow.GolangLogo,
        alt: "Golang logo"
    },
    {
        logo: HomePageAssets.EverythingYouNeedToKnow.PythonLogo,
        alt: "Python logo"
    },
    {
        logo: HomePageAssets.EverythingYouNeedToKnow.NodejsLogo,
        alt: "Node.js logo"
    },
    {
        logo: HomePageAssets.EverythingYouNeedToKnow.T4StackLogo,
        alt: "T4Stack logo",
        link: "https://t4stack.com/"
    }
];

export default function EverythingYouNeedToKnow() {
    return (
        <section id="all-about-supertokens-video" className={`${commonStyles.section} ${styles.section}`}>
            <div className={commonStyles.container}>
                <h1>
                    <span>Everything</span> you need to know about SuperTokens
                </h1>
                <p className={styles.subtitle}>A demo of how SuperTokens works</p>
                <IFrame src="https://www.youtube.com/embed/EjLxXMRN73I" title="YouTube video player" />
                <div className={styles.subtitle2}>WORKS WITH 25+ FRAMEWORKS</div>
                <div className={styles.frameworks_container}>
                    {SupportedFrameworks.map(framework => {
                        if (framework.link) {
                            return (
                                <a href={framework.link} target="_blank">
                                    <Image {...framework.logo} alt={framework.alt} />
                                </a>
                            );
                        }
                        return <Image {...framework.logo} alt={framework.alt} />;
                    })}
                </div>
                <div className={styles.buttons_container}>
                    <a
                        onClick={() =>
                            sendButtonAnalytics("button_home_bottomlanding_cta", VERSION, {
                                option_clicked: "docs cta"
                            })
                        }
                        href="/docs/guides"
                        className={styles.get_started}
                        role="button"
                    >
                        <div>Get Started</div>
                    </a>
                    <a
                        onClick={() =>
                            sendButtonAnalytics("button_home_bottomlanding_cta", VERSION, {
                                option_clicked: "discord"
                            })
                        }
                        href="/discord"
                        className={styles.discord}
                        role="button"
                    >
                        <div>
                            <Image {...HomePageAssets.EverythingYouNeedToKnow.DiscordLogo} alt="Discord logo" />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
