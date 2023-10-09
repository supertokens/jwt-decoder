import styles from "../../styles/pricing/paid-features-toggle.module.css";

import selfhost_white from "../../assets/pricing/self-host-white.svg";
import selfhost_gray from "../../assets/pricing/self-host-gray.svg";
import cloud_white from "../../assets/pricing/cloud-white.svg";
import cloud_gray from "../../assets/pricing/cloud-gray.svg";

export type ServiceType = "cloud" | "self-host";

type PaidFeatureToggleProps = {
    setServiceType: (type: ServiceType) => void;
    serviceType: ServiceType;
};

export function PaidFeaturesToggle({ serviceType, setServiceType }: PaidFeatureToggleProps) {
    function getImage() {
        let self_host = selfhost_gray.src;
        let cloud = cloud_white.src;

        if (serviceType === "cloud") {
            return {
                self_host,
                cloud
            };
        }

        if (serviceType === "self-host") {
            return {
                cloud: cloud_gray.src,
                self_host: selfhost_white.src
            };
        }
    }

    return (
        <div className={`${styles.toggler__container}`}>
            <div
                className={`${styles.toggler__item__wrapper} ${
                    serviceType === "self-host" ? styles.move__right : ""
                }`}
            ></div>
            <div
                className={`${styles.toggle__item__container} ${serviceType !== "cloud" ? styles.opacity_60 : ""}`}
                onClick={() => setServiceType("cloud")}
            >
                <img src={getImage().cloud} alt="icon" />
                <div>
                    Cloud <span>(We host)</span>
                </div>
            </div>
            <div
                className={`${styles.toggle__item__container} ${serviceType !== "self-host" ? styles.opacity_60 : ""}`}
                onClick={() => setServiceType("self-host")}
            >
                <img src={getImage().self_host} alt="icon" />
                <div>
                    Self-hosted <span>(You Host)</span>
                </div>
            </div>
        </div>
    );
}
