import { CommonComponentProps, ImageChildType } from "../types"
import { SectionChildContainer } from "./section-child-container";
import styles from "../../../styles/feature-pages/components/image.module.css";

type Props = CommonComponentProps & {
    config: ImageChildType;
}

export const ImageChild = (props: Props) => {
    const {
        index,
        config,
    } = props;

    const {
        image,
        maxWidth,
        dimensions,
        layout,
    } = config;

    return (
        <SectionChildContainer
            index={index}
            rootClassNames={[styles["no-margin-top"]]}
            maxWidth={maxWidth}>
                <img 
                    {...(image) as any}
                    {...dimensions}
                    style={{
                        ...layout,
                    }}/>
        </SectionChildContainer>
    );
}