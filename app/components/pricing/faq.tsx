import styles from "../../styles/pricing/faq.module.css";
import {useState} from "react";

const questions = [
    {
        "question": "What is the difference between the managed service and self hosting?",
        "answer": "The same free and paid features are available in both options. In self hosted, you can use the open source features of \n" +
            "SuperTokens for free at any scale.\n" +
            "\n" +
            "However with the managed service, SuperTokens handles on demand scalability, reliability and updates - essentially \n" +
            "reducing your devops workload. With the self hosted version, everything is managed within your infrastructure."
    },{
        "question": "Pricing for volume / bulk discounts",
        "answer": "The same free and paid features are available in both options. In self hosted, you can use the open source features of \n" +
            "SuperTokens for free at any scale.\n" +
            "\n" +
            "However with the managed service, SuperTokens handles on demand scalability, reliability and updates - essentially \n" +
            "reducing your devops workload. With the self hosted version, everything is managed within your infrastructure."
    },{
        "question": "How can I customize SuperTokens?",
        "answer": "The same free and paid features are available in both options. In self hosted, you can use the open source features of \n" +
            "SuperTokens for free at any scale.\n" +
            "\n" +
            "However with the managed service, SuperTokens handles on demand scalability, reliability and updates - essentially \n" +
            "reducing your devops workload. With the self hosted version, everything is managed within your infrastructure."
    },{
        "question": "SuperTokens is missing some features I need. How do I find out when it will be release?",
        "answer": "The same free and paid features are available in both options. In self hosted, you can use the open source features of \n" +
            "SuperTokens for free at any scale.\n" +
            "\n" +
            "However with the managed service, SuperTokens handles on demand scalability, reliability and updates - essentially \n" +
            "reducing your devops workload. With the self hosted version, everything is managed within your infrastructure."
    },{
        "question": "Are all these features free if I use the self hosted version?",
        "answer": "The same free and paid features are available in both options. In self hosted, you can use the open source features of \n" +
            "SuperTokens for free at any scale.\n" +
            "\n" +
            "However with the managed service, SuperTokens handles on demand scalability, reliability and updates - essentially \n" +
            "reducing your devops workload. With the self hosted version, everything is managed within your infrastructure."
    },
]

const QA = ({ el, state }) => {
    const [open, setOpen] = useState(state);
    return <div onClick={() => setOpen(!open)} className={styles.question}>
        <div className={`${styles["question-title-container"]}`}>
            <b>{el.question}</b>
            <div className={`${styles.chevron} ${open ? styles.rotated : ""}`}/>
        </div>
        {open && <p>
            {el.answer}
        </p>}
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
