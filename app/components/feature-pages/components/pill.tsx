import { CommonComponentProps, PillChildType } from "../types"
import universalStyles from "../../../styles/feature-pages/universal-styles.module.css";
import styles from "../../../styles/feature-pages/components/pill.module.css";
import { getClassNameFromFlex, getMarginTopFromChildIndex } from "../utils";
import { SectionChildContainer } from "./section-child-container";

type Props = CommonComponentProps & {
    config: PillChildType;
}

export const Pill = (props: Props) => {
    const {
        text,
        iconPath,
        rootClassNames,
    } = props.config;

    const additionalClasses = rootClassNames ?? [];

    return (
        <SectionChildContainer 
            index={props.index}
            rootClassNames={[styles["pill-container"], ...additionalClasses]}>
                <div className={styles["pill-text"]}>
                    {text}
                </div>
                
                {
                    iconPath !== undefined && 
                        // This is required because react turns imported images to objects but its still inferred as strings
                        <img className={[styles["pill-icon"]]} {...(iconPath as any)}/>
                }
        </SectionChildContainer>
    );
}