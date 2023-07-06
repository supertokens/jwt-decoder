import { CommonComponentProps, TextChildType } from "../types";
import { SectionChildContainer } from "./section-child-container";
import styles from "../../../styles/feature-pages/components/text.module.css";

type Props = CommonComponentProps & {
    config: TextChildType;
}

export const TextChild = (props: Props) => {
    const {
        flex,
        text,
        rootClassNames
    } = props.config;

    const additionalClasses = rootClassNames ?? [];

    return (
        <SectionChildContainer
            index={props.index}
            flex={flex}
            rootClassNames={[...additionalClasses]}>
                <div className={styles["text-child-text-container"]}>
                    {text}
                </div>
        </SectionChildContainer>
    );
}