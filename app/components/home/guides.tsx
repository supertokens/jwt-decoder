import styles from "../../styles/home/guides.module.css";
import commonStyles from "../../styles/home/common.module.css";
import HomePageAssets from "../../assets/images/home";
import Image from "next/image";

const LoginMethods = [
    {
        name: "Email Password Login",
        image: HomePageAssets.Guides.EmailPasswordForm,
        backgroundColor: "linear-gradient(100.66deg, #D8FABC 2.1%, #0C7D65 78.42%)"
    },
    {
        name: "Social Login + Email Password",
        image: HomePageAssets.Guides.ThirdpartyEmailPassword,
        backgroundColor: "linear-gradient(95.99deg, #7FF8F1 2%, #64A3EE 98.37%)"
    },
    {
        name: "Social Login",
        image: HomePageAssets.Guides.Thirdparty,
        backgroundColor: "linear-gradient(91.25deg, #E654B8 -2.38%, #7300FF 99.56%)"
    },
    {
        name: "Passwordless Login",
        image: HomePageAssets.Guides.Passwordless,
        backgroundColor: "linear-gradient(99.33deg, #FFAD62 1.76%, #FF6594 67.98%)"
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
                            <div key={loginMethod.name}>
                                <Image {...loginMethod.image} alt={loginMethod.name} />
                                <h6
                                    style={{
                                        background: loginMethod.backgroundColor,
                                        backgroundClip: "text",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    }}
                                >
                                    {loginMethod.name}
                                </h6>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
