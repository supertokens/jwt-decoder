import styles from "../../styles/pricing/core-features-toggle.module.css";

import { Tooltip } from "./pricingTableUtils";
import { usePricingToggleContext } from "../../context/PricingToggleContext";
import { useState } from "react";

export function CoreFeatureToggle() {
    const { activeTab, setActiveTab } = usePricingToggleContext();
    const [isActiveParty, setIsActivePart] = useState<"cloud" | "self-host" | undefined>(undefined);

    return (
        <div className={styles.core__toggler__container}>
            <div className={styles.core__toggler__wrapper}>
                <div
                    onMouseOver={() => setIsActivePart("cloud")}
                    onMouseLeave={() => setIsActivePart(undefined)}
                    className={`${
                        activeTab === "cloud"
                            ? styles.active
                            : isActiveParty === "cloud"
                            ? styles.opacity_100
                            : styles.opacity_60
                    }`}
                    onClick={() => setActiveTab("cloud")}
                >
                    Cloud
                </div>
                <div
                    onMouseOver={() => setIsActivePart("self-host")}
                    onMouseLeave={() => setIsActivePart(undefined)}
                    className={`${
                        activeTab === "self-host"
                            ? styles.active
                            : isActiveParty === "self-host"
                            ? styles.opacity_100
                            : styles.opacity_60
                    }`}
                    onClick={() => setActiveTab("self-host")}
                >
                    Self-hosted
                </div>
            </div>
            <div className={styles.explanation__container}>
                <div
                    onMouseOver={() => setIsActivePart("cloud")}
                    onMouseLeave={() => setIsActivePart(undefined)}
                    className={`${styles.cloud} ${
                        activeTab === "cloud"
                            ? styles.active
                            : isActiveParty === "cloud"
                            ? styles.opacity_100
                            : styles.opacity_60
                    }`}
                >
                    <span>
                        $0.02 per MAU{" "}
                        <Tooltip
                            text="Measured based on number of sessions refreshed and number of unique logins."
                            position="bottom"
                        />
                    </span>
                    <span>(Free under 5K monthly active users) </span>
                </div>
                <div
                    onMouseOver={() => setIsActivePart("self-host")}
                    onMouseLeave={() => setIsActivePart(undefined)}
                    className={`${styles.self__host}  ${
                        activeTab === "self-host"
                            ? ""
                            : isActiveParty === "self-host"
                            ? styles.opacity_100
                            : styles.opacity_60
                    } `}
                >
                    <span>Free and open source</span>
                    <span>(No free MAUs count limit)</span>
                </div>
            </div>
        </div>
    );
}
