import styles from "../../styles/pricing/paid-features-toggle.module.css";

import selfhost_white from "../../assets/pricing/self-host-white.svg";
import selfhost_gray from "../../assets/pricing/self-host-gray.svg";
import cloud_white from "../../assets/pricing/cloud-white.svg";
import cloud_gray from "../../assets/pricing/cloud-gray.svg";
import { usePricingToggleContext } from "../../context/PricingToggleContext";

export function PaidFeaturesToggle() {
    const { activeTab, setActiveTab } = usePricingToggleContext();
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
        <div className={`${styles.toggler__container}`}>
            <div
                className={`${styles.toggle__item__container} ${
                    activeTab === "cloud" ? styles.toggler__item__active : styles.opacity_60
                }`}
                onClick={() => setActiveTab("cloud")}
            >
                <img src={getImage().cloud} alt="icon" />
                <div>
                    Cloud <span>(We host)</span>
                </div>
            </div>
            <div
                className={`${styles.toggle__item__container} ${
                    activeTab === "self-host" ? styles.toggler__item__active : styles.opacity_60
                }`}
                onClick={() => setActiveTab("self-host")}
            >
                <img src={getImage().self_host} alt="icon" />
                <div>
                    Self-hosted <span>(You Host)</span>
                </div>
            </div>
        </div>
    );
}
