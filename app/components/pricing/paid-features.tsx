import { useEffect, useState } from "react";

import { Expandable } from "./pricingTableUtils";
import { PaidFeaturesToggle, ServiceType } from "./paid-features-toggle";
import MultiTenancyDialog from "./dialog/multitenancyDialog";
import PricingDialogContainer from "./dialog/pricingDialogContainer";

import alertCircle from "../../assets/pricing/alert-circle.svg";

import styles from "../../styles/pricing/feature.module.css";
import paidfeaturesStyles from "../../styles/pricing/paid-features.module.css";

const pricingTooltipConfig = {
    "accountlinking-cloud": [
        "if you have 1 - 4,999 MAUs, that will be $100 / month.",
        "f you have 5,000 MAUs, that will be ( $0.02 + $0.005 ) * 5000 = $125 / month",
        "if you have 7,000 MAUs, that will be ( $0.02 + $0.005 ) * 7000 = $175 / month"
    ],
    "accountlinking-self-hosted": [
        "if you have 1 - 10,000 MAUs, that will be $100 / month.",
        "if you have 10,001 MAUs, that will be ( $0.01 * 10,001 ) = $100.01 / month",
        "if you have 15,000 MAUs, that will be ( $0.01 * 15,000 ) = $150 / month"
    ]
};

const paidFeaturesCloud = [
    {
        type: "feature",
        expandable: true,
        scale: "$0.005 / MAU",
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
        comingSoon: false,
        scale: "$0.005 / MAU",
        tooltip: "accountlinking-cloud",
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

const paidFeaturesSelfHosted = [
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
        comingSoon: false,
        scale: "$0.01 / MAU",
        tooltip: "accountlinking-self-hosted",

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

type PricingTooltipProps = {
    configKey: string;
};

function PricingTooltip({ configKey }: PricingTooltipProps) {
    return (
        <div className={`${paidfeaturesStyles.pricing__tooltip} `}>
            <img src={alertCircle.src} alt="alert-circle-icon" />
            <div className={paidfeaturesStyles.pricing__tooltip__content}>
                <div className={paidfeaturesStyles.pricing__tooltip__content__container}>
                    <span>Pricing Example</span>
                    <ul>
                        {pricingTooltipConfig[configKey].map((example, index) => {
                            const content = example.split("that will be");

                            if (content.length === 0) {
                                return <li key={index}>{content}</li>;
                            }

                            return (
                                <li key={index}>
                                    {content[0]}
                                    <span>that will be</span>
                                    {content[1]}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

type PaidFeatureTableBodyProps = {
    type: ServiceType;
};

function usePaidFeaturesConfig(type: ServiceType) {
    const [paidFeatures, setPaidFeatures] = useState(paidFeaturesCloud);

    useEffect(() => {
        if (type === "cloud") {
            setPaidFeatures(paidFeaturesCloud);
        }
        if (type === "self-host") {
            setPaidFeatures(paidFeaturesSelfHosted);
        }
    }, [type]);

    return paidFeatures;
}

export function PaidFeaturesTableBody({ type }: PaidFeatureTableBodyProps) {
    const paidFeaturesConfig = usePaidFeaturesConfig(type);

    const [isMultiTenancyDialogOpen, setisMultiTenancyDialogOpen] = useState(false);

    return (
        <tbody>
            {paidFeaturesConfig.map((el, index) => {
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
                                {typeof el.scale === "object" &&
                                    el.scale &&
                                    (el.scale.text === "See pricing" ? (
                                        <button
                                            className={styles.seePricing}
                                            onClick={() => setisMultiTenancyDialogOpen(true)}
                                        >
                                            <span>{el.scale.text}</span>
                                        </button>
                                    ) : null)}
                                {typeof el.scale === "string" && el.scale && (
                                    <>
                                        <span
                                            className={`${styles.scale} ${
                                                el.scale === "Contact us!" ? styles.font__400 : ""
                                            }`}
                                        >
                                            {el.scale}
                                        </span>
                                        {el.tooltip ? <PricingTooltip configKey={el.tooltip} /> : null}
                                    </>
                                )}
                            </td>
                        </tr>
                    );
                }
            })}
            <tr className={paidfeaturesStyles.paid__feature__note}>
                <td className={styles.left_align}>Note: Paid Add-ons have a $100 / month minimum billing</td>
            </tr>
            <PricingDialogContainer show={isMultiTenancyDialogOpen} onClose={() => setisMultiTenancyDialogOpen(false)}>
                <MultiTenancyDialog />
            </PricingDialogContainer>
        </tbody>
    );
}

export const PaidFeaturesTableMobileBody = ({ type }: PaidFeatureTableBodyProps) => {
    const paidFeaturesConfig = usePaidFeaturesConfig(type);

    const [isMultiTenancyDialogOpen, setisMultiTenancyDialogOpen] = useState(false);

    return (
        <div>
            {paidFeaturesConfig.map((el, index) => {
                if (el.type === "section") {
                    return (
                        <div key={index} className={styles.mobileSection}>
                            <span className={styles["section-text"]}>{el.data.mainText}</span>
                        </div>
                    );
                } else if (el.type === "feature") {
                    return (
                        <div key={index} className={styles.mobileFeature}>
                            <Expandable row={el} expandedByDefault={!el.expandable} />
                            {typeof el.scale === "object" &&
                                el.scale &&
                                (el.scale.text === "See pricing" ? (
                                    <div className={styles.scaleMobile}>
                                        <button
                                            className={styles.seePricing}
                                            onClick={() => setisMultiTenancyDialogOpen(true)}
                                        >
                                            <span>{el.scale.text}</span>
                                        </button>
                                    </div>
                                ) : null)}
                            {typeof el.scale === "string" && el.scale && (
                                <span
                                    className={`${styles.scaleMobile} ${
                                        el.scale === "Contact us!" ? styles.font__400 : ""
                                    }`}
                                >
                                    {el.scale}
                                    {el.tooltip ? <PricingTooltip configKey={el.tooltip} /> : null}
                                </span>
                            )}
                        </div>
                    );
                }
            })}
            <div className={paidfeaturesStyles.paid__feature__note + " " + paidfeaturesStyles.note_mobile}>
                <td className={styles.left_align}>Note: Paid Add-ons have a $100 / month minimum billing</td>
            </div>
            <PricingDialogContainer show={isMultiTenancyDialogOpen} onClose={() => setisMultiTenancyDialogOpen(false)}>
                <MultiTenancyDialog />
            </PricingDialogContainer>
        </div>
    );
};

export default function PaidFeaturesTable() {
    const [serviceType, setServiceType] = useState<ServiceType>("cloud");

    return (
        <div className={styles["table-wrapper"]}>
            <div className={paidfeaturesStyles.paid__features__container}>
                <div>
                    <h1>Paid features / Add-on</h1>
                    <span>(Pay additionally as per feature use)</span>
                </div>
                <PaidFeaturesToggle setServiceType={setServiceType} serviceType={serviceType} />
            </div>
            <table className={styles.table}>
                <PaidFeaturesTableBody type={serviceType} />
            </table>
            <div className={styles.mobileTable}>
                <PaidFeaturesTableMobileBody type={serviceType} />
            </div>
        </div>
    );
}
