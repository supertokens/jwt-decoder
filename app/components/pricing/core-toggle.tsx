import styles from "../../styles/pricing/core-features-toggle.module.css";

import { Tooltip } from "./pricingTableUtils";
import { usePricingToggleContext } from "../../context/PricingToggleContext";
import { useState } from "react";

export function CoreFeatureToggle() {
    const { activeTab, setActiveTab } = usePricingToggleContext();
    const [isHovered, setIsHovered] = useState<"cloud" | "self-host" | undefined>(undefined);

    return (
        <div className={styles.core__toggler__container}>
            <div className={styles.core__toggler__wrapper}>
                <div
                    onMouseOver={() => setIsHovered("cloud")}
                    onMouseLeave={() => setIsHovered(undefined)}
                    className={`${
                        activeTab === "cloud"
                            ? styles.active
                            : isHovered === "cloud"
                            ? styles.opacity_100
                            : styles.opacity_60
                    }`}
                    onClick={() => setActiveTab("cloud")}
                >
                    Cloud
                    {isHovered === "cloud" ? (
                        <CoreTooltip arrowPosition="left" position={{ left: "-10rem" }}>
                            We Host
                        </CoreTooltip>
                    ) : null}
                </div>
                <div
                    onMouseOver={() => setIsHovered("self-host")}
                    onMouseLeave={() => setIsHovered(undefined)}
                    className={`${
                        activeTab === "self-host"
                            ? styles.active
                            : isHovered === "self-host"
                            ? styles.opacity_100
                            : styles.opacity_60
                    }`}
                    onClick={() => setActiveTab("self-host")}
                >
                    Self-hosted
                    {isHovered === "self-host" ? (
                        <CoreTooltip position={{ right: "-10rem" }}>You Host</CoreTooltip>
                    ) : null}
                </div>
            </div>
            <div className={styles.explanation__container}>
                <div
                    onMouseOver={() => setIsHovered("cloud")}
                    onMouseLeave={() => setIsHovered(undefined)}
                    className={`${styles.cloud} ${
                        activeTab === "cloud"
                            ? styles.active
                            : isHovered === "cloud"
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
                    onMouseOver={() => setIsHovered("self-host")}
                    onMouseLeave={() => setIsHovered(undefined)}
                    className={`${styles.self__host}  ${
                        activeTab === "self-host"
                            ? ""
                            : isHovered === "self-host"
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

function CoreTooltip({
    children,
    position,
    arrowPosition
}: {
    children: React.ReactNode;
    position: Partial<{
        left: string;
        right: string;
        top: string;
        bottom: string;
    }>;
    arrowPosition?: "right" | "left";
}) {
    function getArrowPostion() {
        if (arrowPosition === "left") {
            return styles.left;
        }

        return styles.right;
    }
    return (
        <div className={styles.core__toggle__tooltip__container} style={{ ...position }}>
            <div className={styles.core__toggle__tooltip}>
                <div className={`${styles.arrow} ${getArrowPostion()}`}></div>
                {children}
            </div>
        </div>
    );
}
