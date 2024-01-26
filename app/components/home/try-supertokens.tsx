import styles from "../../styles/home/try-supertokens.module.css";
import commonStyles from "../../styles/home/common.module.css";

import Image from "next/image";
import { useState } from "react";
import Lottie from "lottie-react";

import HomePageAssets from "../../assets/images/home";
import Cligif from '../../assets/json/cli-gif.json'

export default function TrySupertokens() {
    const [showTooltip, setShowTooltip] = useState(false);

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText("npx create-supertokens-app@latest");
            setShowTooltip(true);
        } catch (_) {
            //ignore
        } finally {
            setTimeout(() => {
                setShowTooltip(false);
            }, 1500);
        }
    }

    return (
        <section className={`${commonStyles.section} ${styles.section}`}>
            <div className={commonStyles.container}>
                <h1>
                    <span>Try</span> SuperTokens in <br /> under <span>1 Minute</span>
                </h1>
                <p>One Command To Try It All!</p>

                <div>
                    <div className={styles.create_app_wrapper}>
                        <div className={styles.create_app_container}>
                            <span>npx create-supertokens-app@latest</span>
                            <Image
                                onClick={handleCopy}
                                src={HomePageAssets.Hero.CopyIcon.src}
                                height={17}
                                width={17}
                                alt="copy button"
                            />
                        </div>
                        <div style={{ display: showTooltip ? "flex" : "none" }} className={styles.tooltip}>
                            <span>Copied</span>
                            <div className={styles.arrow}></div>
                        </div>
                    </div>
                    <div className={styles.lottie_container}>
                        <Lottie
                            animationData={Cligif}
                            alt="create-supertokens-app cli example gif"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
