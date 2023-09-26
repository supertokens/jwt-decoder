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
                    primaryColor: "#6272FF",
                    gradient: {
                        colors: ["#6272FF", "#54D569"]
                    },
                    sections: [
                        {
                            flex: "row",
                            minimumPaddingRight: true,
                            backgroundConfig: {
                                background: FeaturePageIcons.MagicLinks.LandingBG,
                                className: universalStyles["landing-bg"],
                            },
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
                                            image: FeaturePageIcons.SocialLogin.Landing as any,
                                            imageClassName: universalStyles["landing-image"],
                                            rootClassNames: [
                                                universalStyles["landing-image-container"],
                                                socialLoginStyles["landing-image-container"]
                                            ]
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            divider: {
                                dividerBackground:
                                    "linear-gradient(45deg, rgba(98, 246, 255, 0) 10%,rgba(98, 246, 255, 0.10) 55%, rgba(98, 246, 255, 0.00) 100%)",
                                hueColor: "linear-gradient(45deg,rgba(98, 246, 255, 0.2),rgba(98, 246, 255, 0.2))"
                            },
                            children: [
                                {
                                    type: "title-subtitle-cta",
                                    flex: "column",
                                    title: {
                                        text: "What is Social Login?",
                                        highlight: {
                                            mode: "grey-out",
                                            texts: ["Social", "Login?"]
                                        }
                                    }
                                },
                                {
                                    type: "text",
                                    flex: "column",
                                    text:
                                        "With Social Login end users can leverage existing login information from social network providers like Facebook, Google, or Github to sign into your website without having to create a new account specifically for that website. This reduces the friction for users when signing up to your website."
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
                                            mode: "custom",
                                            color: "#7c81ab",
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
                                        fillType: "white"
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
