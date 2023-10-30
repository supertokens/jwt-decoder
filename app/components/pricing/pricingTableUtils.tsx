
import React, {useState} from "react";


import styles from "../../styles/pricing/feature.module.css";
import tooltipIcon from "../../assets/pricing/tooltip-icon.png";
import dropIcon from "../../assets/pricing/drop-icon.png";
import linkPng from '../../assets/pricing/link.png'


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

const stopEventPropagation = (e:React.MouseEvent<HTMLAnchorElement>)=>{
    e.stopPropagation()
}

export function replaceStringsWithLinks(paragraph: string, replacements: {text:string,href:string}[]): JSX.Element {
    let paragraphCopy = paragraph;

    replacements.forEach(replacement => {
        const { text, href } = replacement;
        const regex = new RegExp(`\\b${text}\\b`, 'g');
        paragraphCopy = paragraphCopy.replace(regex, `<a target="_blank" href="${href}">${text} <img src=${linkPng.src} alt="link"/></a>`);
    });

    const tokens = paragraphCopy.split(/(<a.*?<\/a>|\s+|[,.-]+)/).filter(Boolean);

    const jsxParagraph = tokens.map((token, index) => {
        if (token.startsWith('<a')) {
            return <span onClick={stopEventPropagation} className={styles.externalLink} key={index} dangerouslySetInnerHTML={{ __html: token }} />
                       
        } else {
            return <span key={index}>{token}</span>;
        }
    });

    return <p>{jsxParagraph}</p>
  }


export const Expandable = ({ row, expandedByDefault = false }: { row: any; expandedByDefault?: boolean }) => {
    const [expand, setExpand] = useState(expandedByDefault);
    return (
        <div className={styles.expandable} onClick={() => setExpand(!expand)}>
            <div
                className={`${styles.header} ${row.expandable ? styles.cursor : null}`}
            >
                <span>
                    <span>{row.data.links?.length ? replaceStringsWithLinks(row.data.mainText,row.data.links):row.data.mainText } {row.data.tooltip && <Tooltip text={row.data.tooltip} position="bottom" />}</span>
                    {/* {row.comingSoon && <span className={styles["coming-soon-chip"]}>Coming soon</span>} */}
                </span>
                <div>
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
                                        {el.links?.length ? replaceStringsWithLinks(el.text,el.links):el.text} {el.tooltip ? <Tooltip text={el.tooltip} position="bottom" /> :null}{" "}
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

