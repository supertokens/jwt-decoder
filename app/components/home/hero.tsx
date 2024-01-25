import HomePageAssets from "../../assets/images/home";

import Image from "next/image";

import styles from "../../styles/home/hero.module.css";
import commonStyles from "../../styles/home/common.module.css";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
    const copyIconRef = useRef(null);
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

    useEffect(() => {
        let eventKey = "Ctrl";
        if (navigator) {
            eventKey = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "\u2318" : eventKey;
        }
        const copyButtonTriggerElement = document.getElementById("cmd-btn");

        if (copyButtonTriggerElement) {
            const seperator = eventKey === "\u2318" ? " " : "+";
            copyButtonTriggerElement.innerHTML = eventKey + seperator + "C";
        }
    }, []);

    useEffect(() => {
        if (copyIconRef === undefined || copyIconRef.current === null) {
            return;
        }

        let isIntersecting = false;

        const observer = new IntersectionObserver(([entry]) => {
            isIntersecting = entry.isIntersecting;
        });

        observer.observe(copyIconRef.current);

        function eventHandler(event: KeyboardEvent) {
            const content = window.getSelection().toString();
            if (content.length === 0 && isIntersecting && event.which === 67 && (event.metaKey || event.ctrlKey)) {
                handleCopy();
            }
        }

        document.addEventListener("keydown", eventHandler);

        return () => {
            document.removeEventListener("keydown", eventHandler);
            observer.disconnect();
        };
    }, [copyIconRef]);

    return (
        <section className={commonStyles.section}>
            <div
                className={styles.background_cover_image}
                style={{
                    background: `url(${HomePageAssets.Hero.LandingBG.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
            />
            <nav className={styles.banner}>
                <p>
                    Learn more about our{" "}
                    <a href="/features/multi-tenancy" target="_blank">
                        Multi-tenancy feature
                    </a>{" "}
                    for your B2B app.
                </p>
            </nav>
            <div className={commonStyles.container}>
                <a
                    href="https://github.com/supertokens/supertokens-core"
                    target="_blank"
                    className={styles.github_star_container}
                >
                    Star Us on Github{" "}
                    <Image src={HomePageAssets.Hero.StarIcon.src} alt="star icon" height={16} width={16} />
                </a>
                <h1 className={styles.title}>
                    Open Source <br />
                    User <span>Authentication</span>
                </h1>
                <h4 className={styles.subtitle}>Build fast. Maintain control. Reasonably priced.</h4>
                <div className={styles.cli_container}>
                    <p className={`${styles.orange_text} ${styles.hidden_md}`}>
                        👇 Run in your terminal to explore SuperTokens <br /> (in under 60 seconds)
                    </p>
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
                    <p className={`${styles.orange_text} ${styles.hidden_lg}`}>
                        ☝️ Run in your terminal to explore SuperTokens <br /> (in under 60 seconds)
                    </p>
                    <div aria-label="press cmd + c to copy" className={`${styles.cmd_container} ${styles.hidden_md}`}>
                        <span>Press</span>
                        <span ref={copyIconRef} id="cmd-btn" className={styles.cmd_btn}></span>
                        <span>to copy</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
