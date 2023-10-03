import { PageContainer } from "../../components/common/page-container";
import { FeaturePageBase } from "../../components/feature-pages/feature-page-base";
import {
    FeaturePageIcons,
} from "../../assets/images";
import universalStyles from "../../styles/feature-pages/universal-styles.module.css";
import accountLinkingStyles from "../../styles/feature-pages/pages/account-linking/main.module.css";


AccountLinkingFeaturePage.title = "Account Linking";

export default function AccountLinkingFeaturePage() {
    return (
        <PageContainer>
            <FeaturePageBase 
                config={{
                    primaryColor: "#A9C5F0",
                    gradient: {
                        colors: [
                            "#A9C5F0",
                            "#5B3E99",
                        ],
                    },
                    sections: [
                        {
                            flex: "row",
                            backgroundConfig: {
                                background: FeaturePageIcons.AccountLinking.LandingBG as any,
                                className: `${universalStyles["landing-bg"]} ${accountLinkingStyles["landing-bg"]}`,
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
                                                text: "Account Linking",
                                                highlight: {
                                                    mode: "primary",
                                                    texts: ["Account"],
                                                },
                                            },
                                            subtitle: "Enable users to sign up with multiple different login methods and access the same user account.",
                                            cta: {
                                                targetUrl: "/docs/guides",
                                                text: "Start Today!"
                                            },
                                            rootClassNames: [universalStyles["landing-text-container"], accountLinkingStyles["landing-text-container"]],
                                        },
                                        {
                                            type: "image",
                                            flex: "row",
                                            image: FeaturePageIcons.AccountLinking.Landing as any,
                                            imageClassName: universalStyles["landing-image"],
                                            rootClassNames: [universalStyles["landing-image-container"], accountLinkingStyles["landing-image-container"]],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            divider: {
                                dividerBackground: "linear-gradient(45deg, rgba(169, 197, 240, 0) 0%,rgba(169, 197, 240, 0.20) 50%, rgba(169, 197, 240, 0.00) 100%)",
                                hueColor: "rgba(169, 197, 240, 0.15)",
                            },
                            children: [
                                {
                                    type: "title-subtitle-cta",
                                    flex: "column",
                                    title: {
                                        text: "What is Account Linking?",
                                        highlight: {
                                            mode: "grey-out",
                                            texts: ["Account", "Linking?"],
                                        },
                                    },
                                    subtitle: "Account linking is a feature that allows you to associate different login methods to the same account. An example of this is:",
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
                                            subtitle: "A user signs up using their social Google account",
                                            imagePath: FeaturePageIcons.AccountLinking.UserFlow1 as any,
                                            imageClassName: accountLinkingStyles["bullet-list-image"]
                                        },
                                        {
                                            subtitle: "The same user accidentally signs up again using their email and creating a password (with the same email ID as the Google account)",
                                            imagePath: FeaturePageIcons.AccountLinking.UserFlow2 as any,
                                            imageClassName: accountLinkingStyles["bullet-list-image"]
                                        },
                                        {
                                            subtitle: "SuperTokens will link these accounts automatically",
                                            imagePath: FeaturePageIcons.AccountLinking.UserFlow3 as any,
                                            imageClassName: `${accountLinkingStyles["bullet-list-image"]} ${accountLinkingStyles["adjust-top"]}`
                                        },
                                    ],
                                    flex: "row",
                                    spacing: 66,
                                    backgroundConfig: {
                                        background: FeaturePageIcons.AccountLinking.UserFlowBg as any,
                                        position: "right",
                                        right: "-10%",
                                        bottom: "-10%",
                                        top:"30%",
                                        height: "auto",
                                        width: "100%"
                                    },
                                },
                                {
                                    type: "text",
                                    flex: "column",
                                    text: "This provides a better end user experience as users often forget which method they originally used to sign up to your product.",
                                },
                            ],
                            flex: "column",
                        },
                        {
                            prebuiltType: "supertokens-benefits-account-linking",
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
                                        text: "Supertokens Pricing",
                                        highlight: {
                                            mode: "custom",
                                            texts: ["Pricing"],
                                            color: "#8D92A1",
                                        },
                                    },
                                },
                                {
                                    flex:"row",
                                    type:"text",
                                    text:"Pricing corresponds to the number of MAUs.",
                                },
                                {
                                    type: "nested",
                                    flex: "row",
                                    children: [
                                        {
                                            type: "nested",
                                            flex: "column",
                                            rootClassNames: [universalStyles["no-top-margin"]],
                                            children: [
                                                {
                                                    type: "bullets-list",
                                                    direction: "vertical",
                                                    flex: "column",
                                                    bullets: [
                                                        {
                                                            title: "We have two pricing models:",
                                                            subtitle: "Account linking for self-hosted: $0.01 / MAU \n Account linking for managed service: $0.005 / MAU",
                                                            displaySubtitleBullets: true,
                                                            hideIndicator: true,
                                                        }
                                                    ],
                                                },
                                                {
                                                    type: "title-subtitle-cta",
                                                    flex: "column",
                                                    rootClassNames: [universalStyles["no-top-margin"]],
                                                    cta: {
                                                        targetUrl: "/docs/guides",
                                                        text: "Start Today!",
                                                        fillType: "white",
                                                    },
                                                },
                                            ],
                                        },
                                    ],
                                }
                            ],
                        },
                    ],
                }}/>
        </PageContainer>
    );
}