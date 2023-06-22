import { PropsWithChildren } from "react";
import universalStyles from "../../../styles/feature-pages/universal-styles.module.css";
import { getClassNameFromFlex, getMarginTopFromChildIndex } from "../utils";

type Props = {
    index: number;
    rootClassNames: string[];
    maxWidth?: string;
    flex?: "row" | "column";
}

export const SectionChildContainer = (props: PropsWithChildren<Props>) => {
    const {
        maxWidth,
        rootClassNames,
        flex,
        index,
        children,
    } = props;

    return (
        <div 
            className={`${universalStyles["section-child-container"]} ${universalStyles[getClassNameFromFlex(flex)]} ${rootClassNames.join(" ")}`}
            style={{
                maxWidth: maxWidth,
                minWidth: maxWidth,
                marginTop: getMarginTopFromChildIndex(index),
            }}>
                {children}
        </div>
    );
}