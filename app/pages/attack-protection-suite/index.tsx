import { PageContainer } from "../../components/common/page-container";
import { FeaturePageBase } from "../../components/feature-pages/feature-page-base";
import { FeaturePageIcons } from "../../assets/images";
import universalStyles from "../../styles/feature-pages/universal-styles.module.css";
import attackProtectionStyles from "../../styles/feature-pages/pages/attack-protection/main.module.css";

AttackProtectionFeaturePage.title = "Attack Protection Suite";
export default function AttackProtectionFeaturePage() {
    return (
        <PageContainer>
            <FeaturePageBase
                config={{
                    primaryColor: "#FFA953",
                    gradient: {
                        colors: ["#FFA953", "#FF4B33"]
                    },
                    sections: [
                        {
                            flex: "row",
                            backgroundConfig: {
                                background: FeaturePageIcons.AttackProtectionSuite.LandingBG as any,
                                className: `${universalStyles["landing-bg"]} ${attackProtectionStyles["landing-bg"]}`
                            },
                            children: [
                                {
                                    type: "nested",
                                    spacing: "space-around",
                                    flex: "row",
                                    children: [
                                        {
                                            type: "title-subtitle-cta",
                                            flex: "column",
                                            title: {
                                                text: "Attack protection suite",
                                                highlight: {
                                                    texts: ["Attack", "protection"],
                                                    mode: "primary"
                                                }
                                            },
                                            subtitle:
                                                "Enhance your application's security with intelligent cyber threat detection.",
                                            cta: {
                                                targetUrl: "/docs/attackprotectionsuite/introduction",
                                                text: "Start Today!"
                                            },
                                            rootClassNames: [
                                                universalStyles["landing-text-container"],
                                                attackProtectionStyles["landing-text-container"]
                                            ]
                                        },
                                        {
                                            type: "image",
                                            flex: "row",
                                            image: FeaturePageIcons.AttackProtectionSuite.Landing as any,
                                            imageClassName: universalStyles["landing-image"],
                                            rootClassNames: [
                                                universalStyles["landing-image-container"],
                                                attackProtectionStyles["landing-image-container"]
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            divider: {
                                dividerBackground:
                                    "linear-gradient(45deg, rgba(169, 197, 240, 0) 0%,rgba(169, 197, 240, 0.20) 50%, rgba(169, 197, 240, 0.00) 100%)",
                                hueColor: "rgba(169, 197, 240, 0.15)"
                            },
                            children: [
                                {
                                    type: "title-subtitle-cta",
                                    flex: "column",
                                    title: {
                                        text: "What is Attack Protection Suite?",
                                        highlight: {
                                            mode: "grey-out",
                                            texts: ["Attack", "Protection", "Suite?"]
                                        }
                                    },
                                    subtitle:
                                        "SuperTokens Attack protection suite is a service that allows our customers to identify suspicious activities, prevent unauthorized access, and protect user accounts from various cyber threats."
                                },
                                {
                                    type: "pill",
                                    flex: "row",
                                    text: "User Flow",
                                    iconPath: FeaturePageIcons.UserFlowPill
                                },
                                {
                                    type: "bullets-list",
                                    direction: "horizontal",
                                    flex: "row",
                                    bullets: [
                                        {
                                            subtitle:
                                                "The user lands on an authentication screen and inputs their email to login.",
                                            number: 1,
                                            leftContainerBottomMargin: 0
                                        }
                                    ]
                                },
                                {
                                    type: "bullets-list",
                                    direction: "horizontal",
                                    buletTextClassName: universalStyles["magic-links-user-flow-bullet-text"],
                                    imageShadow: {
                                        background: "linear-gradient(180deg, #FFE690 0%, #EE8F2A 100%)"
                                    },
                                    bullets: [
                                        {
                                            subtitle:
                                                "The server requests SuperTokens Attack protection suite service and gets threats details",
                                            imagePath: FeaturePageIcons.AttackProtectionSuite.UserFlow2 as any,
                                            imageClassName: attackProtectionStyles["bullet-list-image"],
                                            number: 2
                                        },
                                        {
                                            subtitle: "The login gets blocked if threat is detected",
                                            imagePath: FeaturePageIcons.AttackProtectionSuite.UserFlow3 as any,
                                            imageClassName: `${attackProtectionStyles["bullet-list-image"]} ${attackProtectionStyles["adjust-top"]}`,
                                            number: 3
                                        },
                                        {
                                            subtitle: "The login passes if threat is not detected",
                                            imagePath: FeaturePageIcons.AttackProtectionSuite.UserFlow4 as any,
                                            imageClassName: `${attackProtectionStyles["bullet-list-image"]} ${attackProtectionStyles["adjust-top"]}`,
                                            number: 4
                                        }
                                    ],
                                    flex: "row",
                                    spacing: 66,
                                    backgroundConfig: {
                                        background: FeaturePageIcons.AttackProtectionSuite.UserFlowBg as any,
                                        position: "right",
                                        right: "-10%",
                                        bottom: "-10%",
                                        top: "30%",
                                        height: "auto",
                                        width: "100%"
                                    }
                                }
                            ]
                        },
                        {
                            flex: "column",
                            divider: {
                                dividerBackground:
                                    "radial-gradient(59296055.02% 50.00% at 50.00% 53.02%, rgba(112, 234, 102, 0.20) 0%, rgba(112, 234, 102, 0.00) 100%))",
                                hueColor: "rgba(162, 250, 207, 0.15)"
                            },
                            children: [
                                {
                                    type: "title-subtitle-cta",
                                    title: {
                                        text: "What we check for",
                                        highlight: {
                                            texts: ["check"],
                                            mode: "custom",
                                            color: "#F8F7F7"
                                        }
                                    },
                                    flex: "column",
                                    supertext: "Want to build it yourself?"
                                },
                                {
                                    type: "nested",
                                    flex: "row",
                                    children: [
                                        {
                                            type: "bullets-list",
                                            direction: "horizontal",
                                            flex: "row",
                                            bullets: [
                                                {
                                                    title: "Brute Force Attack",
                                                    subtitle:
                                                        "Making sure your authentication isn’t spammed can be a hassle. Brute force detection alleviates this by only allowing access by a specific set of rules.",
                                                    bulletImage: {
                                                        src: FeaturePageIcons.AttackProtectionSuite.BruteForce
                                                    }
                                                },
                                                {
                                                    title: "Password Breach",
                                                    subtitle:
                                                        "Bad passwords are everywhere. Making sure your users set up secure passwords is a must. We check against a large database of breached passwords to inform you if your password is safe.",
                                                    bulletImage: {
                                                        src: FeaturePageIcons.AttackProtectionSuite.PasswordBreach
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type: "nested",
                                    flex: "row",
                                    children: [
                                        {
                                            type: "bullets-list",
                                            direction: "horizontal",
                                            flex: "row",
                                            bullets: [
                                                {
                                                    title: "Bot Detection",
                                                    subtitle:
                                                        "Bots are everywhere and detecting them is getting harder. Device and browser fingerprints used to gauge probabilities of bot usage.",
                                                    bulletImage: {
                                                        src: FeaturePageIcons.AttackProtectionSuite.BotDetection
                                                    }
                                                },
                                                {
                                                    title: "Others",
                                                    subtitle: (
                                                        <span>
                                                            Anomalies come in different shapes and sizes. We detect lots
                                                            of others such as: VPN access, TOR access, different
                                                            devices, impossible travel, etc. You can find out more about
                                                            it{" "}
                                                            <a
                                                                href="/docs/attackprotectionsuite/introduction"
                                                                style={{
                                                                    color: "#88eebc"
                                                                }}
                                                                target="_blank"
                                                            >
                                                                here
                                                            </a>
                                                            .
                                                        </span>
                                                    ),
                                                    bulletImage: {
                                                        src: FeaturePageIcons.AttackProtectionSuite.Others
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            prebuiltType: "supertokens-benefits-attack-protection",
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
                                    text: "Use SuperTokens to implement Attack protection - we make it easy!"
                                },
                                {
                                    type: "title-subtitle-cta",
                                    flex: "column",
                                    rootClassNames: [universalStyles["no-top-margin"]],
                                    cta: {
                                        targetUrl: "/docs/attackprotectionsuite/introduction",
                                        text: "Lets start!",
                                        fillType: "white"
                                    }
                                }
                            ]
                            // children: [
                            //     {
                            //         type: "title-subtitle-cta",
                            //         flex: "column",
                            //         title: {
                            //             text: "Start Today",
                            //             highlight: {
                            //                 mode: "custom",
                            //                 texts: ["Today"],
                            //                 color: "#8D92A1"
                            //             }
                            //         }
                            //     },
                            //     {
                            //         type: "nested",
                            //         flex: "row",
                            //         children: [
                            //             {
                            //                 type: "title-subtitle-cta",

                            //                 flex: "column",
                            //                 subtitle:
                            //                     "Try supertokens to implement Attack protection suite. - we make it easy!",
                            //                 cta: {
                            //                     targetUrl: "/docs/attackprotectionsuite/introduction",
                            //                     text: "Start Building",
                            //                     fillType: "white"
                            //                 }
                            //             },
                            //             {
                            //                 type: "text-cta",
                            //                 flex: "column",
                            //                 text: "Looking to know more about our Attack protection suite feature?",
                            //                 indicator: {
                            //                     background: "linear-gradient(270deg, #7A7FA8 0%, #8D92A1 100%)"
                            //                 },
                            //                 cta: {
                            //                     targetUrl: "/blog",
                            //                     text: "See our blog",
                            //                     background: "",
                            //                     hue: "linear-gradient(134deg, #7D81AB 0%, #8D92A1 100%)"
                            //                 },
                            //                 rootClassNames: [attackProtectionStyles["see-blog-section"]]
                            //             }
                            //         ]
                            //     }
                            // ]
                        }
                    ]
                }}
            />
        </PageContainer>
    );
}
