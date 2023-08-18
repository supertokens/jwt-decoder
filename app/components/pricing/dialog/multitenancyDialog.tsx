import { useCallback } from "react";

import styles from "../../../styles/pricing/pricingDialog.module.css";


const multitenancyPricingConfig = [
    {
        heading: "Email password, Social, Passwordless login",
        pricing: [
            {
                mainText: {
                    content: "0-3 users /  tenant",
                    color: "gray"
                },
                subText: {
                    content: "Free for 25 tenants, $2 / tenant / user after that",
                    highlight: ["$2"]
                }
            },
            {
                mainText: {
                    content: "3-10 users /  tenant",
                    color: "gray"
                },
                subText: {
                    content: "$5 / tenant / month",
                    highlight: ["$5"]
                }
            },
            {
                mainText: {
                    content: "10+ users / tenant",
                    color: "gray"
                },
                subText: {
                    content: "$10 / tenant / month",
                    highlight: ["$10"]
                }
            }
        ]
    },
    {
        pricing: [
            {
                mainText: {
                    content: "Enterprise SSO",
                    color: "orange"
                },
                subText: {
                    content: "$50 / tenant / month",
                    highlight: ["$50"]
                }
            }
        ]
    },
    {
        pricing: [
            {
                mainText: {
                    content: "Additional App/Env.",
                    color: "orange"
                },
                subText: {
                    content: "$50 / app / month",
                    highlight: ["$50"]
                }
            }
        ]
    }
];

export default function MultiTenancyDialog() {
    const highlightText = useCallback((completeText: string, stringsToHighlight: Array<string>) => {
        let returnableJSX: JSX.Element;
        stringsToHighlight.map(text => {
            const spiltedStr = completeText.split(text);
            returnableJSX = (
                <span className={styles.sub__text}>
                    {spiltedStr[0]} <b>{text}</b> {spiltedStr[1]}
                </span>
            );
        });

        return returnableJSX;
    }, []);

    return (
        <>
            <h1 className={styles.dialog__heading}>Multitenancy</h1>
            {multitenancyPricingConfig.map(feature => {
                return (
                    <div className={styles.pricing__card__container}>
                        <div className={styles.pricing__card__wrapper}>
                            {feature.heading ? (
                                <div className={styles.orange__pill + " " + styles.mb12}>{feature.heading}</div>
                            ) : null}
                            <div className={styles.pricing__card}>
                                {feature.pricing.map(price => (
                                    <div className={styles.pill__cards}>
                                        <span className={styles[`${price.mainText.color}__pill`]}>
                                            {price.mainText.content}
                                        </span>
                                        {highlightText(price.subText.content, price.subText.highlight)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className={styles.underline} />
            <span className={styles.gray__pill}>Pricing Example</span>
            <ul>
                <li>
                    2 tenants with email password in one, and social login in another, each tenant has 2 users: $0 /
                    month (falls under free 25 tenants)
                </li>
                <li>
                    2 tenants with email password in one (2 users), and social login in another (5 users): $5 / month
                </li>
                <li>2 tenants with SAML login in both, with zero users: $100 / month</li>
                <li>26 tenants with email password in all (1 user in each tenant): $2 / month (first 25 are free)</li>
                <li>
                    27 tenants with email password in all (1 user in the first 26 tenants, and 5 users in the 27th one):
                    $7 / month (first 25 are free)
                </li>
            </ul>
        </>
    );
}
