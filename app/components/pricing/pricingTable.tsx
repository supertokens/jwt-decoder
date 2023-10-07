import styles from "../../styles/pricing/feature.module.css";
import tooltipIcon from "../../assets/pricing/tooltip-icon.png";
import dropIcon from "../../assets/pricing/drop-icon.png";
import openSourceCheck from "../../assets/pricing/open-source-check.png";
import scaleCheck from "../../assets/pricing/scale-check.png";
import selfHOst from "../../assets/pricing/self-host.png";
import managed from "../../assets/pricing/managed.png";
import auth from "../../assets/pricing/auth.png";
import everything from "../../assets/pricing/everything.png";
import support from "../../assets/pricing/support.png";
import linkPng from '../../assets/pricing/link.png'


import { useState } from "react";
import React from "react";
import PricingDialogContainer from "./dialog/pricingDialogContainer";
import DashboardDialog from "./dialog/dashboardDialog";
import MultiTenancyDialog from "./dialog/multitenancyDialog";
import AccountLinkingDialog from "./dialog/accountLinkingDialog";

export const Tooltip = ({ position, text , className = "", imageClass = "" }) => {
    return (
        <div className={`${className} ${styles.tooltip} `}>
            <img className={imageClass} src={tooltipIcon.src} alt="question-mark-icon" />
            <div className={styles[position]}>
                <p>{text}</p>
            </div>
        </div>
    );
};

