import React from "react";

import "./header-dropdown.module.css";

export type HeaderDropDownOptions = {
    value: string;
    href: string;
    iconHref?: string;
    optionClickEvent?: React.MouseEventHandler<HTMLAnchorElement>;
};

interface HeaderDropdownPropTypes {
    title: string;
    options: HeaderDropDownOptions[];
    headeTitleClickHref: string;
    theme: "light" | "dark";
    type?: "mobile";
    className?: string;
    titleClickHandler?: React.MouseEventHandler<HTMLAnchorElement>;
}

const HeaderDropdown = (props: HeaderDropdownPropTypes) => {
    const targetElementRef = React.useRef<HTMLDivElement>(null);
    const [isMenuVisible, setIsMenuVisible] = React.useState(false);

    // add mouseover and mouseleave event listeners to ref element on mount
    React.useEffect(() => {
        if (targetElementRef.current !== undefined && targetElementRef.current !== null) {
            // add mouseover
            targetElementRef.current.addEventListener("mouseover", handleMenuOpen);
            // add mouseleave
            targetElementRef.current.addEventListener("mouseleave", handleMenuClose);
        }

        return () => {
            if (targetElementRef.current !== undefined && targetElementRef.current !== null) {
                // remove mouseover
                targetElementRef.current.removeEventListener("mouseover", handleMenuOpen);
                // remove mouseleave
                targetElementRef.current.removeEventListener("mouseleave", handleMenuClose);
            }
        };
    }, []);

    const handleMenuOpen = () => {
        if (!isMenuVisible) {
            setIsMenuVisible(true);
        }
    };

    const handleMenuClose = () => {
        if (isMenuVisible) {
            setIsMenuVisible(false);
        }
    };

    const handleMenuToggle = () => {
        setIsMenuVisible(prevValue => !prevValue);
    };

    const dropdownLinks = props.options.map(option => {
        return (
            <a
                key={option.value}
                href={option.href}
                className={
                    props.type === "mobile"
                        ? "header-cta-dropdown-mobile__links__link"
                        : "header-cta-dropdown__links__link"
                }
                onClick={option.optionClickEvent}
            >
                {option.value}
                {option.iconHref && <img src={option.iconHref} alt={option.value} />}
            </a>
        );
    });

    if (props.type === "mobile") {
        return (
            <div className={`header-cta-dropdown-mobile ${props.className || ""} ${props.theme}-theme`}>
                <div
                    className={`header-cta-dropdown-mobile__target header-cta ${isMenuVisible &&
                        "active"} ${props.theme === "light" && "header-cta-white"}`}
                    onClick={handleMenuToggle}
                >
                    <span>{props.title}</span>

                    <img
                        src={`/static/assets/dark-home/header-dropdown-caret-${props.theme}-background.png`}
                        alt="open dropdown"
                    />
                </div>

                <div
                    className={`header-cta-dropdown-mobile__links ${isMenuVisible && "active"}`}
                    style={{
                        height: `${44 * props.options.length}px`,
                        maxHeight: isMenuVisible ? `${44 * props.options.length}px` : "0px"
                    }}
                >
                    {dropdownLinks}
                </div>
            </div>
        );
    }

    return (
        <div
            onMouseOver={handleMenuOpen}
            onMouseLeave={handleMenuClose}
            className={`header-cta-dropdown ${props.className || ""} ${props.theme}-theme`}
        >
            <a
                className={`header-cta-dropdown__target header-cta ${isMenuVisible && "active"} ${props.theme ===
                    "light" && "header-cta-white"}`}
                href={props.headeTitleClickHref === "" ? undefined : props.headeTitleClickHref}
                onClick={props.titleClickHandler}
            >
                <span>{props.title}</span>
                <img
                    src={`/static/assets/dark-home/header-dropdown-caret-${props.theme}-background.png`}
                    alt="open dropdown"
                />
            </a>

            <div className={`header-cta-dropdown__links ${isMenuVisible && "active"}`}>
                {dropdownLinks}

                <span className="header-cta-dropdown__links__caret"></span>
            </div>
        </div>
    );
};

export default HeaderDropdown;
