import styles from "../../styles/pricing/feature.module.css";
import tooltipIcon from "../../assets/pricing/tooltip-icon.png";
import dropIcon from "../../assets/pricing/drop-icon.png";
import openSourceCheck from "../../assets/pricing/open-source-check.png";
import scaleCheck from "../../assets/pricing/scale-check.png";
import selfHOst  from "../../assets/pricing/self-host.png"
import managed from "../../assets/pricing/managed.png"
import auth from "../../assets/pricing/auth.png";
import everything from "../../assets/pricing/everything.png";
import support from "../../assets/pricing/support.png";

import {useState} from "react";
import { navigateOnButtonClick } from "../common/utils";


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
            <img src={selfHOst.src} alt=""/>
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
            <img src={managed.src} alt=""/>
        </td>
        <td>
            <span>$0.02 per MAU</span><br/>
            <span className={styles.subtext}>Free under 5K MAU</span>
        </td>
        <td>
            Custom Pricing
        </td>
    </tr>
    <tr>
        <td></td>
        <td>
            <button onClick={navigateToGuides} className={styles.bordered}>
                Get Started
            </button>
        </td>
        <td>
            <button onClick={navigateToConsultancy} className={styles['filled-orange']}>
                Contact Us
            </button>
        </td>
    </tr>
    </thead>
}

const rows = [
    {
        type: "section",
        data: {
            icon: auth,
            text: "Authentication",
            number: "5"
        }
    },

    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        openSource: true,
        expandedByDefault: false,
        scale: true,
        data: {
            mainText: "Email Password",
        },
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        openSource: true,
        scale: true,
        data: {
            mainText: "Social Login / SSO providers (Google, Github, Facebook, and all custom providers)",
        },
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        openSource: true,
        scale: true,
        data: {
            mainText: "Passwordless Magic links",
        },
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        openSource: true,
        scale: true,
        data: {
            mainText: "Passwordless SMS OTP",
        },
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        openSource: true,
        scale: true,
        data: {
            mainText: "Username and password",
        },
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        openSource: true,
        scale: true,
        data: {
            mainText: "Phone number and password",
        },
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        openSource: true,
        scale: true,
        data: {
            mainText: "Email Verification, forgot password flows",
        },
    },

    {
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
    },
    
    {
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
                "JWT Support",
            ]
        }
    },
    
    {
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
    },
    
    {
        type: "feature",
        expandable: false,
        comingSoon: true,
        openSource: false,
        scale: true,
        data: {
            mainText: "Single login across multiple domains",
            tooltip: "Multiple domains, with a single login portal"
        }
    }, 
    
    {
        type: "feature",
        expandable: false,
        comingSoon: true,
        openSource: false,
        scale: true,
        data: {
            mainText: "M2M authentication"
        }
    }, 

    {
        type: "feature",
        expandable: false,
        comingSoon: true,
        openSource: false,
        scale: true,
        data: {
            mainText: "Account Linking",
        }
    },
    
    {
        type: "feature",
        expandable: true,
        openSource: false,
        scale: true,
        data: {
            mainText: "2FA",
            subList: [
                "Email",
                "Phone number",
                "TOTP (Coming Soon)",
                "QR code (Coming Soon)",
                "Biometric (Coming Soon)"
            ]
        }
    },

    {
        type: "section",
        data: {
            icon: everything,
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
            mainText: "Overrides (hooks and custom actions)",
        }
    },
    
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        openSource: true,
        scale: true,
        data: {
            mainText: "Compliance (SOC2)",
        }
    },
    
    {
        type: "section",
        data: {
            icon: support,
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
            mainText: "Uptime guarantees (SLAs)",
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

const Expandable = ({row, expandedByDefault = false}: {
    row: any,
    expandedByDefault?: boolean,
}) => {
    const [expand, setExpand] = useState(expandedByDefault);
    return <div className={styles.expandable}>
        <div onClick={() => setExpand(!expand)} className={`${styles.header} ${row.data.subList !== undefined && row.data.subList.length > 0 ? styles.cursor : ""}`}>
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
                    {/* <img src={el.data.icon.src} alt=""/> */}
                    <span className={styles['section-text']}>{el.data.text}</span>
                    {/* <small>{el.data.number}</small> */}
                </td>
                <td/>
                <td/>
            </tr>
        } else if (el.type === "feature") {
            return <tr key={index} className={styles.feature}>
                <td className={styles.left_align}>
                    <Expandable row={el} expandedByDefault={el.expandedByDefault}/>
                </td>
                <td>
                    {(typeof el.openSource === 'boolean' && el.openSource) && <img src={openSourceCheck.src} alt=""/>}
                    {typeof el.openSource === 'string' && <span>{el.openSource}</span>}
                </td>
                <td>
                    {(typeof el.scale === 'boolean' && el.scale) && <img src={scaleCheck.src} alt=""/>}
                    {/* {typeof el.scale === 'string' && <span>{el.scale}</span>} */}
                </td>
            </tr>
        }
    })}
    </tbody>
}

const navigateToConsultancy = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigateOnButtonClick("consultancy", e);
}

const navigateToGuides = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigateOnButtonClick("/docs/guides", e);
}

const TFoot = () => {
    return <tfoot>
    <tr>
        <td></td>
        <td>
            <h1>Open Source</h1>
            <button onClick={navigateToGuides} className={styles.bordered}>Get Started</button>
        </td>
        <td>
            <h1>Pay when you scale</h1>
            <button onClick={navigateToConsultancy} className={styles['filled-orange']}>Contact Us</button>
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
                <td>
                    Managed Service: $0.02 per MAU<br/>
                    <span className={styles.subtext}>Free under 5K MAU</span>
                </td>
                <td>Custom Pricing</td>
            </tr>
            <tr>
                <td>
                    <button onClick={navigateToGuides} className={styles.bordered}>
                        Get Started
                    </button>
                </td>
                <td>
                    <button onClick={navigateToConsultancy} className={styles['filled-orange']}>
                        Contact Us
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
                {/*<img src={el.data.icon.src} alt=""/>*/}{el.data.text} {/* <small>{el.data.number}</small> */}
            </div>
            else return <div key={index} className={styles.mobileFeature}>
                <Expandable row={el} expandedByDefault={el.expandedByDefault}/>
                <div className={styles.check}>
                    <div>
                        {(typeof el.openSource === 'boolean' && el.openSource) &&
                            <img src={openSourceCheck.src} alt=""/>}
                        {typeof el.openSource === 'string' && <span>{el.openSource}</span>}
                    </div>
                    <div>
                        {(typeof el.scale === 'boolean' && el.scale) && <img src={scaleCheck.src} alt=""/>}
                        {/* {typeof el.scale === 'string' && <span>{el.scale}</span>} */}
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
                <td className={styles["open-source-footer"]}>
                    <div>
                        <h1>Open source</h1>
                        <button onClick={navigateToGuides} className={styles.bordered}>Get Started</button>
                    </div>
                </td>
                <td className={styles["paid-footer"]}>
                    <div>
                        <h1>Pay when you scale</h1>
                        <button onClick={navigateToConsultancy} className={styles['filled-orange']}>Contact Us</button>
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
