import styles from "../../styles/pricing/feature.module.css";
import tooltipIcon from "../../assets/pricing/tooltip-icon.png";
import dropIcon from "../../assets/pricing/drop-icon.png";
import openSourceCheck from "../../assets/pricing/open-source-check.png";
import scaleCheck from "../../assets/pricing/scale-check.png";

import {useState} from "react";


const Tooltip = ({position, text}) => {
    return <div className={styles.tooltip}>
        <img src={tooltipIcon.src} alt=""/>
        <div className={styles[position]}>
            <p>
                {text}
            </p>
        </div>
    </div>
}

const Thead = () => {
    return <thead>
    {/*<tr>*/}
    {/*    <td></td>*/}
    {/*    <td>Swipe</td>*/}
    {/*</tr>*/}
    <tr className={styles["main-header"]}>
        <th className={styles.left_align}>
            Features
        </th>
        <th>
            Open Source
        </th>
        <th>
            Scale
        </th>
    </tr>
    <tr className={styles.highlight}>
        <td className={styles.left_align}>
            Self host
        </td>
        <td>
            Free at any scale
        </td>
        <td>
            Custom Pricing
        </td>
    </tr>
    <tr className={styles.highlight}>
        <td className={styles.left_align}>
            Managed Service
        </td>
        <td>
            $0.02 per MAU&nbsp;
            <Tooltip position="left" text="Free for under 5K MAU"/>
        </td>
        <td>
            Custom Pricing
        </td>
    </tr>
    <tr>
        <td></td>
        <td>
            <button className={styles.bordered}>
                Get Started
            </button>
        </td>
        <td>
            <button className={styles['filled-orange']}>
                Get Started
            </button>
        </td>
    </tr>
    </thead>
}

