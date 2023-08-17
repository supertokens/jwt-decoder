import Image from "next/image";

import styles from "../../styles/pricing/pricingDialog.module.css";
import { CrossIcon } from "../../assets/images";
import { useState } from "react";

type PricingDialogProps = {
    onClose: () => void;
    show: boolean;
};

const pricing = {
    multitenancy: [
        {
            text: "0-3 users",
            subText: "Free for 25 orgs. $2 / org after that"
        },
        {
            text: "3-10 users",
            subText: "$5 / tenant / month"
        },
        {
            text: "10+ users",
            subText: "$10 / tenant / month"
        },
        {
            text: "Enterprise SSO",
            subText: "$50 / tenant / month"
        },
        {
            text: "New app",
            subText: "$50 / month"
        }
    ]
};


export default function PricingDialog({ onClose, show }: PricingDialogProps) {
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
                        <h1 className={styles.dialog__heading}>Multitenancy</h1>
                        <div className={styles.pricing__card__container}>
                            <div className={styles.pricing__card__wrapper}>
                                <div className={styles.pricing__card}>
                                    {pricing.multitenancy.map(price => {
                                        return (
                                            <div className={styles.pill__cards}>
                                                <span className={styles.orange__pill}>{price.text}</span>
                                                <span className={styles.sub__text}>{price.subText}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className={styles.underline} />
                                <span className={styles.gray__pill}>Pricing Example</span>
                                <p className={styles.sub__text}>
                                    Sorem ipsum dolor <span className={styles.orange}>3-10 users</span>, consectetur{" "}
                                    <span className={styles.orange}>Enterprise SSO</span> elit. Nunc vulputate libero et
                                    velit interdum, ac aliquet odio mattis{" "}
                                    <span className={styles.orange}>New app</span>.
                                </p>
                                <p>
                                    Sorem ipsum dolor sit amet, <span className={styles.orange}>$105 / month</span>{" "}
                                    consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                        <h1 className={styles.dialog__heading}>Dashboard Users</h1>
                        <div className={styles.pricing__card__container}>
                            <div className={styles.pricing__card__wrapper}>
                                <p className={styles.sub__text}>
                                    Sorem ipsum dolor <span className={styles.orange}>3-10 users</span>, consectetur{" "}
                                    <span className={styles.orange}>Enterprise SSO</span> elit. Nunc vulputate libero et
                                    velit interdum, ac aliquet odio mattis{" "}
                                    <span className={styles.orange}>New app</span>.
                                </p>
                                <p>
                                    Sorem ipsum dolor sit amet, <span className={styles.orange}>$105 / month</span>{" "}
                                    consectetur adipiscing elit.
                                </p>
                                <div className={`${styles.pill__cards} ${styles.stack}`}>
                                    <span className={styles.orange__pill}>Pricing</span>
                                    <span className={styles.sub__text}>$20 / month / user</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
