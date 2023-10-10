import styles from "../../styles/pricing/feature.module.css";
import openSourceCheck from "../../assets/pricing/open-source-check.png";
import auth from "../../assets/pricing/auth.png";
import everything from "../../assets/pricing/everything.png";
import support from "../../assets/pricing/support.png";

import { Expandable } from "./pricingTableUtils";
import { navigateOnButtonClick } from "../common/utils";
import { CoreFeatureToggle } from "./core-toggle";

const coreFeatures = [
    {
        type: "section",
        data: {
            icon: auth,
            text: "Authentication",
            number: "5"
        }
    },

    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        expandedByDefault: false,
        data: {
            mainText: "Email Password"
        }
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        data: {
            mainText: "Social Login / SSO providers (Google, Github, Facebook, and all custom providers)",
            links: [
                {
                    text: "SSO providers",
                    href: "/features/single-sign-on"
                }
            ]
        }
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        data: {
            mainText: "Passwordless Magic links",
            links: [
                {
                    text: "Passwordless Magic links",
                    href: "/features/email-magic-links"
                }
            ]
        }
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        data: {
            mainText: "Passwordless SMS / Email OTP"
        }
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        data: {
            mainText: "Username and password"
        }
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        data: {
            mainText: "Phone number and password"
        }
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        data: {
            mainText: "Email Verification, forgot password flows"
        }
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        data: {
            mainText: "M2M authentication"
        }
    },
    {
        type: "section",
        data: {
            icon: everything,
            text: "Everything Else",
            number: "6"
        }
    },
    {
        type: "feature",
        expandable: true,
        comingSoon: false,
        data: {
            mainText: "Sign up / Sign in Page UI",
            subList: [
                "Natively hosted on your domain",
                "Pre built UI (react only)",
                "Easily use your own UI (for any framework)",
                "Pre built UI with your customizations"
            ]
        }
    },
    {
        type: "feature",
        expandable: true,
        comingSoon: false,
        data: {
            mainText: "RBAC",
            subList: [
                "Protect frontend and backend routes based on required roles and permissions",
                "Add multiple roles to each user",
                "Add multiple permissions to each role"
            ]
        }
    },
    {
        type: "feature",
        expandable: true,
        comingSoon: false,
        data: {
            mainText: "User Management Dashboard",
            subList: [
                "Delete users",
                "Revoke all sessions",
                "Edit user information (email, password, Name, custom fields)",
                "Filter by each organisation",
                {
                    text: "Included seats",
                    tooltip: "First 3 seats are Free."
                },
            ]
        }
    },
    {
        type: "feature",
        expandable: true,
        comingSoon: false,
        data: {
            mainText: "Session Management",
            subList: [
                "All session features (Create, verify, refresh & revoke sessions)",
                "Optimal performance - session verifications < 1 MS",
                "Detect session theft through rotating refresh tokens",
                "In built CSRF and XSS protection",
                "Automatic rotation of JWT signing keys (without user logouts)",
                "Securely read session data on the frontend",
                "Use with headers or httponly cookies",
                "Customisable expiry time",
                "Add session claims",
                "Limit number of devices per user ID",
                "JWT Support"
            ]
        }
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        data: {
            mainText: "Overrides (hooks and custom actions)"
        }
    },

    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        data: {
            mainText: "Compliance (SOC2)"
        }
    },

    {
        type: "section",
        data: {
            icon: support,
            text: "Support",
            number: "3"
        }
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        data: {
            mainText: "Community support"
        }
    }
];

const navigateToGuides = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigateOnButtonClick("/docs/guides", e);
};

export const CoreFeaturesTableBody = () => {
    return (
        <tbody>
            {coreFeatures.map((el, index) => {
                if (el.type === "section") {
                    return (
                        <tr key={index} className={styles.section}>
                            <td className={styles.left_align}>
                                <span className={styles["section-text"]}>{el.data.text}</span>
                            </td>
                            <td />
                        </tr>
                    );
                } else if (el.type === "feature") {
                    return (
                        <tr key={index} className={styles.feature}>
                            <td className={styles.left_align}>
                                <Expandable row={el} expandedByDefault={el.expandedByDefault} />
                            </td>
                            <td>
                                <img src={openSourceCheck.src} alt="check-mark-icon" />
                            </td>
                        </tr>
                    );
                }
            })}
            <tr className={styles.get_started}>
                <td className={styles.left_align}></td>
                <td>
                    <button onClick={navigateToGuides} className={styles.bordered}>
                        Get Started
                    </button>
                </td>
            </tr>
        </tbody>
    );
};

export const CoreFeaturesTableBodyMobile = () => {
    return (
        <div>
            {coreFeatures.map((el, index) => {
                if (el.type === "section") {
                    return (
                        <div key={index} className={styles.mobileSection}>
                            <span className={styles["section-text"]}>{el.data.text}</span>
                        </div>
                    );
                } else if (el.type === "feature") {
                    return (
                        <div key={index} className={styles.mobileFeature}>
                            <Expandable row={el} expandedByDefault={el.expandedByDefault} />
                            <div className={styles.check}>
                                <img src={openSourceCheck.src} alt="check-mark-icon" />
                            </div>
                        </div>
                    );
                }
            })}
            <div className={styles.get_started}>
                <div>
                    <button onClick={navigateToGuides} className={styles.bordered}>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function CoreFeaturesTable() {
    return (
        <>
            <CoreFeatureToggle />
            <div className={styles["table-wrapper"]}>
                <table className={styles.table}>
                    <h1>Core Features</h1>
                    <CoreFeaturesTableBody />
                </table>
                <div className={styles.mobileTable}>
                    <h1>Core Features</h1>
                    <CoreFeaturesTableBodyMobile />
                </div>
            </div>
        </>
    );
}
