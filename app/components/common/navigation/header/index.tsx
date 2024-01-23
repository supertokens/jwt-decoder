// const ReactShadowRoot = require("react-shadow-root").default;
import { useRef, useState, useEffect } from "react";
import { useSessionContext } from "supertokens-auth-react/recipe/session";

import { sendButtonAnalytics, getPathAndSelectedPage, getLocationPath } from "../../../../utils";

import { getWidget } from "./githubWidget";
import HeaderDropdown, { HeaderDropDownOptions } from "./header-dropdown";

import "./header.module.css";

const BLOG_BANNER_STORAGE_KEY = "show-blog-banner";
const HEADER_RESIZE_BREAKPOINT = "1024px";

interface Props {
    renderWhite?: boolean;
    removeCloneHeader?: any;
}

function getUserInformation() {
    return {
        name: "John Doe"
    };
}

export default function Header(props: Props) {
    const [showHamburger, setShowHamburger] = useState(false);
    const [userName, setUserName] = useState<string | undefined>(undefined);
    const [star, setStar] = useState<number | undefined>(undefined);
    const [showBanner, setShowBanner] = useState(false);
    const [currentScrollTop, setCurrentScrollTop] = useState(0);
    const [hasMounted, setHasMounted] = useState(false);

    const headerRef = useRef<HTMLDivElement>(null);
    const mediaQueryRef = useRef<MediaQueryList>(null);

    const context = useSessionContext();

    const getGithubWidget = () => {
        if (star === undefined) {
            return (
                <a
                    className={props.renderWhite ? "header-cta header-cta-white" : "header-cta"}
                    target="_blank"
                    rel="noopener"
                    href="https://github.com/supertokens/supertokens-core"
                    onClick={() =>
                        sendButtonAnalytics("button_header_githubstar", "v5", {
                            page_selected: getPathAndSelectedPage().pageSelected
                        })
                    }
                >
                    <img
                        width="118px"
                        src="/static/webflow/pricing/images/blankboxgithubstar3x.png"
                        alt="GitHub Stars"
                    />
                </a>
            );
        }
        return (
            <span
                className="header-cta"
                onClick={() =>
                    sendButtonAnalytics("button_header_githubstar", "v5", {
                        page_selected: getPathAndSelectedPage().pageSelected
                    })
                }
                style={{
                    width: "118px",
                    paddingLeft: 0,
                    marginRight: 16,
                    marginLeft: 16
                }}
            >
                {/* <ReactShadowRoot>
                    <span
                        style={{
                            backgroundImage: "url('/static/webflow/pricing/images/blankboxgithubstar3x.png')",
                            backgroundRepeat: "no-repeat"
                        }}
                        dangerouslySetInnerHTML={{
                            __html: getWidget(star)
                        }}
                    ></span>
                </ReactShadowRoot> */}
            </span>
        );
    };

    const fetchGithubStars = async () => {
        return fetch("https://api.github.com/repos/supertokens/supertokens-core")
            .then(res => res.json())
            .then(json => {
                setStar(json.stargazers_count);
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

    const fetchUserName = async () => {
        try {
            const { name } = await getUserInformation();
            setUserName(name);
        } catch (e) {
            // Handle errors appropriately
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

    function handleContributeClick() {
        const { path, pageSelected } = getPathAndSelectedPage();
        if (path !== "contribute" && pageSelected !== undefined) {
            sendButtonAnalytics("button_header_contribute", "v5", { page_selected: pageSelected });
        }
    }

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

    function handleBannerCtaClick() {
        sendButtonAnalytics("button_blog_banner_cta", "v5", {
            option_clicked: "star-us-on-github"
        });
    }

    const closeBanner = (e: React.MouseEvent<HTMLButtonElement>) => {
        window.localStorage.setItem(BLOG_BANNER_STORAGE_KEY, "false");
        setShowBanner(false);
        const blogMeta = window.location.pathname.split("/blog/")[1];
        sendButtonAnalytics("button_blog_banner_closed", "v5", {
            option_clicked: blogMeta
        });
    };
    const doesSessionExist = context.loading === false && context.doesSessionExist;
    const bannerMessage = "If you like SuperTokens, ";

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
        const handleComponentDidMount = () => {
            const doesSessionExist = context.loading === false && context.doesSessionExist;
            if (doesSessionExist && userName === undefined) {
                fetchUserName();
            }
            fetchGithubStars();

            mediaQueryRef.current = window.matchMedia(`(min-width: ${HEADER_RESIZE_BREAKPOINT})`);
            mediaQueryRef.current.addListener(handleMediaQueryChange);

            // Check banner conditions
            const showBannerStorage = window.localStorage.getItem(BLOG_BANNER_STORAGE_KEY);
            const isBlog404Page = document.getElementById("non-whitelisted-page") === null;
            if (
                showBannerStorage === null &&
                (getLocationPath() === "/blog" || getLocationPath().startsWith("/blog/")) &&
                isBlog404Page
            ) {
                setShowBanner(true);
            }

            window.addEventListener("scroll", handleScroll);
            setTimeout(() => {
                setHasMounted(true);
            }, 200);
        };

        handleComponentDidMount();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            mediaQueryRef.current.removeListener(handleMediaQueryChange);
        };
    }, [context, userName, fetchUserName, fetchGithubStars, getLocationPath]);

    return (
        <div id="header-container">
            <div id="sticky-container" ref={headerRef}>
                <div className="header">
                    <a href="/" onClick={handleHomeLogoClick}>
                        <img
                            src={
                                props.renderWhite
                                    ? "/static/assets/logo/logo@3x.png"
                                    : "/static/assets/dark-home/logo.png"
                            }
                            className="header-logo"
                            alt="SuperTokens homepage"
                        />
                    </a>

                    <div className="header-cta-end">
                        <div className="header-actions">
                            <a
                                className={props.renderWhite ? "header-cta header-cta-white" : "header-cta"}
                                href="/pricing"
                                onClick={handlePricingClick}
                            >
                                Pricing
                            </a>
                            <a
                                className={props.renderWhite ? "header-cta header-cta-white" : "header-cta"}
                                href="/docs/guides"
                                onClick={handleDocsGuidesClick}
                            >
                                Documentation
                            </a>

                            <a
                                className={
                                    "underline-highlighted " +
                                    (props.renderWhite ? "header-cta header-cta-white" : "header-cta")
                                }
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
                                headeTitleClickHref=""
                            />
                        </div>

                        {getGithubWidget()}
                        {doesSessionExist ? (
                            <a
                                className={`home-page-button ${props.renderWhite ? "light" : ""}`}
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
                                {userName || "Sign Up"}
                            </a>
                        ) : (
                            <a
                                className={`home-page-button ${props.renderWhite ? "light" : ""}`}
                                href="/auth"
                                onClick={() => sendButtonAnalytics("button_home_header_signup", "v5")}
                            >
                                Sign Up
                            </a>
                        )}
                    </div>
                </div>
                <div className="header-drawer">
                    <div
                        className={`hamburger-button ${showHamburger ? "hamburger-button-close" : ""}`}
                        onClick={toggleHamburger.bind(this)}
                        style={
                            props.renderWhite
                                ? {
                                      backgroundColor: "#f2f2f2"
                                  }
                                : undefined
                        }
                    >
                        <span
                            className="line"
                            style={
                                props.renderWhite
                                    ? {
                                          backgroundColor: "#000000"
                                      }
                                    : undefined
                            }
                        />
                        <span
                            className="line"
                            style={
                                props.renderWhite
                                    ? {
                                          backgroundColor: "#000000"
                                      }
                                    : undefined
                            }
                        />
                        <span
                            className="line"
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
                        <img
                            src={
                                props.renderWhite
                                    ? "/static/assets/logo/logo@3x.png"
                                    : "/static/assets/dark-home/logo.png"
                            }
                            className="header-logo"
                            alt="SuperTokens homepage"
                        />
                    </a>
                </div>
                <div
                    className={`hamburger-menu ${showHamburger ? "hamburger-menu-open" : ""}`}
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
                        headeTitleClickHref=""
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
                    {doesSessionExist ? (
                        <a
                            className={`signup-button ${props.renderWhite ? "light" : ""}`}
                            href="/dashboard-saas"
                            onClick={() => sendButtonAnalytics("button_home_header_signup", "v4")}
                        >
                            {userName || "Sign Up"}
                        </a>
                    ) : (
                        <a
                            className={`signup-button ${props.renderWhite ? "light" : ""}`}
                            href="/auth"
                            onClick={() => sendButtonAnalytics("button_home_header_signup", "v4")}
                        >
                            Sign Up
                        </a>
                    )}
                </div>
            </div>

            <div className={`opacity-toggle ${showHamburger ? "opacity-toggle-true" : ""}`} />
            {showBanner && (
                <div className="st-banner-container">
                    <div className="st-banner">
                        {bannerMessage}
                        <a onClick={handleBannerCtaClick} href="https://github.com/supertokens/supertokens-core">
                            please star us on GitHub
                        </a>
                        ⭐️
                    </div>
                    <button className="st-banner-container__close-button" onClick={closeBanner}>
                        <img src="/static/assets/dark-home/blog-banner-cross.svg" alt="close banner" />
                    </button>
                </div>
            )}
        </div>
    );
}
