export function getClassNameFromFlex(flex?: "row" | "column"): string {
    return flex === undefined || flex === "column" ? "section-column" : "section-row";
}

export function getMarginTopFromChildIndex(index: number): string {
    if (index === 0) {
        return "0px"
    }

    return "62px";
}