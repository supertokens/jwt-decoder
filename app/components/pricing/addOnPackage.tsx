import styles from "../../styles/pricing/addOnPackage.module.css"
import { navigateOnButtonClick } from "../common/utils"

const data = {
    tier1: {
        list: [
            "Email + Shared slack channel",
            "Response SLA: \nAcknowledgement - 48 hours (2 business days)",
        ],
        button: {
            type: "bordered",
            text: "Schedule a call",
            link: "/consultancy"
        }
    },
    tier2: {
        list: [
            "Everything in Tier 1 plus:",
            "Video calls, MS Teams (Max 3 hours per month)",
            "Prioritised feature requests",
            "Response SLA: \nAcknowledgement - 48 hours (2 business days)",
        ],
        button: {
            type: "styled",
            text: "Consult an Expert",
            link: "/consultancy"
        }
    },
    tier3: {
        list: [
            "Everything in Tier 2 plus:",
            "Any custom requirement",
            "Guidance on integrating new features and customizations",
            "Response SLA: \nAcknowledgement - 24 hours (1 business day)",
        ],
        button: {
            type: "solid",
            text: "Consult an Expert",
            link: "/consultancy"
        }
    },
}

const Card = ({tier}: { tier: number }) => {
    // @ts-ignore
    return <div className={styles[`tier${tier}`]}>
        <div className={styles['info-wrapper']}>
            <div className={styles.chip}>
                <div>
                    Tier {tier} Support
                </div>
            </div>
            <hr className={styles.hr}/>
            <ul className={styles.ul}>
                {data[`tier${tier}`].list.map((el, index) => <li key={index}
                                                                 className={el.startsWith("Every") ? styles.everything : ""}>{el}</li>)}
            </ul>
        </div>
        <button onClick={getOnClick(data[`tier${tier}`].button.link)} className={styles[data[`tier${tier}`].button.type]}>
            <span>{data[`tier${tier}`].button.text}</span>
        </button>
    </div>
}

const getOnClick = (link: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    navigateOnButtonClick(link, e);
}

const AddOnPackage = () => {
    return <div className={styles.addOn}>
        <h1 style={{ marginBottom: "60px" }}>Professional Support</h1>
        <div className={styles.grid}>
            <Card tier={1}/>
            <Card tier={2}/>
            <Card tier={3}/>
            <div className={styles.basic}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <h1>One Time</h1>&nbsp;
                    {/* <span className={styles["get-in-touch-chip"]}>A one off deal</span> */}
                </div>
                <ul className={styles.ul}>
                    <li>One time implementation and migration service</li>
                    <li>Available on all tiers</li>
                </ul>
                <button onClick={getOnClick("/consultancy")} className={styles.bordered}>Get in touch</button>
            </div>
        </div>
    </div>
}

export default AddOnPackage;
