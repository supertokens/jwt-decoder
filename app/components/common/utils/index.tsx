import React from "react";

export const navigateOnButtonClick = (path: string, event: React.MouseEvent<HTMLButtonElement>) => {
    let shouldOpenNewTab = false;
    if (event.metaKey || event.ctrlKey) {
        shouldOpenNewTab = true;
    }

    window.open(path, shouldOpenNewTab ? "_blank" : "_self");
}