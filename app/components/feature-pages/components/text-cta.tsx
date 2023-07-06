import { CommonComponentProps, TextCTAChildType } from "../types"
import { SectionChildContainer } from "./section-child-container";
import styles from "../../../styles/feature-pages/components/text-cta.module.css"
import universalStyles from "../../../styles/feature-pages/universal-styles.module.css"

type Props = CommonComponentProps & {
    config: TextCTAChildType;
}

export const TextCtaChild = (props: Props) => {
    const {
        index,
        config,
    } = props;

    const {
        flex,
        indicator,
        text,
        cta,
        rootClassNames,
    } = config;

    const additionalClasses = rootClassNames ?? [];

    return (
        <SectionChildContainer
            index={index}
            rootClassNames={[universalStyles["no-top-margin"], ...additionalClasses]}
            flex={flex}>
                <div className={styles["text-container"]}>
                    {
                        indicator &&
                        <div 
                            className={styles["indicator"]}
                            style={{
                                background: indicator.background,
                            }}/>
                    }

                    <div className={styles["text"]}>
                        {text}
                    </div>
                </div>

                {
                    cta &&
                    <div className={styles["cta-container"]}>
                        <div 
                            className={styles["cta-hue"]} 
                            style={{
                                background: cta.hue,
                            }}/>
                        
                        <div 
                            className={styles["cta-bg"]}
                            style={{
                                background: cta.hue,
                            }}/>

                        <div className={styles["cta"]}>
                            <a 
                                className={styles["cta-link"]}
                                target="_blank" 
                                href={cta.targetUrl}>
                                    {cta.text}
                                </a>
                        </div>
                    </div>
                }
        </SectionChildContainer>
    );
}