import { useState } from "react";
import Image from "next/image";

import styles from "../../../styles/product/auth-methods-chooser.module.css";
import { ProductPageAssets } from "../../../assets/images/product";

const authMethods = [
    {
        method: "Passwordless",
        formImage: ProductPageAssets.Auth.PasswordlessForm.src
    },
    {
        method: "Email Password",
        formImage: ProductPageAssets.Auth.EmailPasswordForm.src
    },
    {
        method: "Social Sign in",
        formImage: ProductPageAssets.Auth.ThirdpartyForm.src
    },
    {
        method: "Enterprise SSO and SAML",
        formImage: ProductPageAssets.Auth.SSOForm.src
    },
    {
        method: "B2B Auth and Multi Tenancy",
        formImage: ProductPageAssets.Auth.MultitenancyForm.src
    },
    {
        method: "Multi factor authentication (MFA)",
        formImage: ProductPageAssets.Auth.MFAForm.src
    }
] as const;

type AuthMethods = typeof authMethods[number];

export default function AuthMethodsChooser() {
    const [selectedAuthMethod, setSelectedAuthMethod] = useState<AuthMethods>(authMethods[0]);

    return (
        <div className={styles.auth_methods_chooser_container}>
            <div className={styles.spot_light}></div>
            <div className={styles.left_container}>
                <div className={styles.timeline}>
                    <div
                        style={{
                            transform: `translateY(${authMethods.indexOf(selectedAuthMethod) * 100}%)`
                        }}
                        className={styles.timeline_hightlight}
                    ></div>
                </div>
                <ul>
                    {authMethods.map(authMethod => {
                        const isSelected = authMethod.method === selectedAuthMethod.method;
                        return (
                            <li
                                key={authMethod.method}
                                className={`${styles.timeline_item} ${isSelected ? styles.timeline_selected : ""}`}
                                onClick={() => setSelectedAuthMethod(authMethod)}
                            >
                                <div className={styles.timeline_pill}>
                                    <div />
                                </div>
                                <span> {authMethod.method}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div
                className={styles.right_container}
                style={{ background: `url(${ProductPageAssets.Auth.FormBg.src})`, backgroundSize: "cover" }}
            >
                <Image src={selectedAuthMethod.formImage} alt="auth form" width={400} />
            </div>
        </div>
    );
}
