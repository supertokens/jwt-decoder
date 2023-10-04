import { renderSection } from "../feature-page-base"
import {
    FeaturePageIcons,
} from "../../../assets/images";
import supertokensBenefitsStyles from "../../../styles/feature-pages/components/bullet-list.module.css";
import { FeaturePageSectionType, PreBuiltType } from "../types";
import accountLinkingConfig from "./configs/account-linking-config";

type Props = {
    index: number;
    type: PreBuiltType;
}

const magicLinksConfig: FeaturePageSectionType = {
    divider: {
        dividerBackground: "linear-gradient(45deg, rgba(255, 153, 51, 0) 0%,rgba(255, 153, 51, 0.20) 45%, rgba(255, 153, 51, 0) 100%)",
        hueColor: "linear-gradient(45deg,rgba(255, 153, 51, 0.20),rgba(255, 153, 51, 0.20))",
    },
    children: [
        {
            type: "title-subtitle-cta",
            flex: "column",
            title: {
                text: "SuperTokens Benefits",
                highlight: {
                    mode: "grey-out",
                    texts: ["Benefits"],
                },
            },
            supertext: "Why use SuperTokens?",
        },
        {
            type: "bullets-list",
            direction: "vertical",
            flex: "column",
            spacing: 132,
            addBlur: true,
            backgroundConfig: {
                background: FeaturePageIcons.SuperTokensBenefits.Background,
                position: "right",
                right: "-120px",
                top: "-60px",
                bottom: "-60px",
            },
            rootClassNames: [supertokensBenefitsStyles["supertokens-benefits-bullet-list"]],
            bullets: [
                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #F93 0%, #ED1F18 100%)",
                    title: "We worry about small details",
                    subtitle: "Authentication is all we do. We build magic links URLs based off an identifier which associates the URL with the user's email ID. We ensure that the URL expires within a certain period of time. And we solve all the edge cases with magic links.",
                    imagePath: FeaturePageIcons.SuperTokensBenefits.SmallDetails as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },

                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #54F0FF 0%, #345BD3 100%)",
                    title: "Customizability",
                    subtitle: "Change everything from the content of the email, use your own SMTP server or external service, implement custom email logic, and even how the authentication screens look.",
                    imagePath: FeaturePageIcons.SuperTokensBenefits.Customizability as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },

                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #CEF5B8 0%, #168567 100%)",
                    title: "Open Source and self-hosted",
                    subtitle: "Self-hosting with SuperTokens is free. Our core project has over 8,500 stars on Github and we're trusted by startups and large enterprises like Serif Health, Skoot, and Poppy.",
                    imagePath: FeaturePageIcons.SuperTokensBenefits.OpenSource as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },
            ],
        }
    ],
}

const ssoConfig: FeaturePageSectionType = {
    divider: {
        dividerBackground: "linear-gradient(45deg, rgba(255, 153, 51, 0) 0%,rgba(255, 153, 51, 0.20) 45%, rgba(255, 153, 51, 0) 100%)",
        hueColor: "linear-gradient(45deg,rgba(255, 153, 51, 0.20),rgba(255, 153, 51, 0.20))",
    },
    children: [
        {
            type: "title-subtitle-cta",
            flex: "column",
            title: {
                text: "SuperTokens Benefits",
                highlight: {
                    mode: "grey-out",
                    texts: ["Benefits"],
                },
            },
            supertext: "Why use SuperTokens?",
        },
        {
            type: "bullets-list",
            direction: "vertical",
            flex: "column",
            spacing: 132,
            addBlur: true,
            backgroundConfig: {
                background: FeaturePageIcons.SuperTokensBenefits.Background,
                position: "right",
                right: "-120px",
                top: "-60px",
                bottom: "-60px",
            },
            rootClassNames: [supertokensBenefitsStyles["supertokens-benefits-bullet-list"]],
            bullets: [
                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #F93 0%, #ED1F18 100%)",
                    title: "Implement SSO quickly",
                    subtitle: "SuperTokens has integrations with the 5 major identity providers by default. However, more powerfully, it allows developers to add ANY SSO provider to their application within an hour - as long as the provider uses the OAuth 2.0 or SAML protocol.",
                    imagePath: FeaturePageIcons.SSO.Benefits1 as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },

                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #54F0FF 0%, #345BD3 100%)",
                    title: "Additional functionality for B2C and B2B Apps",
                    subtitle: "For B2C apps, combine other authentication methods such as passwordless auth, 2FA with fair, flexible pricing. For B2B apps, combine enterprise SSO with multi-tenancy to enable each organization to have its own SSO configuration and user pools",
                    imagePath: FeaturePageIcons.SSO.Benefits2 as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },

                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #CEF5B8 0%, #168567 100%)",
                    title: "Open Source and self-hosting",
                    subtitle: "Self-hosting with SuperTokens is free. Our core project has ~10,000 stars on Github and we're trusted by startups and large enterprises alike",
                    imagePath: FeaturePageIcons.SuperTokensBenefits.OpenSource as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },
            ],
        }
    ],
}

