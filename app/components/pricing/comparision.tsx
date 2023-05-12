import styles from "../../styles/pricing/comparison.module.css"
import st from "../../assets/pricing/ST.png"
import firebase from "../../assets/pricing/firebase.png"
import aws from "../../assets/pricing/AWS.png"
import keycloak from "../../assets/pricing/keycloak.png"
import auth0 from "../../assets/pricing/Auth0.png"
import swipeBlue from "../../assets/pricing/swipe-icon-blue.png"


const THead = () => {
    return <thead>
    <tr>
        <td></td>
        <td>
            <img src={swipeBlue.src} alt=""/>
            Swipe
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th></th>
        <th>
            <div>
                <div>
                    <img src={st.src} alt=""/>
                </div>
            </div>
            <span>Supertokens</span>
        </th>
        <th>
            <div>
                <div>
                    <img src={auth0.src} alt=""/>
                </div>
            </div>
            <span>Auth0</span>
        </th>
        <th>
            <div>
                <div>
                    <img src={aws.src} alt=""/>
                </div>
            </div>
            <span>AWS Cognito</span>
        </th>
        <th>
            <div>
                <div>
                    <img src={keycloak.src} alt=""/>
                </div>
            </div>
            <span>Keycloak</span>
        </th>
        <th>
            <div>
                <div>
                    <img src={firebase.src} alt=""/>
                </div>
            </div>
            <span>Firebase</span>
        </th>
    </tr>
    </thead>
}

const rows = [
    {
        feat: "Pricing",
        st: {
            text: "$$/Free",
            color: "green",
        },
        auth0: {
            text: "$$$$",
            color: "red"
        },
        aws: {
            text: "$$",
            color: "warning"
        },
        key: {
            text: "Free",
            color: "green"
        },
        fire: {
            text: "$$",
            color: "warning"
        }
    },{
        feat: "User Satisfaction",
        text: "Based on 200+ respondents - shared feedback on the product's documentation, unsolved issues / bugs, and general 'ease of use')",
        st: {
            text: "High",
            color: "green",
        },
        auth0: {
            text: "Medium",
            color: "warning",
            info: "Users complaint about pricing once they grow from a startup to a growth company"
        },
        aws: {
            text: "Low",
            color: "red"
        },
        key: {
            text: "Low",
            color: "red"
        },
        fire: {
            text: "High",
            color: "green"
        }
    },{
        feat: "Ease of UI and backend customisability",
        st: {
            text: "Easy",
            color: "green",
        },
        auth0: {
            text: "Medium difficulty",
            color: "warning"
        },
        aws: {
            text: "High difficulty",
            color: "red"
        },
        key: {
            text: "High difficulty",
            color: "red"
        },
        fire: {
            text: "High difficulty",
            color: "red"
        }
    },{
        feat: "Size of the company offering services",
        st: {
            text: "Startup",
            color: "red",
        },
        auth0: {
            text: "Enterprise",
            color: "green"
        },
        aws: {
            text: "Enterprise",
            color: "green"
        },
        key: {
            text: "Backed by Enterprise",
            color: "green"
        },
        fire: {
            text: "Enterprise",
            color: "green"
        }
    },{
        feat: "Company provided support for free tiers",
        text: "Response times, Methods of support, etc",
        st: {
            text: "High",
            color: "green",
        },
        auth0: {
            text: "Low",
            color: "red",
            info: "Auth0 provides premium support for large contract values"
        },
        aws: {
            text: "Low",
            color: "red"
        },
        key: {
            text: "None",
            color: "red"
        },
        fire: {
            text: "Medium",
            color: "warning"
        }
    },{
        feat: "Self hostable",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "Yes",
            color: "warning",
            info: "It can be done on your own infrastructure but managed by Auth0"
        },
        aws: {
            text: "No",
            color: "red"
        },
        key: {
            text: "Yes",
            color: "green"
        },
        fire: {
            text: "No",
            color: "red"
        }
    },{
        feat: "Open Source",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "No",
            color: "red",
        },
        aws: {
            text: "No",
            color: "red"
        },
        key: {
            text: "Yes",
            color: "green"
        },
        fire: {
            text: "No",
            color: "red"
        }
    },{
        feat: "Managed Service",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "Yes",
            color: "green"
        },
        key: {
            text: "No",
            color: "red"
        },
        fire: {
            text: "Yes",
            color: "green"
        }
    },{
        feat: "Supported Cloud Providers",
        st: {
            text: "All",
            color: "green",
        },
        auth0: {
            text: "All",
            color: "green",
        },
        aws: {
            text: "AWS",
            color: "red"
        },
        key: {
            text: "All",
            color: "green"
        },
        fire: {
            text: "GCP",
            color: "red"
        }
    },{
        feat: "Compliance (SOC2, GDPR...)",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "Yes",
            color: "green"
        },
        key: {
            text: "Self hosted - so not required",
            color: "green"
        },
        fire: {
            text: "Yes",
            color: "green"
        }
    },{
        feat: "User management dashboard",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "Yes",
            color: "green"
        },
        key: {
            text: "Yes",
            color: "green"
        },
        fire: {
            text: "Yes",
            color: "green"
        }
    },{
        feat: "Passwordless login (email + phone no)",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "Yes",
            color: "green"
        },
        key: {
            text: "Partial",
            color: "warning"
        },
        fire: {
            text: "Yes",
            color: "green"
        }
    },{
        feat: "Social and Email Password login",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "Yes",
            color: "green"
        },
        key: {
            text: "Yes",
            color: "green"
        },
        fire: {
            text: "Yes",
            color: "green"
        }
    },{
        feat: "Custom Open ID connector",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "Yes",
            color: "warning",
        },
        aws: {
            text: "Yes",
            color: "green"
        },
        key: {
            text: "Yes",
            color: "green"
        },
        fire: {
            text: "Yes",
            color: "green"
        }
    },{
        feat: "SAML Login",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "Yes",
            color: "warning",
        },
        aws: {
            text: "Yes",
            color: "green"
        },
        key: {
            text: "Yes",
            color: "green"
        },
        fire: {
            text: "Yes",
            color: "green"
        }
    },{
        feat: "Being an OAuth 2.0 provider",
        st: {
            text: "No",
            color: "red",
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "Yes",
            color: "green"
        },
        key: {
            text: "Yes",
            color: "green"
        },
        fire: {
            text: "Yes",
            color: "green"
        }
    },{
        feat: "External Database",
        st: {
            text: "No",
            color: "red",
        },
        auth0: {
            text: "Yes",
            color: "warning",
        },
        aws: {
            text: "No",
            color: "red"
        },
        key: {
            text: "Yes",
            color: "green"
        },
        fire: {
            text: "Yes",
            color: "green"
        }
    },{
        feat: "SLA guarantees",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "Yes",
            color: "green"
        },
        key: {
            text: "No",
            color: "red"
        },
        fire: {
            text: "Not Known",
            color: "warning"
        }
    },{
        feat: "Single sign on",
        st: {
            text: "Partial",
            color: "warning",
            info: "Only across sub domains"
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "Yes",
            color: "green"
        },
        key: {
            text: "Yes",
            color: "green"
        },
        fire: {
            text: "Yes",
            color: "green"
        }
    },{
        feat: "2FA",
        st: {
            text: "Partial",
            color: "warning",
            info: "No authenticator app support"
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "Yes",
            color: "green"
        },
        key: {
            text: "Yes",
            color: "green"
        },
        fire: {
            text: "Partial",
            color: "warning"
        }
    },{
        feat: "Roles and permissions",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "Yes",
            color: "green"
        },
        key: {
            text: "Yes",
            color: "green"
        },
        fire: {
            text: "Yes",
            color: "green"
        }
    },{
        feat: "Web3 login",
        st: {
            text: "No",
            color: "red",
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "No",
            color: "red"
        },
        key: {
            text: "No",
            color: "red"
        },
        fire: {
            text: "No",
            color: "red"
        }
    },{
        feat: "Machine to machine",
        st: {
            text: "Partial",
            color: "warning",
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "Yes",
            color: "green"
        },
        key: {
            text: "Yes",
            color: "green"
        },
        fire: {
            text: "Partial",
            color: "warning"
        }
    },{
        feat: "Multi tenancy",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "Yes",
            color: "warning",
            info: "But limit to 4 tenants for custom domain"
        },
        key: {
            text: "Yes",
            color: "green"
        },
        fire: {
            text: "Yes",
            color: "green"
        }
    },{
        feat: "Cookie based session management (Out of the box)",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "No",
            color: "red",
        },
        aws: {
            text: "No",
            color: "red",
        },
        key: {
            text: "No",
            color: "red",
        },
        fire: {
            text: "No",
            color: "red",
        }
    },{
        feat: "Customise Emails and SMS",
        st: {
            text: "Yes",
            color: "green",
        },
        auth0: {
            text: "Yes",
            color: "green",
        },
        aws: {
            text: "Yes",
            color: "green",
        },
        key: {
            text: "Partial",
            color: "warning",
            info: "Emails: Yes, SMS: It does not send SMS at all. You need to use custom hook to send SMS yourself."
        },
        fire: {
            text: "Partial",
            color: "warning",
            info: "Only via custom email hook or SMS handler"
        }
    },
]

