import { CommonComponentProps, TitleChildType } from "../types";
import { getClassNameFromFlex, getMarginTopFromChildIndex } from "../utils";
import styles from "../../../styles/feature-pages/components/title-subtitle-cta.module.css";
import commonStyles from "../../../styles/feature-pages/universal-styles.module.css";
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
        maxWidth,
    } = props.config;
    const primaryColor = props.primaryColor;

    const titleParts = title.text.split(" ");
    const highlightedParts = title.highlight.texts;

    let highlightColors: string[] = [`${primaryColor} 0%`, `${primaryColor} 100%`];
    let ctaBorder = primaryColor;
    let ctaBackground = primaryColor;

    if ( props.gradient !== undefined && props.gradient.colors.length == 2) {
        highlightColors = [`${props.gradient.colors[0]} 0%`, `${props.gradient.colors[1]} 100%`];
        ctaBorder = `linear-gradient(90deg, ${props.gradient.colors[0]} 0%, ${props.gradient.colors[1]} 100%)`;
        ctaBackground = `linear-gradient(90deg, ${props.gradient.colors[0]} 21.52%, ${props.gradient.colors[1]} 61.56%)`;
    }

    if (title.highlight.mode === "grey-out") {
        highlightColors = ["rgba(248, 247, 247, 1) 20%", "rgba(248, 247, 247, 0.4) 100%"];
    }

    return (
        <SectionChildContainer
            maxWidth={maxWidth}
            index={props.index}
            flex={flex}
            rootClassNames={[]}
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

                {
                    subtitle !== undefined &&
                    <div className={styles["section-child-subtitle-container"]}>
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
                            <div className={styles["section-child-cta-container-bg"]} style={{background: ctaBackground}} />
                            <a className={styles["section-child-cta"]} target="_blank" href={cta.targetUrl}>
                                {cta.text}
                            </a>
                    </div>
                }
        </SectionChildContainer>
    );
};