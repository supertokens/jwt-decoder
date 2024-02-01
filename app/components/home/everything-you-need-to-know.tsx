import styles from "../../styles/home/everything-you-need-to-know.module.css";
import commonStyles from "../../styles/home/common.module.css";
import HomePageAssets from "../../assets/images/home";

import Image from "next/image";
import IFrame from "../customers/iframe";

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
        alt: "T4Stack logo"
    }
];

export default function EverythingYouNeedToKnow() {
    return (
        <section className={`${commonStyles.section} ${styles.section}`}>
            <div className={styles.container}>
                <h1>
                    <span>Everything</span> you need to know about SuperTokens
                </h1>
                <p className={styles.subtitle}>A demo of how SuperTokens works</p>
                <IFrame src="https://www.youtube.com/embed/EjLxXMRN73I" title="YouTube video player" />
                <div className={styles.subtitle2}>WORKS WITH 25+ FRAMEWORKS</div>
                <div className={styles.frameworks_container}>
                    {SupportedFrameworks.map(framework => {
                        return <Image {...framework.logo} alt={framework.alt} />;
                    })}
                </div>
                <div className={styles.buttons_container}>
                    <a className={styles.get_started} role="button">
                        <div>Get Started</div>
                    </a>
                    <a className={styles.discord} role="button">
                        <div>
                            <Image {...HomePageAssets.EverythingYouNeedToKnow.DiscordLogo} alt="Discord logo" />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