const multitenancyConfig: FeaturePageSectionType = {
    divider: {
        dividerBackground: "linear-gradient(45deg, rgba(255, 153, 51, 0) 0%,rgba(255, 153, 51, 0.20) 45%, rgba(255, 153, 51, 0) 100%)",
        hueColor: "linear-gradient(45deg,rgba(255, 153, 51, 0.20),rgba(255, 153, 51, 0.20))",
    },
    children: [
        {
            type: "title-subtitle-cta",
            flex: "column",
            title: {
                text: "SuperTokens Benefits",
                highlight: {
                    mode: "grey-out",
                    texts: ["Benefits"],
                },
            },
            supertext: "Why use SuperTokens?",
        },
        {
            type: "bullets-list",
            direction: "vertical",
            flex: "column",
            spacing: 132,
            addBlur: true,
            backgroundConfig: {
                background: FeaturePageIcons.SuperTokensBenefits.Background,
                position: "right",
                right: "-120px",
                top: "-60px",
                bottom: "-60px",
            },
            rootClassNames: [supertokensBenefitsStyles["supertokens-benefits-bullet-list"]],
            bullets: [
                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #F93 0%, #ED1F18 100%)",
                    title: "Custom Configurations for each Tenant",
                    subtitle: "Design custom branded authentication screens for each tenant and configure unique authentication methods such as SSO, email password, social login, or a combination depending on the tenant's preferences and security policy.",
                    imagePath: FeaturePageIcons.Multitenancy.Benefits1 as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },

                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #54F0FF 0%, #345BD3 100%)",
                    title: "Unique user pools",
                    subtitle: "Each tenant has its own user pool. You can store each pool in a shared db (logical isolation), or in separate dbs (physical isolation).",
                    imagePath: FeaturePageIcons.Multitenancy.Benefits2 as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },

                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #CEF5B8 0%, #168567 100%)",
                    title: "Fully automated tenant creation",
                    subtitle: "Tenant creation and configuration is fully API driven. So each time your app has a new customer, you do not need to manually onboard them anymore.",
                    imagePath: FeaturePageIcons.Multitenancy.Benefits3 as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },
            ],
        }
    ],
}

const emailPasswordAuthConfig: FeaturePageSectionType = {
    divider: {
        dividerBackground: "linear-gradient(45deg, rgba(255, 153, 51, 0) 0%,rgba(255, 153, 51, 0.20) 45%, rgba(255, 153, 51, 0) 100%)",
        hueColor: "linear-gradient(45deg,rgba(255, 153, 51, 0.20),rgba(255, 153, 51, 0.20))",
    },
    children: [
        {
            type: "title-subtitle-cta",
            flex: "column",
            title: {
                text: "SuperTokens Benefits",
                highlight: {
                    mode: "grey-out",
                    texts: ["Benefits"],
                },
            },
            supertext: "Why use SuperTokens?",
        },
        {
            type: "bullets-list",
            direction: "vertical",
            flex: "column",
            spacing: 132,
            addBlur: true,
            backgroundConfig: {
                background: FeaturePageIcons.SuperTokensBenefits.Background,
                position: "right",
                right: "-120px",
                top: "-60px",
                bottom: "-60px",
            },
            rootClassNames: [supertokensBenefitsStyles["supertokens-benefits-bullet-list"]],
            bullets: [
                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #F93 0%, #ED1F18 100%)",
                    title: "Options for Pre-built or Custom UI",
                    subtitle: "SuperTokens allows you to get started with Pre-built React UI components that can tailored to your needs or you can build your own custom UI",
                    imagePath: FeaturePageIcons.EmailPasswordAuthentication.OptionsForPreBuiltUI as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },

                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #54F0FF 0%, #345BD3 100%)",
                    title: "Extensibility",
                    subtitle: "With Overriding, SuperTokens components, functions and APIs can be modified and extended to create auth flows which are custom to your use case.",
                    imagePath: FeaturePageIcons.EmailPasswordAuthentication.Extensibility as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },
            ],
        }
    ],
}