const Thead = () => {
    return (
        <thead>
            {/*<tr>*/}
            {/*    <td></td>*/}
            {/*    <td>Swipe</td>*/}
            {/*</tr>*/}
            <tr className={styles["main-header"]}>
                <th className={styles.left_align}>Features</th>
                <th>Open Source</th>
                <th>Scale</th>
            </tr>
            <tr className={styles.section}>
                <td className={styles.left_align}>
                    <span className={styles["section-text"]}>MAU Pricing</span>
                </td>
                <td />
                <td />
            </tr>
            <tr className={styles.spacer}>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            {/* <div className={s}/> */}
            <tr className={styles.highlight}>
                <td className={styles.left_align}>
                    Self host
                    <img src={selfHOst.src} alt="self-hosted" />
                </td>
                <td>Free</td>
                <td>Free</td>
            </tr>
            <tr className={styles.highlight}>
                <td className={styles.left_align}>
                    Managed Service
                    <img src={managed.src} alt="manged" />
                </td>
                <td>
                    <span>$0.02 per MAU</span>
                    <br />
                    <span className={styles.subtext}>Free under 5K MAU</span>
                </td>
                <td> 
                    <span>$0.02 per MAU</span>
                    <br />
                    <span className={styles.subtext}>Free under 5K MAU</span>
                </td>
            </tr>
            <tr className={styles.spacer}>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </thead>
    );
};


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
            mainText: "Email Password"
        }
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        openSource: true,
        scale: true,
        data: {
            mainText: "Social Login / SSO providers (Google, Github, Facebook, and all custom providers)",
            links: [{
                text:"SSO providers",
                href:"/features/single-sign-on"
            }]
        }
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        openSource: true,
        scale: true,
        data: {
            mainText: "Passwordless Magic links",
            links: [{
                text:"Passwordless Magic links",
                href:'/features/email-magic-links'
            }]
        }
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        openSource: true,
        scale: true,
        data: {
            mainText: "Passwordless SMS OTP"
        }
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        openSource: true,
        scale: true,
        data: {
            mainText: "Username and password"
        }
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        openSource: true,
        scale: true,
        data: {
            mainText: "Phone number and password"
        }
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        openSource: true,
        scale: true,
        data: {
            mainText: "Email Verification, forgot password flows"
        }
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
                "Pre built UI with your customizations"
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
                "JWT Support"
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
                "Add multiple permissions to each role"
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
            mainText: "User Management Dashboard",
            subList: [
                "Delete users",
                "Revoke all sessions",
                "Edit user information (email, password, Name, custom fields)",
                "Filter by each organisation",
                {
                    text: "Included seats",
                    tooltip: "Open source plan: 3 seats. Scale plan: 10 seats"
                },
                "Number of Users"
            ]
        }
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        openSource: "≤3",
        scale: {
            text:"See pricing",
            dialogType:"dashboard"
        },
        data: {
            mainText: "Number of Dashboard Users"
        }
    },
    {    
        type: "feature",
        openSource: true,
        expandable: false,
        comingSoon: false,
        scale: true,
        data: {
            mainText: "M2M authentication"
        }
    },
    {
        type: "feature",
        expandable: true,
        comingSoon: false,
        openSource: false,
        scale: {
            text:"See pricing",
            dialogType:"multi-tenancy"
        },
        data: {
            mainText: "Multi tenancy and Organisational support",
            links: [{
                text:"Multi tenancy and Organisational support",
                href:'/features/multi-tenancy'
            }],
            subList: [
                "Unique user pools per tenant",
                {
                    text: "Configure custom login methods per tenant",
                    tooltip: "eg: Okta for tenant1, passwordless for tenant2, Social SSO etc"
                },
                {
                    text: "Configure Enterprise SSO connections (Okta, AD etc) per tenant",
                    links: [{
                        text:"Enterprise SSO connections",
                        href:"/features/single-sign-on"
                    }]
                },
                "Data isolation on a per tenant level",
                "Sharing a user across tenants",
                //@ saml auth is missing in auth, maybe nevil didn't know about this change.
                "SAML Auth"
            ]
        }
    },

    {
        type: "feature",
        expandable: true,
        openSource: false,
        scale: "Additional $0.01/MAU",
        data: {
            mainText: "2FA",
            subList: ["Email", "Phone number", "TOTP (Coming Soon)", "QR code (Coming Soon)", "Biometric (Coming Soon)"]
        }
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: true,
        openSource: false,
        // scale: "Additional $0.01/MAU",
        scale: {
            text:"See pricing",
            dialogType:"account-linking"
        },
        data: {
            mainText: "Account Linking"
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
            tooltip: "This only applies to domains that are not sub domains"
        }
    },
      {
        type: "section",
        data: {
            icon: everything,
            text: "Everything Else",
            number: "6"
        }
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        openSource: true,
        scale: true,
        data: {
            mainText: "Overrides (hooks and custom actions)"
        }
    },

    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        openSource: true,
        scale: true,
        data: {
            mainText: "Compliance (SOC2)"
        }
    },

    {
        type: "section",
        data: {
            icon: support,
            text: "Support",
            number: "3"
        }
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        openSource: false,
        scale: true,
        data: {
            mainText: "Uptime guarantees (SLAs)"
        }
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        openSource: true,
        scale: true,
        data: {
            mainText: "Community support"
        }
    },
    {
        type: "feature",
        expandable: false,
        comingSoon: false,
        openSource: "Available as an add on",
        scale: true,
        data: {
            mainText: "Implementation assistance"
        }
    }
];

const stopAnchorPropagation = (e:React.MouseEvent<HTMLAnchorElement>)=>{
    e.stopPropagation()
}

const insertLink = (mainText:string,links:Array<{text:string,href:string}>)=>{
    let returnableJSX:JSX.Element;
    links.map(link=>{
        const spiltedStr = mainText.split(link.text);
        returnableJSX = <span>{spiltedStr[0]} <span className={styles.externalLink}><a onClick={stopAnchorPropagation} target="_blank" href={link.href}>{link.text}</a> <img src={linkPng.src} alt="link"/></span>  {spiltedStr[1]}</span>
    })

    return returnableJSX;
}

