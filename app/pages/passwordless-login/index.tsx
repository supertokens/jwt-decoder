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
                                                targetUrl: "/docs/passwordless/introduction",
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
                                    spacing: 66,
                                    backgroundConfig: {
                                        background: FeaturePageIcons.MagicLinks.UserFlowBg,
                                        position: "right",
                                        right: "-10%",
                                        bottom: "-10%",
                                    },
                                },
                            ]
                            // flex: "column",
                        },
                        // {
                        //     flex: "column",
                        //     divider: {
                        //         dividerBackground: "radial-gradient(59296055.02% 50.00% at 50.00% 53.02%, rgba(112, 234, 102, 0.20) 0%, rgba(112, 234, 102, 0.00) 100%))",
                        //         hueColor: "rgba(162, 250, 207, 0.15)",
                        //     },
                        //     children: [
                        //         {
                        //             type: "title-subtitle-cta",
                        //             title: {
                        //                 text: "Things to keep in mind",
                        //                 highlight: {
                        //                     texts: ["mind"],
                        //                     mode: "grey-out",
                        //                 },
                        //             },
                        //             flex: "column",
                        //             supertext: "Want to build it yourself?",
                        //             subtitle: "Magic Links come with a few edge cases. Here are things that could go wrong.",
                        //         },
                        //         {
                        //             type: "nested",
                        //             flex: "row",
                        //             children: [
                        //                 {
                        //                     type: "bullets-list",
                        //                     direction: 'vertical',
                        //                     flex: "column",
                        //                     bullets: [
                        //                         {
                        //                             title: "Auto-consumption from email clients",
                        //                             subtitle: "Email clients may click on the link as part of their anti-malware scanning. This would consume the link and render it invalid for the user.",
                        //                             bulletImage: {
                        //                                 src: FeaturePageIcons.MagicLinks.BrokenLink,
                        //                             },
                        //                         },
                        //                         {
                        //                             title: "Email deliverability",
                        //                             subtitle: "Magic link emails may land in the user's spam or junk folder, leaving the user frustrated if they can't find the email.",
                        //                             bulletImage: {
                        //                                 src: FeaturePageIcons.MagicLinks.EmailAlert,
                        //                             },
                        //                         },
                        //                         {
                        //                             title: "Different browsers",
                        //                             subtitle: "The browser used to request for a magic link maybe different than the one used to consume the link. Attackers can exploit this to gain access to accounts by spamming magic links to unsuspecting users. We ensure that only the user with access to the email account is able to authenticate to your service",
                        //                             bulletImage: {
                        //                                 src: FeaturePageIcons.MagicLinks.BrowserSearch,
                        //                             },
                        //                         },
                        //                     ],
                        //                 },
                        //                 {
                        //                     type: "image",
                        //                     flex: "column",
                        //                     // This is required because pngs are imported differently from svgs
                        //                     image: FeaturePageIcons.MagicLinks.SelfBuildSectionImage as any,
                        //                     rootClassNames: [magicLinkStyles["things-to-keep-in-mind-image"]],
                        //                 }
                        //             ],
                        //         },
                        //         {
                        //             type: "text",
                        //             flex: "row",
                        //             text: "SuperTokens is built with all these considerations!",
                        //             rootClassNames: [magicLinkStyles["things-to-keep-in-mind-text"]],
                        //         }
                        //     ],
                        // },
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
                                                targetUrl: "/docs/passwordless/introduction",
                                                text: "Lets start!",
                                                fillType: "white"
                                            }
                                        }
                                        // {
                                        //     type: "text-cta",
                                        //     flex: "column",
                                        //     text: "Looking to implement passwordless magic links on your own?",
                                        //     indicator: {
                                        //         background: "linear-gradient(270deg, #7A7FA8 0%, #8D92A1 100%)"
                                        //     },
                                        //     cta: {
                                        //         targetUrl: "/blog/a-guide-to-implementing-passwordless-login",
                                        //         text: "See our blog",
                                        //         background: "",
                                        //         hue: "linear-gradient(134deg, #7D81AB 0%, #8D92A1 100%)",
                                        //     },
                                        //     rootClassNames: [magicLinkStyles["see-blog-section"]],
                                        // }
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
