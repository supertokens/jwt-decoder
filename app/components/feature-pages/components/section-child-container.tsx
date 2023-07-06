import { CSSProperties, PropsWithChildren } from "react";
import universalStyles from "../../../styles/feature-pages/universal-styles.module.css";
import { getClassNameFromFlex, getMarginTopFromChildIndex } from "../utils";

type Props = {
    index: number;
    rootClassNames: string[];
    flex?: "row" | "column";
}

export const SectionChildContainer = (props: PropsWithChildren<Props>) => {
    const {
        rootClassNames,
        flex,
        index,
        children,
    } = props;

    let marginTopClassName = "";

    if (index !== 0) {
        marginTopClassName = universalStyles["section-child-container-top-margin"];
    }
    
    return (
        <div 
            className={`${marginTopClassName} ${universalStyles["section-child-container"]} ${universalStyles[getClassNameFromFlex(flex)]} ${rootClassNames.join(" ")}`}>
                {children}
        </div>
    );
}