import styles from "../../styles/pricing/toggle.module.css";

import selfhost_white from "../../assets/pricing/self-host-white.svg";
import selfhost_gray from "../../assets/pricing/self-host-gray.svg";
import cloud_white from "../../assets/pricing/cloud-white.svg";
import cloud_gray from "../../assets/pricing/cloud-gray.svg";
import { useState } from "react";
import { Tooltip } from "./pricingTable";

export function CoreFeatureToggle() {
    const [activeTab, setActiveTab] = useState<"cloud" | "self-host">("cloud");

    function getImage() {
        let self_host = selfhost_gray.src;
        let cloud = cloud_white.src;

        if (activeTab === "cloud") {
            return {
                self_host,
                cloud
            };
        }

        if (activeTab === "self-host") {
            return {
                cloud: cloud_gray.src,
                self_host: selfhost_white.src
            };
        }
    }

    return (
        <div className={styles.toggler__container__wrapper}>
            <div className={styles.toggler__container}>
                <div
                    className={`${styles.toggler__item__wrapper} ${
                        activeTab === "self-host" ? styles.move__right : ""
                    }`}
                ></div>
                <Tooltip
                    text="Measured based on number of sessions refreshed and number of unique logins."
                    position="bottom"
                    className={styles.tooltip}
                    imageClass={activeTab !== "cloud" ? styles.opacity_60 : ""}
                />
                <div
                    className={`${styles.toggle__item__container} ${styles.left__corners} ${
                        activeTab !== "cloud" ? styles.opacity_60 : ""
                    }`}
                    onClick={() => setActiveTab("cloud")}
                >
                    <div className={`${styles.toggler__item__gray} ${styles.left__top__corners}`}>
                        <img src={getImage().cloud} alt="icon" />
                        <div>
                            Cloud <span>(We host)</span>
                        </div>
                    </div>
                    <div className={styles.toggler__item__dark}>
                        <span>$0.02 per MAU </span>
                        <span className={styles.text__orange}>(Free under 5K MAU)</span>
                    </div>
                </div>
                <div
                    className={`${styles.toggle__item__container} ${styles.right__corners} ${
                        activeTab !== "self-host" ? styles.opacity_60 : ""
                    }`}
                    onClick={() => setActiveTab("self-host")}
                >
                    <div className={`${styles.toggler__item__gray} ${styles.right__top__corners}`}>
                        <img src={getImage().self_host} alt="icon" />
                        <div>
                            Self-hosted <span>(You Host)</span>
                        </div>
                    </div>
                    <div className={styles.toggler__item__dark}>
                        <span>Free Forever</span>
                    </div>
                </div>
            </div>
        </div>
    );
}


export function PaidFeaturesToggle(){
    const [activeTab, setActiveTab] = useState<"cloud" | "self-host">("cloud");

    function getImage() {
        let self_host = selfhost_gray.src;
        let cloud = cloud_white.src;

        if (activeTab === "cloud") {
            return {
                self_host,
                cloud
            };
        }

        if (activeTab === "self-host") {
            return {
                cloud: cloud_gray.src,
                self_host: selfhost_white.src
            };
        }
    }

    return (
        <div className={styles.toggler__container__wrapper}>
            <div className={styles.toggler__container}>
                <div
                    className={`${styles.toggler__item__wrapper} ${
                        activeTab === "self-host" ? styles.move__right : ""
                    }`}
                ></div>
                <div
                    className={`${styles.toggle__item__container} ${styles.left__corners} ${
                        activeTab !== "cloud" ? styles.opacity_60 : ""
                    }`}
                    onClick={() => setActiveTab("cloud")}
                >
                    <div className={`${styles.toggler__item__dark} ${styles.left__top__corners}`}>
                        <img src={getImage().cloud} alt="icon" />
                        <div>
                            Cloud <span>(We host)</span>
                        </div>
                    </div>
                </div>
                <div
                    className={`${styles.toggle__item__container} ${styles.right__corners} ${
                        activeTab !== "self-host" ? styles.opacity_60 : ""
                    }`}
                    onClick={() => setActiveTab("self-host")}
                >
                    <div className={`${styles.toggler__item__dark} ${styles.right__top__corners}`}>
                        <img src={getImage().self_host} alt="icon" />
                        <div>
                            Self-hosted <span>(You Host)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}