import styles from "../../styles/pricing/faq.module.css";
import {useState} from "react";

const questions = [
    {
        "question": "What is the difference between the managed service and self hosting?",
        "answer": "The same features are available in both options. In self hosted, you can use the open source features of SuperTokens for free at any scale and pay only for the paid features mentioned in “Scale”.\n" +
            "\n" +
            "With the managed service, SuperTokens handles on demand scalability, reliability and updates - essentially reducing your devops workload. With the self hosted version, everything is managed within your infrastructure."
    },{
        "question": "Do you provide discounts for large volumes?",
        "answer": "Yes. if you have greater than 10K MAUs or more than 5 organisations as customers, please reach out to us for discounted pricing."
    },{
        "question": "Can I get help in evaluating SuperTokens?",
        "answer": <span>Sure, feel free to join our <a onClick={e => {
            e.stopPropagation();
        }} className={styles.link} target="_blank" href="http://supertokens.com/discord">Discord</a> or <a onClick={e => {
            e.stopPropagation();
        }} className={styles.link} target="_blank" href="/call-user">schedule a call</a> with us if you're looking to implement SuperTokens commercially.</span>
    },{
        "question": "How scalable is SuperTokens?",
        "answer": "SuperTokens is horizontally scalable and companies run it at the scale of millions of unique daily active users without any issues. Join thousands of other applications using SuperTokens in production!"
    },
]

const QA = ({ el, state }) => {
    const [open, setOpen] = useState(state);
    // return <div onClick={() => setOpen(!open)} className={styles.question}>
    //     <div className={`${styles["question-title-container"]}`}>
    //         <b>{el.question}</b>
    //         <div className={`${styles.chevron} ${open ? styles.rotated : ""}`}/>
    //     </div>
    //     {open && <p>
    //         {el.answer}
    //     </p>}
    // </div>

    return <div className={styles.question} style={{cursor: "default"}}>
        <div className={`${styles["question-title-container"]}`}>
            <b>{el.question}</b>
            {/* <div className={`${styles.chevron} ${open ? styles.rotated : ""}`}/> */}
        </div>
        <p>
            {el.answer}
        </p>
    </div>
}

const FAQ = () => {
    return <div className={styles.faq}>
        <h1>The <span>FAQ.</span></h1>
        <div>
            {questions.map((el, index) => <QA key={index} state={index === 0} el={el} />)}
        </div>
    </div>
}

export default FAQ;
