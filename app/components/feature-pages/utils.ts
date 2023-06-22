export function getClassNameFromFlex(flex?: "row" | "column"): string {
    return flex === undefined ? "column" : flex;
}

export function getMarginTopFromChildIndex(index: number): string {
    if (index === 0) {
        return "0px"
    }

    return "62px";
}