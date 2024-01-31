import styles from "../../styles/home/stats.module.css";
import commonStyles from "../../styles/home/common.module.css";
import HomePageAssets from "../../assets/images/home";

import Image from "next/image";

export function Stats() {
    return (
        <section className={`${commonStyles.section} ${styles.section}`}>
            <div className={styles.green_blob} />

            <div className={commonStyles.container}>
                <div className={styles.container}>
                    <div>
                        <h1>
                            Bigger & <br /> Better
                        </h1>
                        <Image className={styles.world_map} {...HomePageAssets.Stats.WorldMap} alt="World map" />
                    </div>
                    <div className={styles.marquee_container}>
                        <div className={`${styles.badge_container} ${styles.marquee}`}>
                            <SOC2 />
                            <Github />
                            <Raised />
                            <Contributors />
                            <Support />
                        </div>
                        <div className={`${styles.badge_container} ${styles.marquee}`}>
                            <IndentitesSecured />
                            <YC />
                            <ROSSCapital />
                            <Discord />
                            <Uptime />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.purple_blob} />
        </section>
    );
}

function YC() {
    return (
        <a
            href="https://www.ycombinator.com/companies/supertokens"
            target="_blank"
            className={`${styles.badge} ${styles.yc}`}
        >
            <div className={styles.title1} style={{ fontSize: "120px", fontWeight: "400", textAlign: "center" }}>
                Y
            </div>
            <div className={styles.title5} style={{ textAlign: "center" }}>
                Y-Combinator <br />
                Backed
            </div>
        </a>
    );
}

function ROSSCapital() {
    return (
        <div className={`${styles.badge} ${styles.ross_index}`}>
            <Image {...HomePageAssets.Stats.RossIndex} alt="ross index 2023, top opensource startups" />
            <div className={styles.title6} style={{ textAlign: "center" }}>
                Top fastest growing <br />
                OS startup 2022
            </div>
        </div>
    );
}

function Discord() {
    return (
        <div className={`${styles.badge} ${styles.discord}`}>
            <Image {...HomePageAssets.Stats.DiscordLogo} alt="discord logo" />
            <div className={styles.title1}>2K+</div>
            <div className={styles.title5}>Discord members</div>
            <a href="/discord" target="_blank">
                Join Us
            </a>
        </div>
    );
}

function Uptime() {
    return (
        <a href="https://supertokens.instatus.com/" target="_blank" className={`${styles.badge} ${styles.uptime}`}>
            <div className={styles.title3}>99.99%</div>
            <div className={styles.title4}>Uptime</div>
        </a>
    );
}

function IndentitesSecured() {
    return (
        <div className={`${styles.badge} ${styles.indentites_secured}`}>
            <div className={styles.title1}>5M+</div>
            <div className={styles.title4}>
                Identities <br />
                Secured
            </div>
        </div>
    );
}

function Support() {
    return (
        <div className={`${styles.badge} ${styles.support}`}>
            <Image {...HomePageAssets.Stats.Phone} alt="Phone Icon" />
            <div className={styles.title2}>100%</div>
            <div className={styles.title5}>
                Request answered <br />
                within 5 minutes of <br />
                business hours
            </div>
        </div>
    );
}

function Contributors() {
    return (
        <div className={`${styles.badge} ${styles.contributors}`}>
            <div className={styles.title2}>150+</div>
            <div className={styles.title5}>Contributors</div>
            <a href="https://supertokens.com/docs/contribute/introduction" target="_blank" className={styles.title6}>
                Visit Contributing <br /> Guide
            </a>
        </div>
    );
}

function Raised() {
    return (
        <div className={`${styles.badge} ${styles.raised}`}>
            <div className={styles.title3}>$300M</div>
            <div className={styles.title5}>
                Fund raised by
                <br />
                users
            </div>
        </div>
    );
}

function Github() {
    return (
        <div className={`${styles.badge} ${styles.github}`}>
            <Image {...HomePageAssets.Stats.GithubLogo} alt="Github logo" />
            <div className={styles.title2}>11K+</div>
            <div className={styles.title5}>Github stars</div>
            <a href="https://github.com/supertokens/supertokens-core" target="_blank">
                Star Us
            </a>
        </div>
    );
}

function SOC2() {
    return (
        <div className={`${styles.badge} ${styles.soc2}`}>
            <Image {...HomePageAssets.Stats.SOC2} alt="SOC2 certified logo" />
            <div className={styles.title5}>SOC2 Compliant</div>
        </div>
    );
}
