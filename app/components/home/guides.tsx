import styles from "../../styles/home/guides.module.css";
import commonStyles from "../../styles/home/common.module.css";
import HomePageAssets from "../../assets/images/home";
import Image from "next/image";

const LoginMethods = [
    {
        name: "Email Password Login",
        image: HomePageAssets.Guides.EmailPasswordForm,
        alt: "Email password form image",
        backgroundColor: "linear-gradient(100.66deg, #D8FABC 2.1%, #0C7D65 78.42%)",
        link: "https://supertokens.com/docs/emailpassword/introduction"
    },
    {
        name: "Social Login + Email Password",
        image: HomePageAssets.Guides.ThirdpartyEmailPassword,
        alt: "Thirparty and email password login form image",
        backgroundColor: "linear-gradient(95.99deg, #7FF8F1 2%, #64A3EE 98.37%)",
        link: "https://supertokens.com/docs/thirdpartyemailpassword/introduction"
    },
    {
        name: "Social Login",
        image: HomePageAssets.Guides.Thirdparty,
        alt: "Thirparty login form image",
        backgroundColor: "linear-gradient(91.25deg, #E654B8 -2.38%, #7300FF 99.56%)",
        link: "https://supertokens.com/docs/thirdparty/introduction"
    },
    {
        name: "Passwordless Login",
        image: HomePageAssets.Guides.Passwordless,
        alt: "Passwordless login form",
        backgroundColor: "linear-gradient(99.33deg, #FFAD62 1.76%, #FF6594 67.98%)",
        link: "https://supertokens.com/docs/passwordless/introduction"
    }
];

export default function Guides() {
    return (
        <section className={`${commonStyles.section} ${styles.section}`}>
            <div className={commonStyles.container}>
                <h1>Guides,</h1>
                <p>For every use case.</p>

                <div className={styles.login_methods_container}>
                    {LoginMethods.map(loginMethod => {
                        return (
                            <a href={loginMethod.link} target="_blank" key={loginMethod.name}>
                                <Image
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    {...loginMethod.image}
                                    alt={loginMethod.alt}
                                />
                                <div
                                    style={{
                                        background: loginMethod.backgroundColor,
                                        backgroundClip: "text",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    }}
                                >
                                    {loginMethod.name}
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
