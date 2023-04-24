import styles from "../../styles/pricing/addOnPackage.module.css"

const data = {
    tier1: {
        list: [
            "Email + Shared slack channel",
            "Response SLA: \nAcknowledgement - 60 hours",
            "Included in SaaS if spend is >10,000 / year"
        ],
        button: {
            type: "bordered",
            text: "Schedule a call"
        }
    },
    tier2: {
        list: [
            "Everything in Tier 1 plus:",
            "Video calls, MS Teams",
            "Prioritised feature requests",
            "Response SLA: \nAcknowledgement - 24 hours",
            "Included in SaaS if spend is >15,000 / year"
        ],
        button: {
            type: "styled",
            text: "Consult an Expert"
        }
    },
    tier3: {
        list: [
            "Everything in Tier 2 plus:",
            "Any custom requirement",
            "Prioritised feature requests",
            "Response SLA: \nAcknowledgement - 6 hours",
            "Included in SaaS if spend is \n>25,000 / year"
        ],
        button: {
            type: "solid",
            text: "Consult an Expert"
        }
    },
}

const Card = ({tier}: { tier: number }) => {
    // @ts-ignore
    return <div className={styles[`tier${tier}`]}>
        <div className={styles['info-wrapper']}>
            <span className={styles.chip}>
                Tier {tier} Support
            </span>
            <hr className={styles.hr}/>
            <ul className={styles.ul}>
                {data[`tier${tier}`].list.map((el, index) => <li key={index}
                                                                 className={el.startsWith("Every") ? styles.everything : ""}>{el}</li>)}
            </ul>
        </div>
        <button className={styles[data[`tier${tier}`].button.type]}>
            <span>{data[`tier${tier}`].button.text}</span>
        </button>
    </div>
}

const AddOnPackage = () => {
    return <div className={styles.addOn}>
        <h1 style={{ marginBottom: "60px" }}>Add-on Packages</h1>
        <div className={styles.grid}>
            <Card tier={1}/>
            <Card tier={2}/>
            <Card tier={3}/>
            <div className={styles.basic}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <h1>Basic</h1>&nbsp;
                    <span className={styles.chip}>A one off deal</span>
                </div>
                <ul className={styles.ul}>
                    <li>One time implementation and migration service</li>
                    <li>Available on all tiers</li>
                </ul>
                <button className={styles.bordered}>Get in touch</button>
            </div>
        </div>
    </div>
}

export default AddOnPackage;
