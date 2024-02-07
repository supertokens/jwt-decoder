import { useState } from "react";
import commonStyles from "../../../styles/product/common.module.css";
import styles from "../../../styles/product/user-management.module.css";

import Image from "next/image";
import { ProductPageAssets } from "../../../assets/images/product";
import { getAnalytics } from "../../../pages";

const userManagementData = [
    {
        title: "Dashboard",
        content:
            "View and manage all your users. Reset passwords, send email verification links, revoke sessions, modify user roles, view session metadata and more.",
        imageUrl: ProductPageAssets.UserManagement.Dashboard.src,
        redirectionLink: "/docs/userdashboard/about",
        handleClick: function() {
            getAnalytics().then((stAnalytics: any) => {
                stAnalytics.sendEvent("button_click_dashboard_learn_more", {}, "v6");
            });
        }
    },
    {
        title: "Account Linking",
        content:
            "Enable users to associate multiple authentication methods with the same user account. For example, a user can link their password-based account and their Google account to the same user account in the application.",
        imageUrl: ProductPageAssets.UserManagement.AccountLinking.src,
        redirectionLink: "/features/account-linking",
        handleClick: function() {
            getAnalytics().then((stAnalytics: any) => {
                stAnalytics.sendEvent("button_click_account_linking_learn_more", {}, "v6");
            });
        }
    },
    {
        title: "RBAC",
        content:
            "Assign users roles and individual permissions via code or through our UI. this can help you control the access and functionality of your app for different user groups.",
        imageUrl: ProductPageAssets.UserManagement.RBAC.src,
        redirectionLink: "/docs/userroles/introduction",
        handleClick: function() {
            getAnalytics().then((stAnalytics: any) => {
                stAnalytics.sendEvent("button_click_rbac_learn_more", {}, "v6");
            });
        }
    }
];

export default function UserManagement() {
    const [selectedOption, setSelectedOption] = useState(userManagementData[0]);

    return (
        <section id="user_management" className={commonStyles.section_container}>
            <h1 className={commonStyles.product_title}>User Management</h1>
            <nav className={styles.navigation_container}>
                <ul>
                    {userManagementData.map(item => {
                        const isSelected = item.title === selectedOption.title;
                        return (
                            <li
                                className={`${isSelected ? styles.selected_element : ""}`}
                                onClick={() => setSelectedOption(item)}
                                key={item.title}
                            >
                                {item.title}
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <div className={styles.content_container}>
                <div>
                    <h3>{selectedOption.title}</h3>
                    <p>{selectedOption.content}</p>
                    <a onClick={selectedOption.handleClick} href={selectedOption.redirectionLink} target="_blank">
                        <button>Learn more</button>
                    </a>
                </div>
                <div>
                    {userManagementData.map(item => {
                        return (
                            <Image
                                style={{
                                    display: selectedOption.title === item.title ? "inline-block" : "none"
                                }}
                                priority
                                key={item.title}
                                src={item.imageUrl}
                                alt={item.title}
                            />
                        );
                    })}
                </div>
            </div>
            <div className={commonStyles.divider}></div>
            <div className={commonStyles.divider_hue}></div>
        </section>
    );
}
