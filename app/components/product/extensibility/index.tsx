import { useState } from "react";
import { ProductPageAssets } from "../../../assets/images/product";
import commonStyles from "../../../styles/product/common.module.css";
import styles from "../../../styles/product/extensibility.module.css";

import Image from "next/image";

const examples = [
    {
        id: "Invite flow",
        imageUrl: ProductPageAssets.Extensibility.InviteFlow.src,
        content: "Implement an invite flow.",
        url: "/docs/thirdpartyemailpassword/common-customizations/disable-sign-up/overview"
    },
    {
        id: "Deduplication",
        imageUrl: ProductPageAssets.Extensibility.Deduplication.src,
        content: "Implement account deduplication.",
        url: "/docs/thirdpartyemailpassword/common-customizations/deduplication/overview"
    },
    {
        id: "API Callbacks",
        imageUrl: ProductPageAssets.Extensibility.APICallbacks.src,
        content: "Adding post API callbacks.",
        url: "/docs/thirdpartyemailpassword/common-customizations/handling-signinup-success"
    },
    {
        id: "Disabling Signup",
        imageUrl: ProductPageAssets.Extensibility.DisableSignUp.src,
        content: "Fully deactivating the user registration process.",
        url: "/docs/thirdpartyemailpassword/advanced-customizations/apis-override/disabling"
    },
    {
        id: "Online/Offline switch",
        imageUrl: ProductPageAssets.Extensibility.OnlineOfflineSwitch.src,
        content: "Updating the online / offline status of a user post successful session verification.",
        url: undefined
    }
];

export default function Extensibility() {
    const [showTooltip, setShowTooltip] = useState(false);

    // function handleHomeLogoClick() {
    //     if (path !== "home" && pageSelected !== undefined) {
    //         sendButtonAnalytics("button_header_home", "v5", { page_selected: pageSelected });
    //     }
    // }

    return (
        <section className={commonStyles.section_container}>
            <h1 className={commonStyles.product_title}>Extensibility</h1>
            <p className={commonStyles.product_subtitle}>Override SuperTokens to make it work the way you want.</p>
            <div className={styles.code_examples_container}>
                <div className={`${styles.prebuilt_ui_container}`}>
                    <div className={styles.text_container}>
                        <h3>Prebuilt UI</h3>
                        <p>
                            Customize any part of the prebuilt UI so that you do not have to implement custom login
                            forms from scratch.
                        </p>
                    </div>
                    <Image
                        className={styles.dunder_muffin_code_snippet_tab}
                        {...ProductPageAssets.Extensibility.DunderMuffinTab}
                        alt="Dunder muffin login form with overrides example code snippet for tablet"
                    />
                    <Image
                        className={styles.dunder_muffin_code_snippet_web}
                        {...ProductPageAssets.Extensibility.DunderMuffinWeb}
                        alt="Dunder muffin login form with overrides example code snippet for web"
                    />
                </div>
            </div>
            <div className={styles.code_examples_container}>
                <div className={styles.image_container}>
                    <Image src={ProductPageAssets.Extensibility.BackendAPIs.src} alt="Backend Apis code example." />
                </div>
                <div className={styles.content_container}>
                    <h3>Backend APIs</h3>
                    <p>Add pre or post API logic to any auth route (eg: Sign up API).</p>
                </div>
            </div>
            <div className={styles.code_examples_container}>
                <div className={styles.content_container}>
                    <h3>Frontend Hooks</h3>
                    <p>
                        Change the request (body, headers, URL) sent to your server, handle user events, and control
                        user redirects.
                        <span
                            className={styles.tooltip_container}
                            onMouseEnter={() => setShowTooltip(true)}
                            onMouseLeave={() => setShowTooltip(false)}
                        >
                            <svg
                                stroke={showTooltip ? "#fff" : "#777"}
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                            >
                                <path
                                    d="M13.9219 7.46094C13.9219 8.3094 13.7548 9.14955 13.4301 9.93343C13.1054 10.7173 12.6295 11.4296 12.0295 12.0295C11.4296 12.6295 10.7173 13.1054 9.93343 13.4301C9.14955 13.7548 8.3094 13.9219 7.46094 13.9219C6.61248 13.9219 5.77232 13.7548 4.98844 13.4301C4.20457 13.1054 3.49232 12.6295 2.89236 12.0295C2.29241 11.4296 1.8165 10.7173 1.49181 9.93343C1.16712 9.14955 1 8.3094 1 7.46094C1 5.74739 1.6807 4.10403 2.89236 2.89236C4.10403 1.6807 5.74739 1 7.46094 1C9.17448 1 10.8178 1.6807 12.0295 2.89236C13.2412 4.10403 13.9219 5.74739 13.9219 7.46094Z"
                                    stroke="inherit"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M7.45312 4.54688V7.77734M7.45312 10.3617H7.46002V10.3686H7.45312V10.3617Z"
                                    stroke="inherit"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            {showTooltip ? (
                                <div className={styles.tooltip}>
                                    <p>You can use this to add an invite code to our sign up API call.</p>
                                </div>
                            ) : null}
                        </span>
                    </p>
                </div>
                <div className={styles.image_container}>
                    <Image src={ProductPageAssets.Extensibility.FrontendHooks.src} alt="Backend Apis code example." />
                </div>
            </div>

            {/* Examples section */}
            <div>
                <div className={styles.examples_header}>
                    <h5>Examples</h5>
                    <a
                        href="https://supertokens.com/docs/thirdpartyemailpassword/advanced-customizations/overview"
                        target="_blank"
                    >
                        See full list of overrides
                    </a>
                </div>
                <div className={styles.examples_list_container}>
                    {examples.map(example => {
                        if (example.url === undefined) {
                            return (
                                <div className={styles.example_card} key={example.id}>
                                    <Image src={example.imageUrl} alt={example.id} />
                                    <div>
                                        <p>{example.content}</p>
                                    </div>
                                </div>
                            );
                        }
                        return (
                            <a href={example.url} target="_blank" className={styles.example_card} key={example.id}>
                                <Image src={example.imageUrl} alt={example.id} />
                                <div>
                                    <p>{example.content}</p>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
            <div className={commonStyles.divider}></div>
            <div className={commonStyles.divider_hue}></div>
        </section>
    );
}
