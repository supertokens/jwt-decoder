import { Expandable } from "./pricingTable";
import { PaidFeaturesToggle } from "./toggle";

import styles from "../../styles/pricing/feature.module.css";
import paidfeaturesStyles from "../../styles/pricing/paid-features.module.css";


const paidFeatures = [
    {
        type: "feature",
        expandable: true,
        scale: "$0.01 / MAU",
        data: {
            mainText: "2FA",
            subList: ["Email", "Phone number", "TOTP (Coming Soon)", "QR code (Coming Soon)", "Biometric (Coming Soon)"]
        }
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        scale: "$20 / user / month ",
        data: {
            mainText: "Number of Dashboard (3 free users)"
        }
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: true,
        scale: "$0.01 / MAU ?",
        data: {
            mainText: "Account Linking"
        }
    },
    {
        type: "feature",
        expandable: true,
        comingSoon: false,
        scale: {
            text: "See pricing",
            dialogType: "multi-tenancy"
        },
        data: {
            mainText: "Multi tenancy and Organisational support",
            links: [
                {
                    text: "Multi tenancy and Organisational support",
                    href: "/features/multi-tenancy"
                }
            ],
            subList: [
                "Unique user pools per tenant",
                {
                    text: "Configure custom login methods per tenant",
                    tooltip: "eg: Okta for tenant1, passwordless for tenant2, Social SSO etc"
                },
                {
                    text: "Configure Enterprise SSO connections (Okta, AD etc) per tenant",
                    links: [
                        {
                            text: "Enterprise SSO connections",
                            href: "/features/single-sign-on"
                        }
                    ]
                },
                "Data isolation on a per tenant level",
                "Sharing a user across tenants",
                "SAML Auth"
            ]
        }
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: true,
        scale: "Contact us!",
        data: {
            mainText: "Single login across multiple domains",
            tooltip: "This only applies to domains that are not sub domains"
        }
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        scale: "Contact us!",
        data: {
            mainText: "Implementation assistance"
        }
    }
];

export function PaidFeaturesTableBody() {
    return (
        <tbody>
            {paidFeatures.map((el, index) => {
                if (el.type === "section") {
                    return (
                        <tr key={index} className={styles.section}>
                            <td className={styles.left_align}>
                                <span className={styles["section-text"]}>{el.data.mainText}</span>
                            </td>
                            <td />
                        </tr>
                    );
                } else if (el.type === "feature") {
                    return (
                        <tr key={index} className={styles.feature}>
                            <td className={styles.left_align}>
                                <Expandable row={el} expandedByDefault={!el.expandable} />
                            </td>
                            <td>
                                {typeof el.scale === 'object' && el.scale && 
                                (el.scale.text === "See pricing"?
                                    <button className={styles.seePricing} ><span>{el.scale.text}</span></button>:
                                null)}
                                {typeof el.scale === "string" && el.scale && <span className={styles.scale}>{el.scale}</span>}
                            </td>
                        </tr>
                    );
                }
            })}
        </tbody>
    );
}

export const PaidFeaturesTableMobileBody = () => {
    return (
        <tbody>
            {paidFeatures.map((el, index) => {
                if (el.type === "section") {
                    return (
                        <tr key={index} className={styles.section}>
                            <td className={styles.left_align}>
                                <span className={styles["section-text"]}>{el.data.mainText}</span>
                            </td>
                            <td />
                        </tr>
                    );
                } else if (el.type === "feature") {
                    return (
                        <tr key={index} className={styles.feature}>
                            <td className={styles.left_align}>
                                <Expandable row={el} expandedByDefault={el.expandable} />
                            </td>
                            <td>
                                {typeof el.scale === "object" &&
                                    el.scale &&
                                    (el.scale.text === "See pricing" ? (
                                        <button className={styles.seePricing}>
                                            <span>{el.scale.text}</span>
                                        </button>
                                    ) : null)}
                                {typeof el.scale === "string" && el.scale && (
                                    <span className={styles.scale}>{el.scale}</span>
                                )}
                            </td>
                        </tr>
                    );
                }
            })}
        </tbody>
    );
};

export default function PaidFeaturesTable() {
    return (
        <div className={styles["table-wrapper"]}>
            <div className={paidfeaturesStyles.paid__features__container}>
                    <div>
                        <h1>Paid features / Add-on</h1>
                        <p>(Pay additionally as per feature use)</p>
                    </div>
                    <div>
                        <PaidFeaturesToggle />
                    </div>
                </div>
            <table className={styles.table}>
                <PaidFeaturesTableBody />
            </table>
            <div className={styles.mobileTable}>
                <PaidFeaturesTableMobileBody />
            </div>
        </div>
    );
}
