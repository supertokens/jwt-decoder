import React, { useEffect, useRef } from "react";

import styles from "./header-dropdown.module.css";
import headerStyles from "./header.module.css";
import { useState } from "react";
import Image from "next/image";

export type HeaderDropDownOptions = {
    value: string;
    href: string;
    iconHref?: string;
    optionClickEvent?: React.MouseEventHandler<HTMLAnchorElement>;
};

interface HeaderDropdownPropTypes {
    title: string;
    options: HeaderDropDownOptions[];
    theme: "light" | "dark";
    type?: "mobile";
    className?: string;
    titleClickHandler?: React.MouseEventHandler<HTMLDivElement>;
}

const HeaderDropdown = (props: HeaderDropdownPropTypes) => {
    const targetElementRef = useRef<HTMLDivElement>(null);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    useEffect(() => {
        if (targetElementRef.current !== undefined && targetElementRef.current !== null) {
            targetElementRef.current.addEventListener("mouseover", handleMenuOpen);
            targetElementRef.current.addEventListener("mouseleave", handleMenuClose);
        }

        return () => {
            if (targetElementRef.current !== undefined && targetElementRef.current !== null) {
                targetElementRef.current.removeEventListener("mouseover", handleMenuOpen);
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
                        ? styles.header_cta_dropdown_mobile__links__link
                        : styles.header_cta_dropdown__links__link
                }
                onClick={option.optionClickEvent}
            >
                {option.value}
                {option.iconHref && <Image height={20} width={20} src={option.iconHref} alt={option.value} />}
            </a>
        );
    });

    if (props.type === "mobile") {
        return (
            <div
                className={`${styles.header_cta_dropdown_mobile} ${props.className || ""} ${
                    styles[`${props.theme}-theme`]
                }`}
            >
                <div
                    className={`${styles.header_cta_dropdown_mobile__target} ${
                        headerStyles.header_cta
                    } ${isMenuVisible && styles.active}`}
                    onClick={handleMenuToggle}
                >
                    <span>{props.title}</span>

                    <Image
                        height={6}
                        width={8}
                        src={`/static/assets/dark-home/header-dropdown-caret-${props.theme}-background.png`}
                        alt="open dropdown"
                    />
                </div>

                <div
                    className={`${styles.header_cta_dropdown_mobile__links} ${isMenuVisible && styles.active}`}
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
            className={`${styles.header_cta_dropdown} ${props.className || ""} ${styles[`${props.theme}-theme`]}`}
        >
            <div
                className={`${styles.header_cta_dropdown__target} ${headerStyles.header_cta} ${isMenuVisible &&
                    styles.active} ${props.theme === "light" && headerStyles.header_cta_white}`}
                onClick={props.titleClickHandler}
            >
                <span>{props.title}</span>
                <Image
                    height={6}
                    width={8}
                    src={`/static/assets/dark-home/header-dropdown-caret-${props.theme}-background.png`}
                    alt="open dropdown"
                />
            </div>

            <div className={`${styles.header_cta_dropdown__links} ${isMenuVisible && styles.active}`}>
                {dropdownLinks}

                <span className={styles.header_cta_dropdown__links__caret}></span>
            </div>
        </div>
    );
};

export default HeaderDropdown;
