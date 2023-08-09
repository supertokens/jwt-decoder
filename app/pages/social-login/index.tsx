import { PageContainer } from "../../components/common/page-container";
import { FeaturePageBase } from "../../components/feature-pages/feature-page-base";
import { FeaturePageIcons } from "../../assets/images";
import universalStyles from "../../styles/feature-pages/universal-styles.module.css";
import socialLoginStyles from "../../styles/feature-pages/pages/social-login/main.module.css";

SocialLoginPage.title = "Social Login";
export default function SocialLoginPage() {
    return (
        <PageContainer>
            <FeaturePageBase
                config={{
                    primaryColor: "#62F6FF",
                    gradient: {
                        colors: ["#62F6FF", "#8D54D5"]
                    },
                    sections: [
                        {
                            children: [
                                {
                                    type: "nested",
                                    flex: "row",
                                    spacing: "space-between",
                                    children: [
                                        {
                                            type: "title-subtitle-cta",
                                            flex: "column",
                                            title: {
                                                text: "Social Login",
                                                highlight: {
                                                    mode: "primary",
                                                    texts: []
                                                }
                                            },
                                            subtitle:
                                                "Reduce friction and increase conversation. Add Social Login to your application in minutes.",
                                            cta: {
                                                text: "Start Today!",
                                                targetUrl: "/docs/guides"
                                            },
                                            rootClassNames: [
                                                universalStyles["landing-text-container"],
                                                socialLoginStyles["landing-text-container"]
                                            ]
                                        },
                                        {
                                            type: "image",
                                            flex: "row",
                                            image: FeaturePageIcons.Multitenancy.Landing as any,
                                            imageClassName: universalStyles["landing-image"],
                                            rootClassNames: [
                                                universalStyles["landing-image-container"],
                                                socialLoginStyles["landing-image-container"]
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            children: [
                                {
                                    type: "title-subtitle-cta",
                                    flex: "column",
                                    title: {
                                        text: "What is Social Login?",
                                        highlight: {
                                            mode: "grey-out",
                                            texts: ["Social Login"]
                                        }
                                    }
                                },
                                {
                                    type: "text",
                                    flex: "column",
                                    text:
                                        "With Social Login end users can leverage existing login information from social network providers like Facebook, Google, or Github to sign into your website without having to create a new account specifically for that website. This reduces the friction for users when signing up to your website."
                                },
                                {
                                    type: "pill",
                                    flex: "row",
                                    text: "User Flow",
                                    iconPath: FeaturePageIcons.UserFlowPill as any
                                },
                                {
                                    type: "bullets-list",
                                    direction: "horizontal",
                                    flex: "row",
                                    bullets: [
                                        {
                                            subtitle:
                                                "Multiple organisations sign up to your SaaS app and require their own login methods or SSO configurations.",
                                            imagePath: FeaturePageIcons.Multitenancy.UserFlow1 as any
                                        },
                                        {
                                            subtitle:
                                                "Your app needs to offer unique user pools for each customer organization",
                                            imagePath: FeaturePageIcons.Multitenancy.UserFlow2 as any
                                        },
                                        {
                                            subtitle:
                                                "You can host all organizations on the same domain or offer each organization their own unique subdomain",
                                            imagePath: FeaturePageIcons.Multitenancy.UserFlow3 as any
                                        }
                                    ]
                                },
                                {
                                    type: "text",
                                    flex: "column",
                                    text:
                                        "Offer access control (authorization) and assign roles to the different members within the organization"
                                },
                                {
                                    type: "pill",
                                    flex: "row",
                                    text: "User Flow example 2",
                                    iconPath: FeaturePageIcons.UserFlowPill as any
                                },
                                {
                                    type: "text",
                                    flex: "column",
                                    text:
                                        "You have multiple independent applications with their own login and signup pages.\nHowever, instead of hosting SuperTokens for each app individually, you can use the multi tenancy feature to run a single SuperTokens instance to power all the apps. (with their own user pools)"
                                }
                            ]
                        },
                        {
                            prebuiltType: "supertokens-benefits-social-login",
                            children: []
                        },
                        {
                            children: [
                                {
                                    type: "title-subtitle-cta",
                                    flex: "column",
                                    title: {
                                        text: "Start Today!",
                                        highlight: {
                                            mode: "grey-out",
                                            texts: ["Today!"]
                                        }
                                    }
                                },
                                {
                                    type: "text",
                                    flex: "column",
                                    text: "Use SuperTokens to implement Social Login - we make it easy!"
                                },
                                {
                                    type: "title-subtitle-cta",
                                    flex: "column",
                                    rootClassNames: [universalStyles["no-top-margin"]],
                                    cta: {
                                        targetUrl: "/docs/guides",
                                        text: "Lets start!",
                                        fillType: "white",
                                    }
                                }
                            ]
                        }
                    ]
                }}
            />
        </PageContainer>
    );
}
