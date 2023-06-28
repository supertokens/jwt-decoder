import { CommonComponentProps, TitleChildType } from "../types";
import { getClassNameFromFlex, getMarginTopFromChildIndex } from "../utils";
import styles from "../../../styles/feature-pages/components/title-subtitle-cta.module.css";
import { SectionChildContainer } from "./section-child-container";

type Props = CommonComponentProps & {
    config: TitleChildType;
    primaryColor: string;
    gradient?: {
        colors: string[];
    };
}

export const TitleSubtitleCta = (props: Props) => {
    const {
        flex,
        title,
        supertext,
        subtitle,
        cta,
        rootClassNames,
    } = props.config;
    const primaryColor = props.primaryColor;

    const titleParts = title === undefined ? [] : title.text.split(" ");
    const highlightedParts = title === undefined ? [] : title.highlight.texts;

    let highlightColors: string[] = [`${primaryColor} 0%`, `${primaryColor} 100%`];
    let ctaBorder = primaryColor;
    let ctaBackground = primaryColor;

    if ( props.gradient !== undefined && props.gradient.colors.length == 2) {
        highlightColors = [`${props.gradient.colors[0]} 0%`, `${props.gradient.colors[1]} 100%`];
        ctaBorder = `linear-gradient(90deg, ${props.gradient.colors[0]} 0%, ${props.gradient.colors[1]} 100%)`;
        ctaBackground = `linear-gradient(90deg, ${props.gradient.colors[0]} 21.52%, ${props.gradient.colors[1]} 61.56%)`;
    }

    if (title?.highlight.mode === "grey-out") {
        highlightColors = ["rgba(248, 247, 247, 1) 20%", "rgba(248, 247, 247, 0.4) 100%"];
    }

    if (title?.highlight.mode === "custom") {
        highlightColors = [`${title.highlight.color} 0%`, `${title.highlight.color} 100%`];
    }

    if (cta?.fillType === "white") {
        ctaBackground = "white";
        ctaBorder = "white";
    }

    const additionalClasses = rootClassNames ?? [];

    return (
        <SectionChildContainer
            index={props.index}
            flex={flex}
            rootClassNames={[...additionalClasses]}
            >
                {
                    supertext !== undefined && 
                    <div 
                        className={styles["section-child-supertext"]}
                        style={{
                            color: primaryColor,
                        }}>
                        {supertext}
                    </div>
                }

                {
                    titleParts.length > 0 &&
                    <div className={styles["section-child-title-container"]}>
                        {
                            titleParts.map((part, index) => {
                                if (highlightedParts.includes(part)) {
                                    return (
                                        <span 
                                            key={`section-child-title-part-${index}`}
                                            className="section-child-title-highlight"
                                            style={{
                                                background: `-webkit-linear-gradient(${highlightColors.join(",")})`,
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                            }}>
                                            {`${part} `}
                                        </span>
                                    );
                                }

                                return <span key={`section-child-title-part-${index}`}>{`${part} `}</span>
                            })
                        }
                    </div>
                }

                {
                    subtitle !== undefined &&
                    <div 
                        className={styles["section-child-subtitle-container"]}
                        style={{
                            marginTop: titleParts.length > 0 ? undefined : 0,
                        }}>
                            {subtitle}
                    </div>
                }

                {
                    cta !== undefined &&
                    <div 
                        className={styles["section-child-cta-container"]}
                        style={{
                            background: ctaBorder,
                        }}>
                            <div className={styles["section-child-cta-container-bg"]} style={{
                                background: ctaBackground,
                            }} />
                            <a 
                                className={styles["section-child-cta"]} 
                                target="_blank" 
                                href={cta.targetUrl}
                                style={{
                                    backgroundColor: cta.fillType === undefined ? undefined : ctaBackground,
                                    color: cta.fillType === undefined ? undefined : "#000",
                                }}>
                                {cta.text}
                            </a>
                    </div>
                }
        </SectionChildContainer>
    );
};