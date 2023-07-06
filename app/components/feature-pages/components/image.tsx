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
        layout,
        rootClassNames,
        imageClassName,
    } = config;

    const additionalClasses = rootClassNames ?? [];

    return (
        <SectionChildContainer
            index={index}
            rootClassNames={[...additionalClasses, imageClassName]}>
                <img 
                    src={(image as any).src}
                    style={{
                        ...layout,
                    }}/>
        </SectionChildContainer>
    );
}