import { useRef, useState, useEffect } from "react";

import { sendButtonAnalytics, getPathAndSelectedPage } from "../../../../utils";

import HeaderDropdown, { HeaderDropDownOptions } from "./header-dropdown";

import styles from "./header.module.css";
import Image from "next/image";

interface Props {
    renderWhite?: boolean;
    removeCloneHeader?: any;
}

function getUserInformation() {
    return {
        name: "Chakravarthi Medicharla"
    };
}

export default function Header(props: Props) {
    const [showHamburger, setShowHamburger] = useState(false);
    const [userName, setUserName] = useState<string | undefined>(undefined);
    const [githubStarsCount, setGithubStarsCount] = useState<number | undefined>(undefined);
    const [currentScrollTop, setCurrentScrollTop] = useState(0);
    const [hasMounted, setHasMounted] = useState(false);

    const headerRef = useRef<HTMLDivElement>(null);
    const mediaQueryRef = useRef<MediaQueryList>(null);

    const getGithubWidget = () => {
        return (
            <a
                className={`${styles.header_cta} ${props.renderWhite ? styles.header_cta_white : ""}`}
                target="_blank"
                rel="noopener"
                style={{
                    position: "relative"
                }}
                href="https://github.com/supertokens/supertokens-core"
                onClick={() =>
                    sendButtonAnalytics("button_header_githubstar", "v5", {
                        page_selected: getPathAndSelectedPage().pageSelected
                    })
                }
            >
                <Image
                    height={26}
                    width={118}
                    src="/static/webflow/pricing/images/blankboxgithubstar3x.png"
                    alt="GitHub Stars"
                />
                {githubStarsCount !== undefined ? (
                    <>
                        <div aria-hidden="true" className={styles.github_star_logo}>
                            <Image height={16} width={16} src="/static/assets/navbar/github.png" alt="github icon" />
                            <span style={{ color: "#000" }}>Star</span>
                        </div>
                        <span aria-label={`${githubStarsCount} github stars`} className={styles.github_star_count}>
                            {githubStarsCount}
                        </span>
                    </>
                ) : null}
            </a>
        );
    };

    const fetchGithubStars = async () => {
        return fetch("https://api.github.com/repos/supertokens/supertokens-core")
            .then(res => res.json())
            .then(json => {
                setGithubStarsCount(json.stargazers_count);
            })
            .catch(_ => {});
    };

    const toggleHamburger = () => {
        setShowHamburger(!showHamburger);
    };

    const handleScroll = () => {
        if (headerRef.current && hasMounted) {
            const scrollY = window.scrollY;
            const offsetHeight = headerRef.current.offsetHeight;

            if (currentScrollTop < scrollY && scrollY > 2 * offsetHeight) {
                headerRef.current.classList.add("hidden");
            } else if (currentScrollTop > scrollY && !(scrollY <= offsetHeight)) {
                headerRef.current.classList.remove("hidden");
            }

            setCurrentScrollTop(scrollY);
        }
    };

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
        if (showHamburger) {
            if (e.matches) {
                setShowHamburger(false);
                document.body.style.overflowY = "initial";
            } else {
                document.body.style.overflowY = "hidden";
            }
        }
    };

    const handleHomeLogoClick = () => {
        const { path, pageSelected } = getPathAndSelectedPage();
        if (path !== "home" && pageSelected !== undefined) {
            sendButtonAnalytics("button_header_home", "v5", { page_selected: pageSelected });
        }
    };

    const handleBlogClick = () => {
        const { path, pageSelected } = getPathAndSelectedPage();
        if (path !== "blog" && pageSelected !== undefined) {
            sendButtonAnalytics("button_header_blog", "v5", { page_selected: pageSelected });
        }
    };

    const handlePricingClick = () => {
        const { path, pageSelected } = getPathAndSelectedPage();
        if (path !== "pricing" && pageSelected !== undefined) {
            sendButtonAnalytics("button_header_pricing", "v5", { page_selected: pageSelected });
        }
    };

    function handleRoadmapClick() {
        const { path, pageSelected } = getPathAndSelectedPage();
        if (path !== "product-roadmap" && pageSelected !== undefined) {
            sendButtonAnalytics("button_header_product_roadmap", "v5", { page_selected: pageSelected });
        }
    }

    function handleGithubClick() {
        const { pageSelected } = getPathAndSelectedPage();
        if (pageSelected !== undefined) {
            sendButtonAnalytics("button_header_github", "v5", { page_selected: pageSelected });
        }
    }

    function handleConsultancyClick() {
        const { pageSelected } = getPathAndSelectedPage();
        if (pageSelected !== undefined) {
            sendButtonAnalytics("button_header_consultancy", "v5", { page_selected: pageSelected });
        }
    }

    function handleDiscordClick() {
        const { pageSelected } = getPathAndSelectedPage();
        sendButtonAnalytics("button_header_discord", "v5", { page_selected: pageSelected });
    }

    function handleCustomersClick() {
        const { pageSelected } = getPathAndSelectedPage();
        sendButtonAnalytics("button_header_customers", "v5", { page_selected: pageSelected });
    }

    function handleDocsGuidesClick() {
        const { pageSelected } = getPathAndSelectedPage();
        sendButtonAnalytics("button_header_documentation_userguides", "v5", { pageSelected });
    }

    function handleResourcesClick() {
        const { pageSelected } = getPathAndSelectedPage();
        sendButtonAnalytics("button_header_resources", "v5", { pageSelected });
    }

    const resourcesDropDownLinks: HeaderDropDownOptions[] = [
        {
            value: "Product Roadmap",
            href: "/product-roadmap",
            optionClickEvent: handleRoadmapClick
        },
        {
            value: "Blog",
            href: "/blog",
            optionClickEvent: handleBlogClick
        },
        {
            value: "Customers",
            href: "/customers",
            optionClickEvent: handleCustomersClick
        },
        {
            value: "Discord",
            href: "/discord",
            optionClickEvent: handleDiscordClick
        }
    ];

    useEffect(() => {
        mediaQueryRef.current = window.matchMedia(`(min-width: 1024px)`);
        mediaQueryRef.current.addListener(handleMediaQueryChange);

        window.addEventListener("scroll", handleScroll);
        setTimeout(() => {
            setHasMounted(true);
        }, 200);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            mediaQueryRef.current.removeListener(handleMediaQueryChange);
        };
    }, []);

    useEffect(() => {
        const fetchUserName = async () => {
            try {
                const { name } = await getUserInformation();
                setUserName(name);
            } catch (_) {
                // ignore
            }
        };
        if (userName === undefined) {
            fetchUserName();
        }
        // fetchGithubStars();
    }, []);

    return (
        <header className={styles.header_container}>
            <div className={styles.sticky_container} ref={headerRef}>
                <nav className={styles.header}>
                    <a href="/" onClick={handleHomeLogoClick}>
                        <Image
                            height={30}
                            width={200}
                            priority
                            src={
                                props.renderWhite
                                    ? "/static/assets/logo/logo@3x.png"
                                    : "/static/assets/dark-home/logo.png"
                            }
                            className={styles.header_logo}
                            alt="SuperTokens homepage"
                        />
                    </a>

                    <div className={styles.header_cta_end}>
                        <div className={styles.header_actions}>
                            <a
                                className={`${styles.header_cta} ${props.renderWhite ? styles.header_cta_white : ""}`}
                                href="/pricing"
                                onClick={handlePricingClick}
                            >
                                Pricing
                            </a>
                            <a
                                className={`${styles.header_cta} ${props.renderWhite ? styles.header_cta_white : ""}`}
                                href="/docs/guides"
                                onClick={handleDocsGuidesClick}
                            >
                                Documentation
                            </a>

                            <a
                                className={`${styles.header_cta} ${styles.underline_highlighted} ${
                                    props.renderWhite ? styles.header_cta_white : ""
                                }`}
                                href="/consultancy"
                                onClick={handleConsultancyClick}
                            >
                                Contact Sales
                            </a>

                            <HeaderDropdown
                                title="Resources"
                                options={resourcesDropDownLinks}
                                theme={props.renderWhite ? "light" : "dark"}
                                titleClickHandler={handleResourcesClick}
                            />
                        </div>

                        {getGithubWidget()}
                        <a
                            className={`${styles.home_page_button} ${props.renderWhite ? styles.light : ""}`}
                            href="/dashboard-saas"
                            onClick={() => sendButtonAnalytics("button_home_header_dashboard", "v5")}
                            style={
                                props.renderWhite
                                    ? {
                                          borderColor: "#dddddd"
                                      }
                                    : undefined
                            }
                        >
                            {userName ? userName : "Sign Up"}
                        </a>
                    </div>
                </nav>
                <nav className={styles.header_drawer}>
                    <div
                        className={`${styles.hamburger_button} ${showHamburger ? styles.hamburger_button_close : ""}`}
                        onClick={toggleHamburger}
                        style={
                            props.renderWhite
                                ? {
                                      backgroundColor: "#f2f2f2"
                                  }
                                : undefined
                        }
                    >
                        <span
                            className={styles.line}
                            style={
                                props.renderWhite
                                    ? {
                                          backgroundColor: "#000000"
                                      }
                                    : undefined
                            }
                        />
                        <span
                            className={styles.line}
                            style={
                                props.renderWhite
                                    ? {
                                          backgroundColor: "#000000"
                                      }
                                    : undefined
                            }
                        />
                        <span
                            className={styles.line}
                            style={
                                props.renderWhite
                                    ? {
                                          backgroundColor: "#000000"
                                      }
                                    : undefined
                            }
                        />
                    </div>
                    <a href="/" onClick={handleHomeLogoClick}>
                        <Image
                            priority
                            height={30}
                            width={200}
                            src={
                                props.renderWhite
                                    ? "/static/assets/logo/logo@3x.png"
                                    : "/static/assets/dark-home/logo.png"
                            }
                            className={styles.header_logo}
                            alt="SuperTokens homepage"
                        />
                    </a>
                </nav>
                <div
                    className={`${styles.hamburger_menu} ${showHamburger ? styles.hamburger_menu_open : ""}`}
                    style={
                        props.renderWhite
                            ? {
                                  backgroundColor: "#ffffff"
                              }
                            : undefined
                    }
                >
                    <a href="/docs/guides">
                        <h4
                            onClick={handleDocsGuidesClick}
                            style={
                                props.renderWhite
                                    ? {
                                          color: "#000000"
                                      }
                                    : undefined
                            }
                        >
                            Documentation
                        </h4>
                    </a>
                    <a href="/pricing">
                        <h4
                            onClick={handlePricingClick}
                            style={
                                props.renderWhite
                                    ? {
                                          color: "#000000"
                                      }
                                    : undefined
                            }
                        >
                            Pricing
                        </h4>
                    </a>
                    <HeaderDropdown
                        title="Resources"
                        options={resourcesDropDownLinks}
                        theme={props.renderWhite ? "light" : "dark"}
                        type="mobile"
                    />
                    <a href="/consultancy">
                        <h4
                            onClick={handleConsultancyClick}
                            style={
                                props.renderWhite
                                    ? {
                                          color: "#000000"
                                      }
                                    : undefined
                            }
                        >
                            Contact Sales
                        </h4>
                    </a>
                    <a href="https://github.com/supertokens/supertokens-core" rel="noopener" target="_blank">
                        <h4
                            onClick={handleGithubClick}
                            style={
                                props.renderWhite
                                    ? {
                                          color: "#000000"
                                      }
                                    : undefined
                            }
                        >
                            GitHub
                        </h4>
                    </a>
                    <a
                        className={`${styles.signup_button} ${props.renderWhite ? styles.light : ""}`}
                        href="/dashboard-saas"
                        onClick={() => sendButtonAnalytics("button_home_header_signup", "v4")}
                    >
                        {userName ? userName : "Sign Up"}
                    </a>
                </div>
            </div>
        </header>
    );
}
