import styles from "./footer.module.css";

import Image, { StaticImageData } from "next/image";
import { getPathAndSelectedPage, sendButtonAnalytics } from "../../../../utils";
import { NavigationAssets } from "../../../../assets/images/navigation";

export default function Footer() {
    function handleHomeLogoClick() {
        const { path, pageSelected } = getPathAndSelectedPage();
        if (path !== "home" && pageSelected !== undefined) {
            sendButtonAnalytics("button_footer_home", "v5", { page_selected: pageSelected });
        }
    }

    function handlePricingClick() {
        const { path, pageSelected } = getPathAndSelectedPage();
        if (path !== "pricing" && pageSelected !== undefined) {
            sendButtonAnalytics("button_footer_pricing", "v5", { page_selected: pageSelected });
        }
    }

    function handleProductRoadmapClick() {
        const { path, pageSelected } = getPathAndSelectedPage();
        if (path !== "product-roadmap" && pageSelected !== undefined) {
            sendButtonAnalytics("button_footer_product_roadmap", "v5", { page_selected: pageSelected });
        }
    }

    function handleDocsClick() {
        const { path, pageSelected } = getPathAndSelectedPage();
        if (path !== "docs" && pageSelected !== undefined) {
            sendButtonAnalytics("button_footer_documentation", "v5", { page_selected: pageSelected });
        }
    }

    function handleContributeClick() {
        const { path, pageSelected } = getPathAndSelectedPage();
        if (path !== "contribute" && pageSelected !== undefined) {
            sendButtonAnalytics("button_footer_contribute", "v5", { page_selected: pageSelected });
        }
    }

    function handleBlogClick() {
        const { path, pageSelected } = getPathAndSelectedPage();
        if (path !== "blog" && pageSelected !== undefined) {
            sendButtonAnalytics("button_footer_blog", "v5", { page_selected: pageSelected });
        }
    }

    function handleCareersClick() {
        const { path, pageSelected } = getPathAndSelectedPage();
        if (path !== "blog" && pageSelected !== undefined) {
            sendButtonAnalytics("button_footer_blog", "v5", { page_selected: pageSelected });
        }
    }

    function handleConsultancyClick() {
        const { path, pageSelected } = getPathAndSelectedPage();
        if (path !== "consultancy" && pageSelected !== undefined) {
            sendButtonAnalytics("button_footer_getademo", "v5", {
                page_selected: pageSelected,
                button_text: "Consult an expert"
            });
        }
    }

    function handleUseOssClick() {
        const { path, pageSelected } = getPathAndSelectedPage();
        if (path !== "use-oss" && pageSelected !== undefined) {
            sendButtonAnalytics("button_footer_ST_selfhosted", "v5", { page_selected: pageSelected });
        }
    }

    function handleTosClick() {
        const { pageSelected } = getPathAndSelectedPage();
        sendButtonAnalytics("button_footer_TOS", "v5", { page_selected: pageSelected });
    }

    function handlePrivacyClick() {
        const { pageSelected } = getPathAndSelectedPage();
        sendButtonAnalytics("button_footer_privacypolicy", "v5", { page_selected: pageSelected });
    }

    function handleSecurityClick() {
        const { pageSelected } = getPathAndSelectedPage();
        sendButtonAnalytics("button_footer_security", "v5", { page_selected: pageSelected });
    }

    function handleDiscordClick() {
        const { pageSelected } = getPathAndSelectedPage();
        sendButtonAnalytics("button_footer_discord", "v5", { page_selected: pageSelected });
    }

    function handleApiStatusClick() {
        sendButtonAnalytics("button_footer_apistatus", "v5");
    }

    function handleCustomersClick() {
        const { pageSelected } = getPathAndSelectedPage();
        sendButtonAnalytics("button_footer_customers", "v5", { page_selected: pageSelected });
    }

    function handleCommunityClick() {
        const { pageSelected } = getPathAndSelectedPage();
        sendButtonAnalytics("button_footer_community", "v5", { page_selected: pageSelected });
    }

    function handleComparisonBlogPostClick() {
        sendButtonAnalytics("button_footer_comparison-blog", "v5");
    }

    function handleJwtDecoderClick() {
        sendButtonAnalytics("button_footer_jwtdecoder", "v5");
    }

    function handleMagicLinksClick() {
        sendButtonAnalytics("button_footer_magiclinks", "v5");
    }

    function handleSSOClick() {
        sendButtonAnalytics("button_footer_sso", "v5");
    }

    function handleMultitenancyClick() {
        sendButtonAnalytics("button_footer_multi_tenant", "v5");
    }

    function handleAccountLinkingClick() {
        sendButtonAnalytics("button_footer_account_linking", "v5");
    }

    function handleSocialLoginClick() {
        sendButtonAnalytics("button_footer_social_login", "v5");
    }

    function handlePasswordlessLoginClick() {
        sendButtonAnalytics("button_footer_passwordless_login", "v5");
    }

    function handleEmailPasswordLoginClick() {
        sendButtonAnalytics("button_footer_email_password_login", "v5");
    }

    return (
        <footer className={styles.footer_container}>
            <section className={styles.footer}>
                <div className={styles.section_column + " " + styles.link_list}>
                    <div className={styles.section_div}>
                        <span className={styles.footer_heading}>Product</span>
                        <a href="/pricing" target="_blank" onClick={handlePricingClick}>
                            Pricing
                        </a>
                        <a href="/product-roadmap" target="_blank" onClick={handleProductRoadmapClick}>
                            Product Roadmap
                        </a>
                        <a
                            href="/docs/passwordless/pre-built-ui/setup/core/with-docker"
                            target="_blank"
                            onClick={handleUseOssClick}
                        >
                            Self Hosted
                        </a>
                    </div>
                    <div className={styles.section_div}>
                        <span className={styles.footer_heading + " " + styles.space_top}>Developers</span>
                        <a href="/docs/guides" target="_blank" onClick={handleDocsClick}>
                            Recipe/Implementation guides
                        </a>
                        <a href="/docs/community/apis" target="_blank" onClick={handleDocsClick}>
                            API References
                        </a>
                    </div>
                </div>
                <div className={styles.section_column + " " + styles.link_list}>
                    <div className={styles.section_div + " " + styles.full_height}>
                        <span className={styles.footer_heading}>Features</span>
                        <a href="/features/email-magic-links" target="_blank" onClick={handleMagicLinksClick}>
                            Magic Link
                        </a>
                        <a href="/features/single-sign-on" target="_blank" onClick={handleSSOClick}>
                            SSO(Single-Sign On)
                        </a>
                        <a href="/features/multi-tenancy" target="_blank" onClick={handleMultitenancyClick}>
                            Multi-Tenant
                        </a>
                        <a href="/features/account-linking" target="_blank" onClick={handleAccountLinkingClick}>
                            Account Linking
                        </a>
                        <a href="/features/social-login" target="_blank" onClick={handleSocialLoginClick}>
                            Social Login
                        </a>
                        <a href="/features/passwordless-login" target="_blank" onClick={handlePasswordlessLoginClick}>
                            Passwordless Login
                        </a>
                        <a
                            href="/features/email-password-authentication"
                            target="_blank"
                            onClick={handleEmailPasswordLoginClick}
                        >
                            Email Password Login
                        </a>

                        <div className={styles.spacer} />
                    </div>
                </div>
                <div className={styles.section_column + " " + styles.link_list}>
                    <div className={styles.section_div + " " + styles.full_height}>
                        <span className={styles.footer_heading}>Company</span>
                        <a href="/blog" target="_blank" onClick={handleBlogClick}>
                            Blog
                        </a>
                        <a
                            href="https://angel.co/company/supertokens/jobs"
                            target="_blank"
                            onClick={handleCareersClick}
                        >
                            Careers
                        </a>
                        <a href="/customers" target="_blank" onClick={handleCustomersClick}>
                            Customers
                        </a>
                        <a href="https://community.supertokens.com" target="_blank" onClick={handleCommunityClick}>
                            Community
                        </a>
                        <a href="/security" target="_blank" onClick={handleSecurityClick}>
                            Security at SuperTokens
                        </a>
                    </div>
                </div>
                <div className={styles.section_column + " " + styles.link_list}>
                    <div className={styles.section_div}>
                        <span className={styles.footer_heading}>Resources</span>
                        <a href="/discord" target="_blank" onClick={handleDiscordClick}>
                            Support
                        </a>
                        <a href="/docs/contribute/introduction" target="_blank" onClick={handleContributeClick}>
                            Contribute
                        </a>
                        <a href="/consultancy" target="_blank" onClick={handleConsultancyClick}>
                            Contact Sales
                        </a>
                        <a href="/legal/terms-and-conditions" target="_blank" onClick={handleTosClick}>
                            Terms of Service
                        </a>
                        <a href="/legal/privacy-policy" target="_blank" onClick={handlePrivacyClick}>
                            Privacy Policy
                        </a>
                        <a
                            href="https://supertokens.instatus.com/"
                            onClick={handleApiStatusClick}
                            target="_blank"
                            className={styles.footer_uptime_link}
                        >
                            API Status
                            <span className={styles.footer_uptime_link__pill}>
                                <Image {...NavigationAssets.Footer.Caret} alt="API Status Caret" />
                                99.99%
                            </span>
                        </a>
                        <a
                            href="/blog/auth0-alternatives-auth0-vs-okta-vs-cognito-vs-supertokens"
                            onClick={handleComparisonBlogPostClick}
                            target="_blank"
                        >
                            Auth0 vs SuperTokens
                            <br /> vs Cognito
                        </a>
                        <a href="/jwt-encoder-decoder" target="_blank" onClick={handleJwtDecoderClick}>
                            JWT Decoder
                        </a>
                    </div>
                </div>
            </section>
            <div className={styles.divider} />
            <section className={styles.footer_bottom}>
                <div className={styles.compliance_container}>
                    <div>
                        <a href="/" className={styles.footer_logo_link} onClick={handleHomeLogoClick}>
                            <Image
                                {...NavigationAssets.Footer.SupertokensLogo}
                                className={styles.footer_logo}
                                alt="SuperTokens homepage"
                            />
                        </a>
                        <div className={styles.spacer} />
                        <p className={styles.copyright}>©SuperTokens {new Date().getFullYear()}</p>
                    </div>

                    <SocialLinkSection className={styles.hidden_lg} />

                    <div className={styles.compliance}>
                        <a className={styles.link_container} href="https://security.supertokens.com/" target={"_blank"}>
                            <Image
                                className={styles.img_compliance}
                                {...NavigationAssets.Footer.SOC2}
                                alt="soc2 compliant certificate"
                            />

                            <span className={styles.link_text}>View Report</span>
                        </a>
                    </div>
                </div>
                <SocialLinkSection className={styles.hidden_md} />
            </section>
        </footer>
    );
}