const rows = [
    {
        type: "section",
        data: {
            icon: tooltipIcon,
            text: "Authentication",
            number: "5"
        }
    },
    {
        type: "feature",
        expandable: true,
        comingSoon: false,
        openSource: true,
        scale: true,
        data: {
            mainText: "All auth methods:",
            subList: [
                "Email password",
                "Social Login / SSO providers (Google, Github, Facebook, and all custom providers)",
                "SMS Phone Auth",
                "Passwordless Magic links",
                "Passwordless SMS phone auth",
                "SMS and password",
                "Username and password",
                "Email Verification, forgot password flows"
            ]
        }
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        openSource: false,
        scale: true,
        data: {
            mainText: "SAML Auth"
        }
    }, {
        type: "feature",
        expandable: false,
        comingSoon: true,
        openSource: false,
        scale: true,
        data: {
            mainText: "OAuth 2.0 Provider",
            tooltip: "Multiple domains, with a single login portal"
        }
    }, {
        type: "feature",
        expandable: false,
        comingSoon: true,
        openSource: false,
        scale: true,
        data: {
            mainText: "M2M authentication"
        }
    }, {
        type: "feature",
        expandable: true,
        comingSoon: true,
        openSource: false,
        scale: true,
        data: {
            mainText: "2FA",
            subList: [
                "TOTP",
                "Email",
                "Phone number",
                "QR code",
                "Biometric"
            ]
        }
    }, {
        type: "feature",
        expandable: true,
        comingSoon: false,
        openSource: true,
        scale: true,
        data: {
            mainText: "Sign up / Sign in Page UI",
            subList: [
                "Natively hosted on your domain",
                "Pre built UI (react only)",
                "Easily use your own UI (for any framework)",
                "Pre built UI with your customizations",
            ]
        }
    }, {
        type: "feature",
        expandable: true,
        comingSoon: false,
        openSource: true,
        scale: true,
        data: {
            mainText: "Session Management",
            subList: [
                "All session features (Create, verify, refresh & revoke sessions)",
                "Optimal performance - session verifications < 1 MS",
                "Detect session theft through rotating refresh tokens",
                "In built CSRF and XSS protection",
                "Automatic rotation of JWT signing keys (without user logouts)",
                "Securely read session data on the frontend",
                "Use with headers or httponly cookies",
                "Customisable expiry time",
                "Add session claims",
                "Limit number of devices per user ID",
                {
                    text: "JWT Support",
                    tooltip: "test info here"
                }
            ]
        }
    }, {
        type: "feature",
        expandable: true,
        comingSoon: false,
        openSource: false,
        scale: true,
        data: {
            mainText: "Multi tenancy and Organisational support",
            subList: [
                "Unique user pools per tenant",
                {
                    text: "Configure custom login methods per tenant",
                    tooltip: "eg: Okta for tenant1, passwordless for tenant2, Social SSO etc"
                },
                "Configure Enterprise SSO connections (Okta, AD etc) per tenant",
                "Data isolation on a per tenant level",
                "Sharing a user across tenants",
            ]
        }
    }, {
        type: "feature",
        expandable: true,
        comingSoon: false,
        openSource: true,
        scale: true,
        data: {
            mainText: "RBAC",
            subList: [
                "Protect frontend and backend routes based on required roles and permissions",
                "Add multiple roles to each user",
                "Add multiple permissions to each role",
            ]
        }
    }, {
        type: "feature",
        expandable: true,
        comingSoon: false,
        openSource: true,
        scale: true,
        data: {
            mainText: "User Management Dashboard",
            subList: [
                "Delete users",
                "Revoke all sessions",
                "Edit user information (email, password, Name, custom fields)",
                "Filter by each organisation",
                {
                    text: "Included seats",
                    tooltip: "Open source plan: 3 seats. Scale plan: 10 seats"
                }
            ]
        }
    },
    {
        type: "section",
        data: {
            icon: tooltipIcon,
            text: "Everything Else",
            number: "6"
        }
    }, {
        type: "feature",
        expandable: false,
        comingSoon: false,
        openSource: true,
        scale: true,
        data: {
            mainText: "Overrides",
        }
    }, {
        type: "feature",
        expandable: true,
        comingSoon: false,
        openSource: "Market rate ($10 credit)",
        scale: "Market rate ($10 credit)",
        data: {
            mainText: "SMS and email sending service",
            subList: [
                "Inbuilt or use your own",
                "Customise email and SMS templates",
            ]
        }
    }, {
        type: "feature",
        expandable: false,
        comingSoon: false,
        openSource: false,
        scale: true,
        data: {
            mainText: "SOC2 / GDPR",
        }
    }, {
        type: "feature",
        expandable: false,
        comingSoon: true,
        openSource: false,
        scale: true,
        data: {
            mainText: "User impersonation",
        }
    }, {
        type: "section",
        data: {
            icon: tooltipIcon,
            text: "Support",
            number: "3"
        }
    }, {
        type: "feature",
        expandable: false,
        comingSoon: false,
        openSource: true,
        scale: true,
        data: {
            mainText: "Uptime",
        }
    }, {
        type: "feature",
        expandable: false,
        comingSoon: false,
        openSource: true,
        scale: true,
        data: {
            mainText: "Community support",
        }
    }, {
        type: "feature",
        expandable: false,
        comingSoon: false,
        openSource: "Available as an add on",
        scale: true,
        data: {
            mainText: "Implementation assistance",
        }
    },
]

const Expandable = ({row}) => {
    const [expand, setExpand] = useState(false);
    return <div className={styles.expandable}>
        <div onClick={() => setExpand(!expand)} className={styles.header}>
            <span>{row.data.mainText} {row.data.tooltip && <Tooltip text={row.data.tooltip} position="bottom"/>}</span>
            <div>
                {row.comingSoon && <span className={styles['coming-soon-chip']}>Coming soon</span>}
                {row.expandable && <img src={dropIcon.src}/>}
            </div>
        </div>
        {(row.expandable && expand) && <div className={styles.sublist}>
            <ul>
                {row.data.subList.map((el, index) => <li key={index}>
                    {typeof el === 'object' && <span>{el.text} <Tooltip text={el.tooltip} position="bottom"/> </span>}
                    {typeof el === 'string' && <span>{el}</span>}
                </li>)}
            </ul>
        </div>}
    </div>
}

