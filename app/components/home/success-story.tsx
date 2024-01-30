import styles from "../../styles/home/success-story.module.css";
import commonStyles from "../../styles/home/common.module.css";
import Image from "next/image";
import HomePageAssets from "../../assets/images/home";

const Customers = [
    {
        bannerImage: "",
        title: "",
        subtitle: "",
        redirectLink: ""
    },
    {
        bannerImage: "",
        title: "",
        subtitle: "",
        redirectLink: ""
    }
];

export default function SuccessStory() {
    return (
        <section className={`${commonStyles.section} ${styles.section}`}>
            <div className={commonStyles.container}>
                <h1 className={styles.title}>
                    Become Our <span>Next</span>
                    <br />
                    Success <span>Story.</span>
                </h1>
                <div className={styles.line} />
                <div className={styles.container}>
                    <div className={styles.card}>
                        <div className={`${styles.curology} ${styles.wrapper}`}>
                            <Image src={HomePageAssets.SuccessStory.CurologyLogo} alt="Curology logo" />
                        </div>
                        <div>
                            <div className={styles.title}>
                                <div
                                    className={styles.stick}
                                    style={{ background: "radial-gradient(circle,#8c80ee,#572efb)" }}
                                />
                                SuperTokens powers the authentication and user management systems for Curology, the
                                largest dermatology practice in the US with millions of users
                            </div>
                            <p className={styles.subtitle}>How Curology evaluated, migrated, and used SuperTokens</p>
                        </div>
                        <a className={styles.case_study_curology_link} href="/customers/curology" target="_blank">
                            Read case study {"->"}
                        </a>
                    </div>
                    <div className={styles.card}>
                        <div className={`${styles.built_intelligence} ${styles.wrapper}`}>
                            <Image
                                src={HomePageAssets.SuccessStory.BuiltIntelligenceLogo}
                                alt="Built Intelligence logo"
                            />
                        </div>
                        <div>
                            <div className={styles.title}>
                                <div
                                    className={styles.stick}
                                    style={{ background: "radial-gradient(circle,#0170ba,#3b98c6)" }}
                                />
                                Built Intelligence uses SuperTokens SSO for construction software - powering UK’s
                                National Grid and Environmental Agency
                            </div>
                            <p className={styles.subtitle}>
                                Using SuperTokens, Built Intelligence implements SSO which powers UK’s national grid and
                                other Institutions.
                            </p>
                        </div>
                        <a
                            className={styles.case_study_builtinteligence_link}
                            href="/customers/builtintelligence"
                            target="_blank"
                        >
                            Read case study {"->"}
                        </a>
                    </div>
                </div>
                <a className={styles.read_more_button} href="/customers">
                    <div>
                        <span>Read more case studies</span> <span className={styles.circle}>{"->"}</span>
                    </div>
                </a>
                <div className={styles.line} />
                <div>
                    <p>USED BY ENGINEERS AT TOP COMPANIES</p>
                    <div></div>
                </div>
                <div className={styles.line} />
            </div>
        </section>
    );
}
