import { CommonComponentProps, TextChildType } from "../types";
import { SectionChildContainer } from "./section-child-container";
import styles from "../../../styles/feature-pages/components/text.module.css";

type Props = CommonComponentProps & {
    config: TextChildType;
}

export const TextChild = (props: Props) => {
    const {
        maxWidth,
        flex,
        text,
    } = props.config;

    return (
        <SectionChildContainer
            index={props.index}
            maxWidth={maxWidth}
            flex={flex}
            rootClassNames={[]}>
                <div className={styles["text-child-text-container"]}>
                    {text}
                </div>
        </SectionChildContainer>
    );
}