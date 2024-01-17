import { ProductPageAssets } from "../../../assets/images/product";
import commonStyles from "../../../styles/product/common.module.css";
import styles from "../../../styles/product/extensibility.module.css";

import Image from "next/image";

const examples = [
    {
        id: "Invite flow",
        imageUrl: ProductPageAssets.Extensibility.InviteFlow.src,
        content: "implement an invite flow."
    },
    {
        id: "Deduplication",
        imageUrl: ProductPageAssets.Extensibility.Deduplication.src,
        content: "Implement account deduplication."
    },
    {
        id: "API Callbacks",
        imageUrl: ProductPageAssets.Extensibility.InviteFlow.src,
        content: "Adding post API callbacks."
    },
    {
        id: "Disabling Signup",
        imageUrl: ProductPageAssets.Extensibility.InviteFlow.src,
        content: "Disabling sign up entirely."
    },
    {
        id: "Online/Offline switch",
        imageUrl: ProductPageAssets.Extensibility.InviteFlow.src,
        content: "Updating the online / offline status of a user post successful session verification."
    }
];

export default function Extensibility() {
    return (
        <section className={commonStyles.section_container}>
            <h1 className={commonStyles.product_title}>Extensibility</h1>
            <p className={commonStyles.product_subtitle}>
                Overrides to make SuperTokens work the way you want. You can override:
            </p>
            <div className={styles.code_examples_container}>
                <div className={styles.image_container}>
                    <Image src={ProductPageAssets.Extensibility.BackendAPIs.src} alt="Backend Apis code example." />
                </div>
                <div className={styles.content_container}>
                    <h3>Backend APIs</h3>
                    <p>Such as adding pre / post logic to the sign up API.</p>
                </div>
            </div>
            <div className={styles.code_examples_container}>
                <div className={styles.content_container}>
                    <h3>Frontend Hooks</h3>
                    <p>
                        Change the request (body, headers, URL) sent to your server, handle user events, and control
                        user redirects.
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
                    <button>See full list of overrides</button>
                </div>
                <div className={styles.examples_list_container}>
                    {examples.map(example => {
                        return (
                            <div className={styles.example_card} key={example.id}>
                                <Image src={example.imageUrl} alt={example.id} />
                                <div>
                                    <p>{example.content}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={commonStyles.divider}></div>
            <div className={commonStyles.divider_hue}></div>
        </section>
    );
}