export const Expandable = ({ row, expandedByDefault = false }: { row: any; expandedByDefault?: boolean }) => {
    const [expand, setExpand] = useState(expandedByDefault);
    return (
        <div className={styles.expandable} onClick={() => setExpand(!expand)}>
            <div
                className={`${styles.header} ${row.expandable ? styles.cursor : null}`}
            >
                <span>
                    {row.data.links?.length ? insertLink(row.data.mainText,row.data.links):row.data.mainText } {row.data.tooltip && <Tooltip text={row.data.tooltip} position="bottom" />}
                </span>
                <div>
                    {row.comingSoon && <span className={styles["coming-soon-chip"]}>Coming soon</span>}
                    {row.expandable && <img className={`${styles.expandbleIcon} ${expand ? styles.opened :""}`}   src={dropIcon.src} />}
                </div>
            </div>
            {row.expandable && expand && (
                <div className={styles.sublist}>
                    <ul>
                        {row.data.subList.map((el, index) => (
                            <li key={index}>
                                {typeof el === "object" && (
                                    <span>
                                        {el.links?.length ? insertLink(el.text,el.links):el.text} {el.tooltip ? <Tooltip text={el.tooltip} position="bottom" /> :null}{" "}
                                    </span>
                                )}
                                {typeof el === "string" && <span>{el}</span>}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};



const TBody = () => {
    const [isDashboardDialogOpen,setIsDashboardDialogOpen] = useState(false)
    const [isMultiTenancyDialogOpen,setisMultiTenancyDialogOpen] = useState(false)
    const [isAccountLinkingDialogOpen,setIsAccountLinkingDialogOpen] = useState(false)
    return (
        <tbody>
            {rows.map((el, index) => {
                if (el.type === "section") {
                    return (
                        <tr key={index} className={styles.section}>
                            <td className={styles.left_align}>
                                {/* <img src={el.data.icon.src} alt=""/> */}
                                <span className={styles["section-text"]}>{el.data.text}</span>
                                {/* <small>{el.data.number}</small> */}
                            </td>
                            <td />
                        </tr>
                    );
                } else if (el.type === "feature") {
                    return (
                        <tr key={index} className={styles.feature}>
                            <td className={styles.left_align}>
                                <Expandable row={el} expandedByDefault={el.expandedByDefault} />
                            </td>
                            <td>
                                <img src={openSourceCheck.src} alt="" />
                            </td>
                            {/* <td>
                                {typeof el.scale === "boolean" && el.scale && <img src={scaleCheck.src} alt="" />}
                                {typeof el.scale === 'object' && el.scale && 
                                (el.scale.text === "See pricing"?
                                    <button onClick={()=> openDialog(el.scale.dialogType)} className={styles.seePricing} ><span>{el.scale.text}</span></button>:
                                null)}
                                {typeof el.scale === "string" && el.scale && <span className={styles.scale}>{el.scale}</span>}
                            </td> */}
                        </tr>
                    );
                }
            })}
            {/* Dashboard Dialog */}
           <PricingDialogContainer show={isDashboardDialogOpen} onClose={()=> setIsDashboardDialogOpen(false)}>
                <DashboardDialog/>
           </PricingDialogContainer>
            {/* MultiTenancy Dialog */}
           <PricingDialogContainer show={isMultiTenancyDialogOpen} onClose={()=> setisMultiTenancyDialogOpen(false)}>
                <MultiTenancyDialog/>
           </PricingDialogContainer>
            {/* Account Linking pricing dialog */}
           <PricingDialogContainer show={isAccountLinkingDialogOpen} onClose={()=> setIsAccountLinkingDialogOpen(false)}>
                <AccountLinkingDialog/>
           </PricingDialogContainer>
        </tbody>
    );
};


const MobileTHead = () => {
    return (
        <>
            <table className={styles.mobileTHead}>
                <thead>
                    <tr>
                        <th>Open Source</th>
                        <th>Scale</th>
                    </tr>
                </thead>
            </table>
            <div>
                <div className={styles.mobileSection}>
                MAU Pricing
                </div>
                <div className={styles.highlight}>
                   Self Host
                </div>
                <div className={styles.mobileFeature}>
                    <div className={styles.check}>
                        <div>
                            <span>Free</span>
                        </div>
                        <div>
                            <span>Free</span>
                        </div>
                    </div>
                </div>
                <div className={styles.highlight}>
                   Managed Service
                </div>
                <div className={styles.mobileFeature}>
                    <div className={styles.check}>
                        <div>
                            $0.02 per MAU
                            <br />
                            <span className={styles.subtext}>Free under 5K MAU</span>
                        </div>
                        <div>
                            $0.02 per MAU
                            <br />
                            <span className={styles.subtext}>Free under 5K MAU</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const MobileTBody = () => {
    const [isDashboardDialogOpen,setIsDashboardDialogOpen] = useState(false)
    const [isMultiTenancyDialogOpen,setisMultiTenancyDialogOpen] = useState(false)
    const [isAccountLinkingDialogOpen,setIsAccountLinkingDialogOpen] = useState(false)

    function openDialog(dialogType:string) {
        if(dialogType === "multi-tenancy") {
            setisMultiTenancyDialogOpen(true)
        }

        if(dialogType === "dashboard") {
            setIsDashboardDialogOpen(true)
        }

        if(dialogType === "account-linking"){
            setIsAccountLinkingDialogOpen(true)
        }
    }
    
    return (
        <div>
            {rows.map((el, index) => {
                if (el.type === "section")
                    return (
                        <div key={index} className={styles.mobileSection}>
                            {/*<img src={el.data.icon.src} alt=""/>*/}
                            {el.data.text} {/* <small>{el.data.number}</small> */}
                        </div>
                    );
                else
                    return (
                        <div key={index} className={styles.mobileFeature}>
                            <Expandable row={el} expandedByDefault={el.expandedByDefault} />
                            <div className={styles.check}>
                                <div>
                                    {typeof el.openSource === "boolean" && el.openSource && (
                                        <img src={openSourceCheck.src} alt="" />
                                    )}
                                    {typeof el.openSource === "string" && <span>{el.openSource}</span>}
                                </div>
                                <div>
                                    {typeof el.scale === "boolean" && el.scale && <img src={scaleCheck.src} alt="" />}
                                    {/* {typeof el.scale === 'string' && <span>{el.scale}</span>} */}
                                    {typeof el.scale === 'object' && el.scale && 
                                    (el.scale.text === "See pricing"?
                                        <button onClick={()=> openDialog(el.scale.dialogType)} className={styles.seePricing} ><span>{el.scale.text}</span></button>:
                                    null)}
                                    {typeof el.scale === "string" && el.scale && <span className={styles.scale}>{el.scale}</span>}
                                </div>
                            </div>
                        </div>
                    );
            })}
            {/* Dashboard Dialog */}
           <PricingDialogContainer show={isDashboardDialogOpen} onClose={()=> setIsDashboardDialogOpen(false)}>
                <DashboardDialog/>
           </PricingDialogContainer>
            {/* MultiTenancy Dialog */}
           <PricingDialogContainer show={isMultiTenancyDialogOpen} onClose={()=> setisMultiTenancyDialogOpen(false)}>
                <MultiTenancyDialog/>
           </PricingDialogContainer>
              {/* Account Linking pricing dialog */}
            <PricingDialogContainer show={isAccountLinkingDialogOpen} onClose={()=> setIsAccountLinkingDialogOpen(false)}>
                <AccountLinkingDialog/>
           </PricingDialogContainer>
        </div>
    );
};

const PricingTable = () => {
    return (
        <div className={styles["table-wrapper"]}>
            <table className={styles.table}>
            <h1>Core Features</h1>
                <TBody/>
            </table>
            <div className={styles.mobileTable}>
                <MobileTHead />
                <h3>Features</h3>
                <MobileTBody />
            </div>
        </div>
    );
};

export default PricingTable;