const TBody = () => {
    return <tbody>
    {rows.map((el, index) => {
        if (el.type === "section") {
            return <tr key={index} className={styles.section}>
                <td className={styles.left_align}>
                    <img src={el.data.icon.src} alt=""/>
                    <span className={styles['section-text']}>{el.data.text}</span>
                    <small>{el.data.number}</small>
                </td>
                <td/>
                <td/>
            </tr>
        } else if (el.type === "feature") {
            return <tr key={index} className={styles.feature}>
                <td className={styles.left_align}>
                    <Expandable row={el}/>
                </td>
                <td>
                    {(typeof el.openSource === 'boolean' && el.openSource) && <img src={openSourceCheck.src} alt=""/>}
                    {typeof el.openSource === 'string' && <span>{el.openSource}</span>}
                </td>
                <td>
                    {(typeof el.scale === 'boolean' && el.scale) && <img src={scaleCheck.src} alt=""/>}
                    {typeof el.scale === 'string' && <span>{el.scale}</span>}
                </td>
            </tr>
        }
    })}
    </tbody>
}

const TFoot = () => {
    return <tfoot>
    <tr>
        <td></td>
        <td>
            <h1>No-Cost</h1>
            <button className={styles.bordered}>Get Started</button>
        </td>
        <td>
            <h1>Pay when you scale</h1>
            <button className={styles['filled-orange']}>Get Started</button>
        </td>
    </tr>
    </tfoot>
}

const MobileTHead = () => {
    return <table className={styles.mobileTHead}>
        <thead>
            <tr>
                <th>Open Source</th>
                <th>Scale</th>
            </tr>
            <tr className={styles.highlight}>
                <td>Self host: Free at any scale</td>
                <td>Custom Pricing</td>
            </tr>
            <tr className={styles.highlight}>
                <td>Managed Service: $0.02 per MAU</td>
                <td>Custom Pricing</td>
            </tr>
            <tr>
                <td>
                    <button className={styles.bordered}>
                        Get Started
                    </button>
                </td>
                <td>
                    <button className={styles['filled-orange']}>
                        Get Started
                    </button>
                </td>
            </tr>
        </thead>
    </table>
}

const MobileTBody = () => {
    return <div>
        {rows.map((el, index) => {
            if (el.type === "section") return <div key={index} className={styles.mobileSection}>
                <img src={el.data.icon.src} alt=""/>{el.data.text} <small>{el.data.number}</small>
            </div>
            else return <div key={index} className={styles.mobileFeature}>
                <Expandable row={el}/>
                <div className={styles.check}>
                    <div>
                        {(typeof el.openSource === 'boolean' && el.openSource) &&
                            <img src={openSourceCheck.src} alt=""/>}
                        {typeof el.openSource === 'string' && <span>{el.openSource}</span>}
                    </div>
                    <div>
                        {(typeof el.scale === 'boolean' && el.scale) && <img src={scaleCheck.src} alt=""/>}
                        {typeof el.scale === 'string' && <span>{el.scale}</span>}
                    </div>
                </div>
            </div>
        })}
    </div>
}

const MobileTFoot = () => {
    return <table className={styles.mobileTFoot}>
        <tfoot>
            <tr>
                <td>
                    <div>
                        <h1>No-Cost</h1>
                        <button className={styles.bordered}>Get Started</button>
                    </div>
                </td>
                <td>
                    <div>
                        <h1>Pay when you scale</h1>
                        <button className={styles['filled-orange']}>Get Started</button>
                    </div>
                </td>
            </tr>
        </tfoot>
    </table>
}

const PricingTable = () => {
    return <div className={styles['table-wrapper']}>
        <table className={styles.table}>
            <Thead/>
            <TBody/>
            <TFoot/>
        </table>
        <div className={styles.mobileTable}>
            <MobileTHead/>
            <h3>Features</h3>
            <MobileTBody/>
            <MobileTFoot />
        </div>
    </div>
}

export default PricingTable;