const passwordlessLoginConfig: FeaturePageSectionType = {
    divider: {
        dividerBackground: "linear-gradient(45deg, rgba(255, 153, 51, 0) 0%,rgba(255, 153, 51, 0.20) 45%, rgba(255, 153, 51, 0) 100%)",
        hueColor: "linear-gradient(45deg,rgba(255, 153, 51, 0.20),rgba(255, 153, 51, 0.20))",
    },
    children: [
        {
            type: "title-subtitle-cta",
            flex: "column",
            title: {
                text: "Benefits of Passwordless",
                highlight: {
                    mode: "grey-out",
                    texts: ["Passwordless"],
                },
            },
        },
        {
            type: "bullets-list",
            direction: "vertical",
            flex: "column",
            spacing: 132,
            addBlur: true,
            backgroundConfig: {
                background: FeaturePageIcons.SuperTokensBenefits.Background,
                position: "right",
                right: "-120px",
                top: "-60px",
                bottom: "-60px",
            },
            rootClassNames: [supertokensBenefitsStyles["supertokens-benefits-bullet-list"]],
            bullets: [
                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #F93 0%, #ED1F18 100%)",
                    title: "Enhanced Security",
                    subtitle: "Most data breaches occur due to stolen or weak passwords, removing the reliance on passwords makes systems more secure.",
                    imagePath: FeaturePageIcons.Passwordless.DataBreches as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },

                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #54F0FF 0%, #345BD3 100%)",
                    title: "Streamlined User Experience",
                    subtitle: "Improves the authentication experience since users do not have to enter passwords or go through the hassle of resetting them in case they are forgotten.",
                    imagePath: FeaturePageIcons.Passwordless.AuthExperience as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },
            ],
        }
    ],
}



const socialLoginConfig: FeaturePageSectionType = {
    divider: {
        dividerBackground: "linear-gradient(45deg, rgba(255, 153, 51, 0) 0%,rgba(255, 153, 51, 0.20) 45%, rgba(255, 153, 51, 0) 100%)",
        hueColor: "linear-gradient(45deg,rgba(255, 153, 51, 0.20),rgba(255, 153, 51, 0.20))",
    },
    children: [
        {
            type: "title-subtitle-cta",
            flex: "column",
            title: {
                text: "SuperTokens Benefits",
                highlight: {
                    mode: "grey-out",
                    texts: ["Benefits"],
                },
            },
            supertext: "Why use SuperTokens?",
        },
        {
            type: "bullets-list",
            direction: "vertical",
            flex: "column",
            spacing: 132,
            addBlur: true,
            backgroundConfig: {
                background: FeaturePageIcons.SuperTokensBenefits.Background,
                position: "right",
                right: "-120px",
                top: "-60px",
                bottom: "-60px",
            },
            rootClassNames: [supertokensBenefitsStyles["supertokens-benefits-bullet-list"]],
            bullets: [
                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #F93 0%, #ED1F18 100%)",
                    title: "Reduce sign-up friction",
                    subtitle: "Creating new accounts on websites can be a hassle for users and results in drop-offs. Social login circumvents this by allowing users to authenticate themselves with their pre-existing social accounts.",
                    imagePath: FeaturePageIcons.SocialLogin.ReduceFriction as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },

                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #54F0FF 0%, #345BD3 100%)",
                    title: "Email Verification",
                    subtitle: "Social login reduces the likelihood of user impersonation and fake email addresses and password recovery is handled by the provider.",
                    imagePath: FeaturePageIcons.SocialLogin.EmailVerification as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },

                {
                    useIndicators: true,
                    indicatorBackground: "linear-gradient(90deg, #CEF5B8 0%, #168567 100%)",
                    title: "Built-in and Custom Providers",
                    subtitle: "SuperTokens provides a number of built-in providers like Apple, Google, Facebook, Github, etc. Additionally, you can add your own custom OAuth provider.",
                    imagePath: FeaturePageIcons.SocialLogin.CustomProviders as any,
                    imageClassName: supertokensBenefitsStyles["supertokens-benefits-bullet-image"],
                },
            ],
        }
    ],
}


export const SuperTokensBenefits = (props: Props) => {
    const getConfigForType = () => {
        switch (props.type) {
            case "supertokens-benefits-magic-links":
                return magicLinksConfig;
            case "supertokens-benefits-multi-tenancy":
                return multitenancyConfig;
            case "supertokens-benefits-email-password-authentication":
                return emailPasswordAuthConfig;
            case "supertokens-benefits-passwordless-login":
                return passwordlessLoginConfig;
            case "supertokens-benefits-social-login":
                return socialLoginConfig;
            case "supertokens-benefits-account-linking":
                return accountLinkingConfig
            default:
                return ssoConfig;
        }
    }

    return renderSection(getConfigForType(), props.index, {
        primaryColor: "#FE9252",
        sections: [],
    });
}