const Tooltip = ({ title, text }: {title: string; text: string}) => {
    return <div className={styles.tooltip}>
        <u>{title}</u>
        <div>
            {text}
        </div>
    </div>
}

const TBody = () => {
    return <tbody>
    {rows.map((el, index) => {
        return <tr key={index}>
            <td className={styles.feat}>
                {!el.text ? el.feat : <Tooltip title={el.feat} text={el.text} />}
            </td>
            <td className={styles[el.st.color]}>
                {el.st.info ? <Tooltip title={el.st.text} text={el.st.info} /> : el.st.text}
            </td>
            <td className={styles[el.auth0.color]}>
                {el.auth0.info ? <Tooltip title={el.auth0.text} text={el.auth0.info} /> : el.auth0.text}
            </td>
            <td className={styles[el.aws.color]}>
                {el.aws.info ? <Tooltip title={el.aws.text} text={el.aws.info} /> : el.aws.text}
            </td>
            <td className={styles[el.key.color]}>
                {el.key.info ? <Tooltip title={el.key.text} text={el.key.info} /> : el.key.text}
            </td>
            <td className={styles[el.fire.color]}>
                {el.fire.info ? <Tooltip title={el.fire.text} text={el.fire.info} /> : el.fire.text}
            </td>
        </tr>
    })}
    </tbody>
}

const Comparision = () => {
    return <div className={styles.comparison}>
        <div className={styles.text}>
            <h1 id="comparison-chart">Feature based comparison</h1>
            <p>See how we compare with other authentication solutions</p>
        </div>
        <div className={styles["table-wrapper"]}>
            <table className={styles.table}>
                <THead />
                <TBody />
            </table>
        </div>
    </div>
}

export default Comparision;