type SocialLinksSectionProps = {
    className?: string;
};

function SocialLinkSection({ className }: SocialLinksSectionProps) {
    function renderSocialIcons(className: string, image: StaticImageData, link: string, alt: string) {
        return (
            <a key={link} rel="noopener" href={link} target="_blank">
                <Image className={styles[`img_${className}`]} alt={alt} {...image} />
            </a>
        );
    }

    function handleDiscordClick() {
        const { pageSelected } = getPathAndSelectedPage();
        sendButtonAnalytics("button_footer_discord", "v5", { page_selected: pageSelected });
    }

    return (
        <div className={`${styles.section_div} ${styles.reach_us} ${className}`}>
            <div className={styles.social_links}>
                <a href="/discord" target="_blank" onClick={handleDiscordClick}>
                    <Image
                        alt="Join SuperTokens on Discord"
                        {...NavigationAssets.Footer.Discord}
                        className={styles.discord_logo}
                    />
                </a>
                {renderSocialIcons(
                    "mail",
                    NavigationAssets.Footer.Mail,
                    "mailto:team@supertokens.com",
                    "Email SuperTokens"
                )}
                {renderSocialIcons(
                    "linkedin",
                    NavigationAssets.Footer.Linkedin,
                    "https://www.linkedin.com/company/supertokens/",
                    "Connect with SuperTokens on LinkedIn"
                )}
                {renderSocialIcons(
                    "twitter",
                    NavigationAssets.Footer.Twitter,
                    "https://twitter.com/supertokensio",
                    "Connect with SuperTokens on Twitter"
                )}
                {renderSocialIcons(
                    "git",
                    NavigationAssets.Footer.Github,
                    "https://github.com/supertokens/supertokens-core",
                    "SuperTokens on Github"
                )}
            </div>
        </div>
    );
}
