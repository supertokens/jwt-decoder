import { PageContainer } from "../../components/common/page-container";
import { FeaturePageBase } from "../../components/feature-pages/feature-page-base";
import { FeaturePageIcons } from "../../assets/images";
import universalStyles from "../../styles/feature-pages/universal-styles.module.css";

PasswordlessLoginFeaturePage.title = "Passwordless Login";
export default function PasswordlessLoginFeaturePage() {
    return (
        <PageContainer>
            <FeaturePageBase
                config={{
                    primaryColor: "#A2FACF",
                    gradient: {
                        colors: ["#6272FF", "#54D569"]
                    },
                    sections: [
                        {
                            flex: "row",
                            minimumPaddingRight: false,
                            backgroundConfig: {
                                background: FeaturePageIcons.MagicLinks.LandingBG,
                                className: universalStyles["landing-bg"]
                            },
                            children: [
                                {
                                    type: "nested",
                                    spacing: "space-between",
                                    flex: "row",
                                    children: [
                                        {
                                            type: "title-subtitle-cta",
                                            rootClassNames: [universalStyles["landing-text-container"]],
                                            flex: "column",
                                            title: {
                                                text: "Passwordless Login",
                                                highlight: {
                                                    mode: "primary",
                                                    texts: []
                                                }
                                            },
                                            subtitle:
                                                "Passwordless Login streamlines the authentication experience and increases security.",
                                            cta: {
                                                targetUrl: "/docs/guides",
                                                text: "Start Today!"
                                            }
                                        },
                                        {
                                            type: "image",
                                            flex: "row",
                                            image: FeaturePageIcons.Passwordless.Landing as any,
                                            imageClassName: universalStyles["landing-image"],
                                            rootClassNames: [universalStyles["landing-image-container"]]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            divider: {
                                dividerBackground:
                                    "linear-gradient(45deg, rgba(98, 246, 255, 0) 0%,rgba(98, 246, 255, 0.12) 45%, rgba(98, 246, 255, 0.00) 100%)",
                                hueColor: "linear-gradient(45deg,rgba(98, 246, 255, 0.15),rgba(98, 246, 255, 0.15))"
                            },
                            children: [
                                {
                                    type: "title-subtitle-cta",
                                    flex: "column",
                                    title: {
                                        text: "What is Passwordless login?",
                                        highlight: {
                                            mode: "grey-out",
                                            texts: ["Passwordless", "login?"]
                                        }
                                    },
                                    subtitle:
                                        "Most people tend to re-use their passwords across sites making them susceptible to attacks. Passwordless replaces traditional password-based authentication with other authentication factors that are more secure. This could be through sending an OTP or magic link through email or phone number."
                                },
                                {
                                    type: "image",
                                    flex: "row",
                                    image: FeaturePageIcons.Passwordless.GetStarted as any,
                                },
                            ]
                        },
                       
                        {
                            prebuiltType: "supertokens-benefits-passwordless-login",
                            children: []
                        },
                        {
                            divider: {
                                dividerBackground:
                                    "radial-gradient(59296055.02% 50.00% at 50.00% 53.02%, rgba(121, 126, 172, 0.20) 0%, rgba(121, 126, 172, 0.00) 100%)",
                                hueColor: "rgba(121, 126, 172, 0.15)"
                            },
                            children: [
                                {
                                    type: "title-subtitle-cta",
                                    flex: "column",
                                    title: {
                                        text: "Start Today",
                                        highlight: {
                                            mode: "custom",
                                            texts: ["Today"],
                                            color: "#8D92A1"
                                        }
                                    }
                                },
                                {
                                    type: "nested",
                                    flex: "row",
                                    children: [
                                        {
                                            type: "title-subtitle-cta",

                                            flex: "column",
                                            subtitle:
                                                "Use SuperTokens to implement Passwordless login- we make it easy!",
                                            cta: {
                                                targetUrl: "/docs/guides",
                                                text: "Lets start!",
                                                fillType: "white"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }}
            />
        </PageContainer>
    );
}
