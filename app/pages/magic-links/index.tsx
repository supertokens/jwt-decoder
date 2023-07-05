import { PageContainer } from "../../components/common/page-container";
import { FeaturePageBase } from "../../components/feature-pages/feature-page-base";
import {
    FeaturePageIcons,
} from "../../assets/images";
import universalStyles from "../../styles/feature-pages/universal-styles.module.css";
import magicLinkStyles from "../../styles/feature-pages/pages/magic-links/main.module.css";

MagicLinksFeaturePage.title = "Passwordless Authentication with email Magic Links";
export default function MagicLinksFeaturePage() {
    return (
        <PageContainer>
            <FeaturePageBase 
                config={{
                    primaryColor: "#A2FACF",
                    gradient: {
                        colors: [
                            "#70EA66",
                            "#0089D6",
                        ],
                    },
                    sections: [
                        {
                            flex: "row",
                            minimumPaddingRight: true,
                            backgroundConfig: {
                                background: FeaturePageIcons.MagicLinks.LandingBG,
                                className: universalStyles["landing-bg"],
                                // position: "right",
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
                                                text: "Passwordless Authentication with email Magic Links",
                                                highlight: {
                                                    mode: "primary",
                                                    texts: ["Magic", "Links"],
                                                },
                                            },
                                            subtitle: "Replace traditional email-password authentication with magic links that improve security and increase user conversion",
                                            cta: {
                                                targetUrl: "/docs/guides",
                                                text: "Start Today!"
                                            },
                                        },
                                        {
                                            type: "image",
                                            flex: "row",
                                            image: FeaturePageIcons.MagicLinks.Landing as any,
                                            imageClassName: universalStyles["landing-image"],
                                            rootClassNames: [universalStyles["landing-image-container"]],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            divider: {
                                dividerBackground: "radial-gradient(59296055.02% 50.00% at 50.00% 53.02%, rgba(112, 234, 102, 0.20) 0%, rgba(112, 234, 102, 0.00) 100%))",
                                hueColor: "rgba(162, 250, 207, 0.15)",
                            },
                            children: [
                                {
                                    type: "title-subtitle-cta",
                                    flex: "column",
                                    title: {
                                        text: "What are Magic Links",
                                        highlight: {
                                            mode: "grey-out",
                                            texts: ["Magic", "Links"],
                                        },
                                    },
                                    subtitle: "Magic link logins are a passwordless authentication method that sends a link to the user's email for authentication. Users no longer have to remember passwords as long as they have access to their email.",
                                },
                                {
                                    type: "pill",
                                    flex: "row",
                                    text: "User Flow",
                                    iconPath: FeaturePageIcons.UserFlowPill,
                                },
                                {
                                    type: "bullets-list",
                                    direction: "horizontal",
                                    buletTextClassName: universalStyles["magic-links-user-flow-bullet-text"],
                                    imageShadow: {
                                        background: "linear-gradient(180deg, #FFE690 0%, #EE8F2A 100%)",
                                    },
                                    bullets: [
                                        {
                                            subtitle: "The user lands on an authentication screen and inputs their email",
                                            imagePath: FeaturePageIcons.MagicLinks.UserFlow1 as any,
                                        },
                                        {
                                            subtitle: "The application sends a unique one-time use URL link to the user's email",
                                            imagePath: FeaturePageIcons.MagicLinks.UserFlow2 as any,
                                        },
                                        {
                                            subtitle: "Once the link is clicked, an access token is sent to the application to authenticate the user.",
                                            imagePath: FeaturePageIcons.MagicLinks.UserFlow3 as any,
                                        },
                                    ],
                                    flex: "row",
                                    spacing: 66,
                                    backgroundConfig: {
                                        background: FeaturePageIcons.MagicLinks.UserFlowBg,
                                        position: "right",
                                        right: "-10%",
                                        bottom: "-10%",
                                    },
                                }
                            ],
                            flex: "column",
                        },
                        {
                            flex: "column",
                            divider: {
                                dividerBackground: "radial-gradient(59296055.02% 50.00% at 50.00% 53.02%, rgba(112, 234, 102, 0.20) 0%, rgba(112, 234, 102, 0.00) 100%))",
                                hueColor: "rgba(162, 250, 207, 0.15)",
                            },
                            children: [
                                {
                                    type: "title-subtitle-cta",
                                    title: {
                                        text: "Things to keep in mind",
                                        highlight: {
                                            texts: ["mind"],
                                            mode: "grey-out",
                                        },
                                    },
                                    flex: "column",
                                    supertext: "Want to build it yourself?",
                                    subtitle: "Magic Links come with a few edge cases. Here are things that could go wrong.",
                                },
                                {
                                    type: "nested",
                                    flex: "row",
                                    children: [
                                        {
                                            type: "bullets-list",
                                            direction: 'vertical',
                                            flex: "column",
                                            bullets: [
                                                {
                                                    title: "Auto-consumption from email clients",
                                                    subtitle: "Email clients may click on the link as part of their anti-malware scanning. This would consume the link and render it invalid for the user.",
                                                    bulletImage: {
                                                        src: FeaturePageIcons.MagicLinks.BrokenLink,
                                                    },
                                                },
                                                {
                                                    title: "Email deliverability",
                                                    subtitle: "Magic link emails may land in the user's spam or junk folder, leaving the user frustrated if they can't find the email.",
                                                    bulletImage: {
                                                        src: FeaturePageIcons.MagicLinks.EmailAlert,
                                                    },
                                                },
                                                {
                                                    title: "Different browsers",
                                                    subtitle: "The browser used to request for a magic link maybe different than the one used to consume the link. Attackers can exploit this to gain access to accounts by spamming magic links to unsuspecting users. We ensure that only the user with access to the email account is able to authenticate to your service",
                                                    bulletImage: {
                                                        src: FeaturePageIcons.MagicLinks.BrowserSearch,
                                                    },
                                                },
                                            ],
                                        },
                                        {
                                            type: "image",
                                            flex: "column",
                                            // This is required because pngs are imported differently from svgs
                                            image: FeaturePageIcons.MagicLinks.SelfBuildSectionImage as any,
                                            rootClassNames: [magicLinkStyles["things-to-keep-in-mind-image"]],
                                        }
                                    ],
                                },
                                {
                                    type: "text",
                                    flex: "row",
                                    text: "SuperTokens is built with all these considerations!",
                                    rootClassNames: [magicLinkStyles["things-to-keep-in-mind-text"]],
                                }
                            ],
                        },
                        {
                            prebuiltType: "supertokens-benefits",
                            children: [],
                        },
                        {
                            divider: {
                                dividerBackground: "radial-gradient(59296055.02% 50.00% at 50.00% 53.02%, rgba(121, 126, 172, 0.20) 0%, rgba(121, 126, 172, 0.00) 100%)",
                                hueColor: "rgba(121, 126, 172, 0.15)",
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
                                            color: "#8D92A1",
                                        },
                                    },
                                },
                                {
                                    type: "nested",
                                    flex: "row",
                                    children: [
                                        {
                                            type: "title-subtitle-cta",

                                            flex: "column",
                                            subtitle: "Try supertokens to implement passwordless magic links. - we make it easy!",
                                            cta: {
                                                targetUrl: "/docs/guides",
                                                text: "Start Building",
                                                fillType: "white",
                                            },
                                        },
                                        {
                                            type: "text-cta",
                                            flex: "column",
                                            text: "Looking to implement passwordless magic links on your own?",
                                            indicator: {
                                                background: "linear-gradient(270deg, #7A7FA8 0%, #8D92A1 100%)"
                                            },
                                            cta: {
                                                targetUrl: "/blog/a-guide-to-implementing-passwordless-login",
                                                text: "See our blog",
                                                background: "",
                                                hue: "linear-gradient(134deg, #7D81AB 0%, #8D92A1 100%)",
                                            },
                                            rootClassNames: [magicLinkStyles["see-blog-section"]],
                                        }
                                    ],
                                }
                            ],
                        },
                    ],
                }}/>
        </PageContainer>
    );
}