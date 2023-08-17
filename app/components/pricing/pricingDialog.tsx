import { ReactNode, useCallback, useState } from "react";
import Image from "next/image";

import styles from "../../styles/pricing/pricingDialog.module.css";
import { CrossIcon } from "../../assets/images";

type PricingDialogProps = {
    onClose: () => void;
    show: boolean;
    children: ReactNode;
};

export function PricingDialogContainer(props: PricingDialogProps) {
    const { children, onClose, show } = props;

    const [aboutToClose, setAboutToClose] = useState(false);

    function closeDialog() {
        setAboutToClose(true);
        setTimeout(() => {
            onClose();
            setAboutToClose(false);
        }, 400);
    }

    return (
        <>
            {show ? (
                <div
                    className={`${styles.pricing__dialog__container} ${styles.animate__mount} ${
                        aboutToClose ? styles.animate__unmount : ""
                    }`}
                >
                    <div className={styles.pricing__dialog}>
                        <span className={styles.close__dialog} onClick={closeDialog}>
                            <Image src={CrossIcon} alt="close" height={10} width={10} />
                        </span>
                        {children}
                    </div>
                </div>
            ) : null}
        </>
    );
}

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
                    content: "$50 / month",
                    highlight: ["$50"]
                }
            }
        ]
    }
];

export function MultiTenancyDialogContent() {
    
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
                    For <span className={styles.orange}>Email password, Social and passwordless login</span> pricing
                    depends on number of users per tenant, so if one tenant has{" "}
                    <span className={styles.orange}>3-10 users</span> and other has{" "}
                    <span className={styles.orange}>10+</span>, total combined pricing will be{" "}
                    <span className={styles.orange}>$15 / month.</span>
                </li>
                <li>Adding Enterprise SSO for particular tenant will cost $50 / tenant / month.</li>
                <li>
                    Sorem ipsum dolor sit amet, <span className={styles.orange}>$105 / month</span> consectetur
                    adipiscing elit.
                </li>
            </ul>
        </>
    );
}

export function DashboardDialogContent() {
    return (
        <>
            <h1 className={styles.dialog__heading}>Dashboard</h1>
            <div className={styles.pricing__card__container}>
                <div className={styles.pricing__card__wrapper}>
                    <p className={styles.sub__text}>
                        Sorem ipsum dolor 3-10 users, consectetur Enterprise SSO elit. Nunc vulputate libero et velit
                        interdum, ac aliquet odio mattis New app.
                    </p>
                    <p>Sorem ipsum dolor sit amet, $105 / month consectetur adipiscing elit.</p>
                    <div className={`${styles.pill__cards}`}>
                        <span className={styles.orange__pill}>Pricing</span>
                        <span className={styles.sub__text}>$20 / month / user</span>
                    </div>
                </div>
            </div>
        </>
    );
}
